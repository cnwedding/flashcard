import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { UserCircle, ChevronDown } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

export function Onboarding() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !age || !gender) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }
    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        data: {
          full_name: fullName,
          age: parseInt(age),
          gender: gender,
        },
      });

      if (error) throw error;
      
      // Update local state if needed, or just navigate
      navigate("/");
    } catch (err: any) {
      alert(err.message || "Có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen overflow-hidden flex items-center justify-center bg-emerald-400 p-4 relative font-sans">
      <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-3xl shadow-sm border-b-8 border-emerald-600 relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 bg-emerald-100 rounded-[2rem] flex items-center justify-center mb-6 border-b-4 border-emerald-200">
          <UserCircle className="text-emerald-500 w-12 h-12" />
        </div>

        <h1 className="text-3xl font-black text-center text-slate-800 mb-2 tracking-tight">
          Chào mừng bạn mới!
        </h1>
        <p className="text-slate-500 font-bold text-center mb-6 text-sm">
          Hãy cho chúng mình biết thêm về bạn nhé
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <label className="block text-slate-700 font-bold mb-1 ml-1 text-sm">Họ và tên</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-slate-100 text-slate-800 border-2 border-slate-200 focus:border-emerald-400 focus:bg-white outline-none transition-colors font-bold placeholder:text-slate-400"
              placeholder="Nguyễn Văn A"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-bold mb-1 ml-1 text-sm">Tuổi</label>
            <input
              type="number"
              required
              min="1"
              max="120"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-slate-100 text-slate-800 border-2 border-slate-200 focus:border-emerald-400 focus:bg-white outline-none transition-colors font-bold placeholder:text-slate-400"
              placeholder="18"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-bold mb-1 ml-1 text-sm">Giới tính</label>
            <div className="relative">
              <select
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full pl-5 pr-12 py-4 rounded-2xl bg-slate-100 text-slate-800 border-2 border-slate-200 focus:border-emerald-400 focus:bg-white outline-none transition-colors font-bold appearance-none cursor-pointer"
              >
                <option value="" disabled>Chọn giới tính</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Khác">Khác</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <ChevronDown className="w-6 h-6 text-slate-400" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 py-4 bg-sky-500 text-white rounded-2xl font-black text-xl border-b-4 border-sky-600 active:border-b-0 active:translate-y-1 transition-all uppercase tracking-widest disabled:opacity-50"
          >
            {loading ? "Đang lưu..." : "Bắt đầu học"}
          </button>
        </form>
      </div>
    </div>
  );
}
