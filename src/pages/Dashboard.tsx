import { useNavigate } from "react-router-dom";
import { useLearningStore } from "../store/useLearningStore";
import {
  Layers,
  Bookmark,
  Flame,
  Type,
  MapPin,
  AlignLeft,
  ShieldAlert,
} from "lucide-react";
import { useEffect } from "react";

export function Dashboard() {
  const navigate = useNavigate();
  const {
    streak,
    history,
    savedWords,
    currentSession,
    checkStreak,
    startDailySession,
  } = useLearningStore();

  useEffect(() => {
    checkStreak();
  }, [checkStreak]);

  const today = new Date().toDateString();
  const hasIncompleteSession =
    currentSession.wordsToLearn.length > 0 &&
    !currentSession.completed &&
    currentSession.date === today &&
    !currentSession.isReviewSession;

  const handleStart = () => {
    if (!hasIncompleteSession) {
      startDailySession();
    }
    navigate("/learning");
  };

  const totalLearned = history.reduce((acc, h) => acc + h.learned, 0);

  return (
    <div className="w-full flex flex-col pb-12 bg-[#f8f9fa] min-h-screen">
      {/* Full-width Green Banner */}
      <div className="bg-[#008f68] w-full shadow-sm">
        <div className="container mx-auto px-4 py-8 sm:py-12 flex flex-col md:flex-row items-start md:items-center justify-between text-white">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-1 tracking-tight">
                Học Từ Vựng Cùng Flashcard
              </h1>
              <p className="text-white/80 text-sm sm:text-base">
                Cải thiện trí nhớ - Mọi lúc mọi nơi
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 flex items-center justify-center gap-1">
                {streak} <Flame className="w-6 h-6 fill-yellow-400" />
              </div>
              <div className="text-xs sm:text-sm text-white/90 font-medium mt-1">
                Chuỗi ngày
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {totalLearned}
              </div>
              <div className="text-xs sm:text-sm text-white/90 font-medium mt-1">
                Từ hoàn thành
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid using exact DOM structure matching Hi HSK */}
      <div className="container mx-auto px-4 mt-8 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Bài học mới (Green) */}
          <a
            onClick={handleStart}
            className="cursor-pointer group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <div className="bg-[#1fcb7e] p-5 text-white relative h-[120px] overflow-hidden">
              <span className="absolute -top-4 -right-2 text-[100px] font-black text-white/20 select-none pointer-events-none font-sans leading-none">
                我
              </span>
              <div className="relative z-10 flex flex-col items-start gap-1">
                <span className="text-[22px] font-bold tracking-tight">
                  BÀI HỌC MỚI
                </span>
                <span className="inline-block bg-white/20 text-white text-[11px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  HẰNG NGÀY
                </span>
              </div>
              <Layers className="absolute right-5 bottom-4 z-10 w-6 h-6 opacity-80" />
            </div>

            <div className="p-5 flex-1 flex flex-col bg-white">
              <p className="text-slate-600 text-[14px] mb-5 leading-relaxed line-clamp-2 min-h-[42px]">
                Khám phá và ghi nhớ 10 từ vựng mới mỗi ngày để liên tục mở rộng
                vốn từ tiếng Trung của bạn.
              </p>

              <div className="flex flex-wrap items-center gap-2 mb-6 min-h-[64px] content-start">
                <span className="flex items-center gap-1 text-[12px] text-[#16a34a] bg-[#f0fdf4] border border-[#bbf7d0] px-2 py-1 rounded">
                  <span className="font-serif font-bold text-sm px-0.5">T</span>{" "}
                  Ôn tập từ vựng khó
                </span>
                <span className="flex items-center gap-1 text-[12px] text-[#16a34a] bg-[#f0fdf4] border border-[#bbf7d0] px-2 py-1 rounded">
                  <Type className="w-3.5 h-3.5" /> Từ vựng mới
                </span>
              </div>

              <div className="mt-auto border-t border-slate-100 pt-4 flex justify-between items-center text-[#16a34a] font-bold text-sm group-hover:text-[#15803d] transition-colors">
                <span>{hasIncompleteSession ? "Học tiếp" : "Bắt đầu học"}</span>
                <span className="text-lg leading-none">→</span>
              </div>
            </div>
          </a>

          {/* Card 2: Ôn tập (Dark Green) */}
          <a
            onClick={() => {
              if (totalLearned < 20) {
                alert(
                  "Vui lòng học bài mới để đạt mốc 20 từ hoàn thành trước khi ôn tập",
                );
                return;
              }
              useLearningStore.getState().startReviewSession();
              navigate("/learning");
            }}
            className="cursor-pointer group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <div className="bg-[#1bb98e] p-5 text-white relative h-[120px] overflow-hidden">
              <span className="absolute -top-4 -right-2 text-[100px] font-black text-white/20 select-none pointer-events-none font-sans leading-none">
                今
              </span>
              <div className="relative z-10 flex flex-col items-start gap-1">
                <span className="text-[22px] font-bold tracking-tight">
                  ÔN TẬP
                </span>
                <span className="inline-block bg-white/20 text-white text-[11px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  CẦN CẢI THIỆN
                </span>
              </div>
              <Layers className="absolute right-5 bottom-4 z-10 w-6 h-6 opacity-80" />
            </div>

            <div className="p-5 flex-1 flex flex-col bg-white">
              <p className="text-slate-600 text-[14px] mb-5 leading-relaxed line-clamp-2 min-h-[42px]">
                Củng cố trí nhớ bằng cách ôn lại những từ vựng đã học và các từ
                bạn còn hay làm sai.
              </p>

              <div className="flex flex-wrap items-center gap-2 mb-6 min-h-[64px] content-start">
                <span className="flex items-center gap-1 text-[12px] text-[#0d9488] bg-[#f0fdfa] border border-[#99f6e4] px-2 py-1 rounded">
                  <AlignLeft className="w-3.5 h-3.5" /> Ôn lại các từ khó
                </span>
                <span className="flex items-center gap-1 text-[12px] text-[#0d9488] bg-[#f0fdfa] border border-[#99f6e4] px-2 py-1 rounded">
                  <MapPin className="w-3.5 h-3.5" /> Từ vựng đã học
                </span>
              </div>

              <div className="mt-auto border-t border-slate-100 pt-4 flex justify-between items-center text-[#0d9488] font-bold text-sm group-hover:text-[#0f766e] transition-colors">
                <span>Ôn tập nào</span>
                <span className="text-lg leading-none">→</span>
              </div>
            </div>
          </a>

          {/* Card 3: Từ đã lưu (Blue) */}
          <a
            onClick={() => navigate("/saved")}
            className="cursor-pointer group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <div className="bg-[#2ab6fb] p-5 text-white relative h-[120px] overflow-hidden">
              <span className="absolute -top-4 -right-2 text-[100px] font-black text-white/20 select-none pointer-events-none font-sans leading-none">
                随
              </span>
              <div className="relative z-10 flex flex-col items-start gap-1">
                <span className="text-[22px] font-bold tracking-tight">
                  TỪ ĐÃ LƯU
                </span>
                <span className="inline-block bg-white/20 text-white text-[11px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  YÊU THÍCH
                </span>
              </div>
              <Bookmark className="absolute right-5 bottom-4 z-10 w-6 h-6 opacity-80" />
            </div>

            <div className="p-5 flex-1 flex flex-col bg-white">
              <p className="text-slate-600 text-[14px] mb-5 leading-relaxed line-clamp-2 min-h-[42px]">
                Danh sách những từ vựng quan trọng hoặc khó nhớ mà bạn đã chủ
                động lưu lại để tiện xem lại.
              </p>

              <div className="flex flex-wrap items-center gap-2 mb-6 min-h-[64px] content-start">
                <span className="flex items-center gap-1 text-[12px] text-[#0284c7] bg-[#f0f9ff] border border-[#bae6fd] px-2 py-1 rounded">
                  <Bookmark className="w-3.5 h-3.5" /> {savedWords.length} từ
                  lưu
                </span>
                <span className="flex items-center gap-1 text-[12px] text-[#0284c7] bg-[#f0f9ff] border border-[#bae6fd] px-2 py-1 rounded">
                  <ShieldAlert className="w-3.5 h-3.5" /> Từ vựng phức tạp
                </span>
              </div>

              <div className="mt-auto border-t border-slate-100 pt-4 flex justify-between items-center text-[#0284c7] font-bold text-sm group-hover:text-[#0369a1] transition-colors">
                <span>Xem danh sách</span>
                <span className="text-lg leading-none">→</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
