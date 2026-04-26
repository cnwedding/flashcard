import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { vocabularyList } from '../data/const';
import type { Word } from '../data/const';
import { supabase } from '../lib/supabase';

interface LearningState {
  savedWords: number[];
  skippedWords: number[];
  wrongWords: number[];
  history: { date: string; learned: number; reviewed: number }[];
  currentSession: {
    wordsToLearn: Word[];
    wordsToReview: Word[];
    currentIndex: number;
    completed: boolean;
    isReviewSession: boolean;
    date?: string;
    newWordsCount?: number;
  };
  streak: number;
  lastLoginDate: string | null;
  newLessonsCount: number;
  startDailySession: () => void;
  startReviewSession: () => void;
  saveWord: (id: number) => void;
  unsaveWord: (id: number) => void;
  skipWord: (id: number) => void;
  learnedWord: (id: number) => void;
  markWrong: (id: number) => void;
  nextWord: () => void;
  checkStreak: () => void;
  loadProgress: () => Promise<void>;
  syncProgress: () => Promise<void>;
}

const WORDS_PER_DAY = 10;
const REVIEW_WORDS_COUNT = 20;

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const useLearningStore = create<LearningState>()(
  persist(
    (set, get) => ({
      savedWords: [],
      skippedWords: [],
      wrongWords: [],
      history: [],
      streak: 0,
      lastLoginDate: null,
      newLessonsCount: 0,
      currentSession: {
        wordsToLearn: [],
        wordsToReview: [],
        currentIndex: 0,
        completed: false,
        isReviewSession: false,
        date: new Date().toDateString(),
        newWordsCount: 0,
      },

      loadProgress: async () => {
        const { data: sessionData } = await supabase.auth.getSession();
        if (!sessionData.session?.user) return;

        const { data, error } = await supabase
          .from('user_progress')
          .select('*')
          .eq('id', sessionData.session.user.id)
          .maybeSingle();

        if (data && !error) {
          set({
            savedWords: data.saved_words || [],
            skippedWords: data.skipped_words || [],
            wrongWords: data.wrong_words || [],
            history: data.history || [],
            streak: data.streak || 0,
            lastLoginDate: data.last_login_date || null,
            newLessonsCount: data.new_lessons_count || 0,
          });
        }
      },

      syncProgress: async () => {
        const { data: sessionData } = await supabase.auth.getSession();
        if (!sessionData.session?.user) return;

        const state = get();
        await supabase.from('user_progress').upsert({
          id: sessionData.session.user.id,
          saved_words: state.savedWords,
          skipped_words: state.skippedWords,
          wrong_words: state.wrongWords,
          history: state.history,
          streak: state.streak,
          last_login_date: state.lastLoginDate,
          new_lessons_count: state.newLessonsCount,
          updated_at: new Date().toISOString()
        });
      },

      checkStreak: () => {
        const today = new Date().toDateString();
        const { lastLoginDate } = get();

        if (lastLoginDate !== today) {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);

          if (lastLoginDate !== yesterday.toDateString() && lastLoginDate !== null) {
            set({ streak: 0 });
            get().syncProgress();
          }
        }

        const sessionDate = get().currentSession.date;
        if (sessionDate && sessionDate !== today) {
          set({
            currentSession: {
              wordsToLearn: [],
              wordsToReview: [],
              currentIndex: 0,
              completed: false,
              isReviewSession: false,
              date: today,
              newWordsCount: 0,
            }
          });
        }
      },

      startDailySession: () => {
        const { savedWords, skippedWords, wrongWords, newLessonsCount } = get();

        // Every 5th lesson is a review lesson
        if (newLessonsCount > 0 && newLessonsCount % 5 === 0) {
          get().startReviewSession();
          return;
        }

        const availableNewWords = vocabularyList.filter(
          (w) => !skippedWords.includes(w.id) && !savedWords.includes(w.id) && !wrongWords.includes(w.id)
        );

        const shuffledNewWords = shuffleArray(availableNewWords);
        const newWords = shuffledNewWords.slice(0, WORDS_PER_DAY);

        const allLearnedWords = vocabularyList.filter(
          (w) => skippedWords.includes(w.id) || savedWords.includes(w.id) || wrongWords.includes(w.id)
        );
        const reviewWords = shuffleArray(allLearnedWords).slice(0, 10);

        set({
          currentSession: {
            wordsToLearn: [...reviewWords, ...newWords],
            wordsToReview: [],
            currentIndex: 0,
            completed: false,
            isReviewSession: false,
            date: new Date().toDateString(),
            newWordsCount: newWords.length,
          },
        });
      },

      startReviewSession: () => {
        const { savedWords, skippedWords, wrongWords } = get();

        const allSavedWords = vocabularyList.filter(w => savedWords.includes(w.id));
        const allLearnedWords = vocabularyList.filter(w => !savedWords.includes(w.id) && (wrongWords.includes(w.id) || skippedWords.includes(w.id)));

        let pool = shuffleArray(allSavedWords);

        // If not enough saved words, fill with random other learned words
        if (pool.length < REVIEW_WORDS_COUNT) {
          const needed = REVIEW_WORDS_COUNT - pool.length;
          const randomLearned = shuffleArray(allLearnedWords).slice(0, needed);
          pool = [...pool, ...randomLearned];
        }

        const reviewWords = pool.slice(0, REVIEW_WORDS_COUNT);

        set({
          currentSession: {
            wordsToLearn: shuffleArray(reviewWords),
            wordsToReview: [],
            currentIndex: 0,
            completed: false,
            isReviewSession: true,
            date: new Date().toDateString(),
            newWordsCount: 0,
          },
        });
      },

      saveWord: (id) => {
        set((state) => ({
          savedWords: state.savedWords.includes(id) ? state.savedWords : [...state.savedWords, id],
          skippedWords: state.skippedWords.filter(wId => wId !== id),
          wrongWords: state.wrongWords.filter(wId => wId !== id),
        }));
        get().syncProgress();
        get().nextWord();
      },

      unsaveWord: (id) => {
        set((state) => ({
          savedWords: state.savedWords.filter(wId => wId !== id),
          skippedWords: state.skippedWords.includes(id) ? state.skippedWords : [...state.skippedWords, id]
        }));
        get().syncProgress();
      },

      skipWord: (id) => {
        set((state) => ({
          skippedWords: state.skippedWords.includes(id) ? state.skippedWords : [...state.skippedWords, id],
          savedWords: state.savedWords.filter(wId => wId !== id),
          wrongWords: state.wrongWords.filter(wId => wId !== id),
        }));
        get().syncProgress();
        get().nextWord();
      },

      learnedWord: (id) => {
        set((state) => {
          const isSaved = state.savedWords.includes(id);
          return {
            skippedWords: isSaved ? state.skippedWords : (state.skippedWords.includes(id) ? state.skippedWords : [...state.skippedWords, id]),
            wrongWords: state.wrongWords.filter(wId => wId !== id),
          };
        });
        get().syncProgress();
        get().nextWord();
      },

      markWrong: (id) => {
        set((state) => ({
          wrongWords: state.wrongWords.includes(id) ? state.wrongWords : [...state.wrongWords, id],
        }));
        get().syncProgress();
        get().nextWord();
      },

      nextWord: () => {
        const { currentSession, history, streak, lastLoginDate, newLessonsCount } = get();
        const nextIndex = currentSession.currentIndex + 1;

        if (nextIndex >= currentSession.wordsToLearn.length) {
          const today = new Date().toDateString();
          const todayHistoryIndex = history.findIndex(h => h.date === today);
          let newHistory = [...history];

          if (todayHistoryIndex >= 0) {
            if (currentSession.isReviewSession) {
              newHistory[todayHistoryIndex].reviewed += currentSession.wordsToLearn.length;
            } else {
              newHistory[todayHistoryIndex].learned += currentSession.newWordsCount || 0;
            }
          } else {
            if (currentSession.isReviewSession) {
              newHistory.push({ date: today, learned: 0, reviewed: currentSession.wordsToLearn.length });
            } else {
              newHistory.push({ date: today, learned: currentSession.newWordsCount || 0, reviewed: 0 });
            }
          }

          let newStreak = streak;
          let newLastLoginDate = lastLoginDate;

          if (lastLoginDate !== today) {
            newStreak += 1;
            newLastLoginDate = today;
          }

          let updatedNewLessonsCount = newLessonsCount;
          if (!currentSession.isReviewSession) {
            updatedNewLessonsCount += 1;
          } else {
            // If we just finished the review session (which happens every 5th lesson), we increment so it skips the modulo 5 next time
            if (newLessonsCount > 0 && newLessonsCount % 5 === 0) {
              updatedNewLessonsCount += 1;
            }
          }

          set({
            currentSession: { ...currentSession, currentIndex: nextIndex, completed: true },
            history: newHistory,
            streak: newStreak,
            lastLoginDate: newLastLoginDate,
            newLessonsCount: updatedNewLessonsCount
          });
          get().syncProgress();
        } else {
          set({
            currentSession: { ...currentSession, currentIndex: nextIndex },
          });
        }
      },
    }),
    {
      name: 'learning-storage',
    }
  )
);
