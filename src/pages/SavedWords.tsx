import { useLearningStore } from "../store/useLearningStore";
import { vocabularyList } from "../data/const";
import { Bookmark, ArrowLeft, Volume2, BookmarkMinus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function SavedWords() {
  const { savedWords, unsaveWord } = useLearningStore();
  const navigate = useNavigate();

  const savedVocabulary = vocabularyList.filter((word) =>
    savedWords.includes(word.id),
  );

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "zh-CN";
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#f8f9fa] pb-12">
      {/* Header Banner */}
      <div className="bg-[#0284c7] w-full shadow-sm">
        <div className="container mx-auto px-4 py-8 sm:py-12 flex flex-col md:flex-row items-start md:items-center justify-between text-white">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <button
              onClick={() => navigate(-1)}
              className="bg-white/20 p-3 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-8 h-8 text-white" />
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-1 tracking-tight flex items-center gap-2 cursor-pointer">
                Từ Đã Lưu <Bookmark className="w-6 h-6 fill-white" />
              </h1>
              <p className="text-white/80 text-sm sm:text-base">
                Danh sách các từ vựng bạn yêu thích và cần nhớ lâu
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {savedWords.length}
              </div>
              <div className="text-xs sm:text-sm text-white/90 font-medium mt-1">
                Tổng số từ
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-auto max-h-[65vh]">
            <table className="w-full text-left text-sm relative">
              <thead className="bg-slate-100 text-slate-600 font-bold uppercase text-[12px] sticky top-0 z-10 shadow-sm">
                <tr>
                  <th className="px-6 py-4 bg-slate-100 border-b border-slate-200">
                    Từ vựng
                  </th>
                  <th className="px-6 py-4 bg-slate-100 border-b border-slate-200">
                    Phiên âm
                  </th>
                  <th className="px-6 py-4 bg-slate-100 border-b border-slate-200">
                    Loại từ
                  </th>
                  <th className="px-6 py-4 bg-slate-100 border-b border-slate-200">
                    Ý nghĩa
                  </th>
                  <th className="px-6 py-4 min-w-[200px] bg-slate-100 border-b border-slate-200">
                    Ví dụ
                  </th>
                  <th className="px-6 py-4 min-w-[200px] bg-slate-100 border-b border-slate-200">
                    Phiên âm ví dụ
                  </th>
                  <th className="px-6 py-4 min-w-[200px] bg-slate-100 border-b border-slate-200">
                    Nghĩa ví dụ
                  </th>
                  <th className="px-6 py-4 bg-slate-100 border-b border-slate-200 text-center">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {savedVocabulary.length > 0 ? (
                  savedVocabulary.map((word) => (
                    <tr
                      key={word.id}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-slate-800">
                            {word.word}
                          </span>
                          <button
                            onClick={() => speak(word.word)}
                            className="p-1.5 bg-sky-100 hover:bg-sky-200 text-sky-500 rounded-lg transition-colors cursor-pointer"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-sky-600">
                        {word.pinyin}
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded text-xs font-bold uppercase">
                          {word.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold text-slate-700">
                        {word.meaning}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {word.example}
                      </td>
                      <td className="px-6 py-4 text-sky-600">
                        {word.pinyinExample}
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        {word.exampleMeaning}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => unsaveWord(word.id)}
                          title="Bỏ lưu"
                          className="p-2 hover:bg-rose-50 text-rose-500 rounded-lg transition-colors group/btn cursor-pointer"
                        >
                          <BookmarkMinus className="w-5 h-5 group-hover/btn:fill-rose-100" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-6 py-12 text-center text-slate-500"
                    >
                      {savedWords.length === 0
                        ? "Bạn chưa lưu từ vựng nào."
                        : "Không tìm thấy từ vựng phù hợp."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
