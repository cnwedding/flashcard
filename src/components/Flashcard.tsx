import { useState } from "react";
import type { Word } from "../data/const";
import { Volume2 } from "lucide-react";
import { clsx } from "clsx";

interface FlashcardProps {
  word: Word;
}

export function Flashcard({ word }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const speak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(word.word);
      utterance.lang = "zh-CN";
      window.speechSynthesis.speak(utterance);
    }
  };

  const speakExample = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(word.example);
      utterance.lang = "zh-CN";
      window.speechSynthesis.speak(utterance);
    }
  };

  const typeColors: Record<string, string> = {
    verb: "bg-rose-100 text-rose-500 border-rose-200",
    noun: "bg-sky-100 text-sky-500 border-sky-200",
    adjective: "bg-amber-100 text-amber-500 border-amber-200",
    default: "bg-emerald-100 text-emerald-500 border-emerald-200",
  };
  const badgeColor = typeColors[word.type] || typeColors.default;

  return (
    <div
      className="w-full h-full max-h-full perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={clsx(
          "relative w-full h-full transition-transform duration-500 transform-style-3d",
          isFlipped && "rotate-y-180",
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full bg-white rounded-[2.5rem] border-2 border-slate-200 border-b-8 flex flex-col items-center justify-center p-6 backface-hidden">
          <button
            onClick={speak}
            className="absolute top-6 right-6 p-4 bg-sky-100 hover:bg-sky-200 text-sky-500 rounded-2xl transition-colors active:scale-95 cursor-pointer"
          >
            <Volume2 className="w-8 h-8 fill-sky-500" />
          </button>

          <div className="text-center space-y-6 w-full mt-4">
            <span
              className={`px-4 py-2 rounded-xl text-[20px] font-black tracking-widest uppercase border-2 ${badgeColor}`}
            >
              {word.type}
            </span>
            <h2 className="text-[6rem] leading-none sm:text-[8rem] font-black text-slate-800 mt-6 mb-9">
              {word.word}
            </h2>
            <p className="text-4xl font-bold text-sky-500">{word.pinyin}</p>
          </div>

          <p className="absolute bottom-6 text-xs text-slate-400 font-bold uppercase tracking-widest bg-slate-100 px-4 py-2 rounded-xl border-2 border-slate-200">
            Chạm để lật
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full h-full bg-white rounded-[2.5rem] border-2 border-slate-200 border-b-8 flex flex-col items-center justify-center p-8 backface-hidden rotate-y-180">
          <div className="space-y-8 w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-sm font-black text-sky-400 uppercase tracking-widest mb-2">
                Ý nghĩa
              </h3>
              <p className="text-5xl font-black text-slate-800 leading-tight">
                {word.meaning}
              </p>
            </div>

            <div className="h-1.5 rounded-full w-24 mx-auto bg-sky-200" />

            <div className="space-y-4 flex flex-col justify-center items-center">
              <h3 className="text-sm font-black text-sky-400 uppercase tracking-widest">
                Ví dụ
              </h3>
              <div className="flex items-center gap-3 relative">
                <p className="text-3xl font-bold text-slate-800 leading-tight">
                  {word.example}
                </p>
                <button
                  onClick={speakExample}
                  className="p-2.5 bg-sky-100 hover:bg-sky-200 text-sky-500 rounded-xl transition-colors active:scale-95 cursor-pointer"
                >
                  <Volume2 className="w-6 h-6 fill-sky-500" />
                </button>
              </div>
              <p className="text-xl font-bold text-sky-500">
                {word.pinyinExample}
              </p>
              <p className="text-xl font-bold text-slate-500">
                {word.exampleMeaning}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
