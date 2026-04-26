import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Feather, Eye, EyeOff } from "lucide-react";
import { supabase } from "../lib/supabase";
import React from "react";
import { useAuthStore } from "../store/useAuthStore";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const state = useAuthStore.getState();
    if (!state.isInitializing && state.user) {
      navigate("/");
    }

    // Subscribe to auth changes specifically for the login page
    const unsubscribe = useAuthStore.subscribe((state) => {
      if (!state.isInitializing && state.user) {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isSignUp) {
        if (password !== confirmPassword) {
          setError("Mật khẩu xác nhận không khớp");
          setLoading(false);
          return;
        }
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        alert("Đăng ký thành công! Bạn có thể đăng nhập ngay.");
        setIsSignUp(false);
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate("/");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center bg-sky-400 p-4 relative font-sans">
      <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-3xl shadow-sm border-b-8 border-sky-600 relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 bg-sky-100 rounded-[2rem] flex items-center justify-center mb-6 border-b-4 border-sky-200">
          <Feather className="text-sky-400 w-12 h-12 fill-sky-400" />
        </div>

        <h1 className="text-4xl font-black text-center text-slate-800 mb-2 tracking-tight">
          FlashCard
        </h1>
        <p className="text-slate-500 font-bold text-center mb-6">
          Học tiếng Trung thật vui!
        </p>

        {error && (
          <p className="text-rose-500 font-bold mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-slate-100 text-slate-800 border-2 border-slate-200 focus:border-sky-400 focus:bg-white outline-none transition-colors font-bold placeholder:text-slate-400 text-lg"
              placeholder="Địa chỉ Email"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-slate-100 text-slate-800 border-2 border-slate-200 focus:border-sky-400 focus:bg-white outline-none transition-colors font-bold placeholder:text-slate-400 text-lg pr-12"
              placeholder="Mật khẩu"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-sky-500 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-6 h-6" />
              ) : (
                <Eye className="w-6 h-6" />
              )}
            </button>
          </div>

          {isSignUp && (
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl bg-slate-100 text-slate-800 border-2 border-slate-200 focus:border-sky-400 focus:bg-white outline-none transition-colors font-bold placeholder:text-slate-400 text-lg pr-12"
                placeholder="Xác nhận mật khẩu"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-sky-500 transition-colors cursor-pointer"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-6 h-6" />
                ) : (
                  <Eye className="w-6 h-6" />
                )}
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 py-4 bg-emerald-500 text-white rounded-2xl font-black text-xl border-b-4 border-emerald-600 active:border-b-0 active:translate-y-1 transition-all uppercase tracking-widest disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Đang xử lý..." : isSignUp ? "Đăng ký" : "Đăng nhập"}
          </button>
        </form>

        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="mt-6 text-sky-500 font-bold hover:text-sky-600 transition-colors cursor-pointer"
        >
          {isSignUp
            ? "Đã có tài khoản? Đăng nhập"
            : "Chưa có tài khoản? Đăng ký"}
        </button>
      </div>
    </div>
  );
}
