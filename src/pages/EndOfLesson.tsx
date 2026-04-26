import { useNavigate } from "react-router-dom";
import { useLearningStore } from "../store/useLearningStore";
import { Trophy, CheckCircle2 } from "lucide-react";
import Confetti from 'react-confetti';
import { useEffect, useState } from "react";

export function EndOfLesson() {
  const navigate = useNavigate();
  const { currentSession, history } = useLearningStore();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-emerald-50 overflow-hidden relative">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={300} />}
      
      <div className="max-w-md mx-auto w-full flex flex-col items-center justify-center p-6 z-10">
        <div className="w-40 h-40 bg-white rounded-[3rem] border-4 border-emerald-200 border-b-8 flex items-center justify-center mb-10 animate-bounce">
          <Trophy className="text-yellow-400 w-20 h-20 fill-yellow-400" />
        </div>
        
        <h1 className="text-4xl font-black mb-4 text-emerald-600 tracking-tight text-center">Hoàn thành bài học!</h1>
        <p className="text-emerald-500/80 font-bold text-xl mb-10 text-center">Bạn đang tiến bộ rất nhanh.</p>

        <div className="w-full bg-white p-6 rounded-[2rem] border-2 border-slate-200 border-b-8 mb-10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-500 w-8 h-8" strokeWidth={3} />
              <span className="font-bold text-xl text-slate-600">Từ vựng hôm nay</span>
            </div>
            <span className="text-2xl font-black text-slate-800">{currentSession.wordsToLearn.length}</span>
          </div>
          <div className="h-0.5 bg-slate-100 w-full" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Trophy className="text-yellow-400 w-8 h-8 fill-yellow-400" />
              <span className="font-bold text-xl text-slate-600">Tổng số từ đã học</span>
            </div>
            <span className="text-2xl font-black text-slate-800">{history.reduce((acc, h) => acc + h.learned, 0)}</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full py-5 bg-emerald-500 text-white rounded-2xl font-black text-xl uppercase tracking-widest border-b-4 border-emerald-600 active:border-b-0 active:translate-y-1 transition-all"
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );
}
