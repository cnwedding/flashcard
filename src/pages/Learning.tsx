import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLearningStore } from "../store/useLearningStore";
import { Flashcard } from "../components/Flashcard";
import { Check, Star, X, FastForward } from "lucide-react";

export function Learning() {
  const navigate = useNavigate();
  const { currentSession, saveWord, skipWord, learnedWord } =
    useLearningStore();

  useEffect(() => {
    if (currentSession.wordsToLearn.length === 0 && !currentSession.completed) {
      navigate("/");
    }
  }, [currentSession, navigate]);

  useEffect(() => {
    if (currentSession.completed) {
      navigate("/end");
    }
  }, [currentSession.completed, navigate]);

  if (currentSession.wordsToLearn.length === 0 || currentSession.completed)
    return null;

  const currentWord = currentSession.wordsToLearn[currentSession.currentIndex];
  const progress =
    (currentSession.currentIndex / currentSession.wordsToLearn.length) * 100;

  return (
    <div className="h-full flex flex-col p-4 sm:p-6 pb-6 min-h-0">
      {/* Top Progress Bar */}
      <div className="shrink-0 flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate("/")}
          className="p-2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
        >
          <X className="w-8 h-8" strokeWidth={3} />
        </button>
        <div className="flex-1 h-5 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            {/* Glossy shine on progress bar */}
            <div className="absolute top-1 left-2 right-2 h-1.5 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Flashcard Area */}
      <div className="flex-1 min-h-0 w-full flex items-center justify-center mb-6">
        <Flashcard key={currentWord.id} word={currentWord} />
      </div>

      {/* Actions Area */}
      <div className="shrink-0 grid grid-cols-3 gap-3">
        <button
          onClick={() => skipWord(currentWord.id)}
          className="flex flex-col items-center justify-center py-4 rounded-2xl bg-slate-100 text-slate-500 font-black uppercase tracking-widest border-2 border-slate-200 border-b-4 active:border-b-2 active:translate-y-0.5 transition-all cursor-pointer"
        >
          <FastForward className="w-8 h-8 mb-1" />
          <span className="text-[10px]">Từ này dễ quá, bỏ qua</span>
        </button>

        <button
          onClick={() => saveWord(currentWord.id)}
          className="flex flex-col items-center justify-center py-4 rounded-2xl bg-white text-amber-400 font-black uppercase tracking-widest border-2 border-slate-200 border-b-4 active:border-b-2 active:translate-y-0.5 transition-all cursor-pointer"
        >
          <Star className="w-8 h-8 mb-1 fill-amber-400" />
          <span className="text-[10px]">Từ này khó quá, lưu lại</span>
        </button>

        <button
          onClick={() => learnedWord(currentWord.id)}
          className="flex flex-col items-center justify-center py-4 rounded-2xl bg-emerald-500 text-white font-black uppercase tracking-widest border-2 border-emerald-600 border-b-4 active:border-b-2 active:translate-y-0.5 transition-all cursor-pointer"
        >
          <Check className="w-8 h-8 mb-1" strokeWidth={4} />
          <span className="text-[10px]">Từ tiếp theo đi</span>
        </button>
      </div>
    </div>
  );
}
