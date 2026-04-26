import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Home, User as UserIcon, Layers, Search, LogOut } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useLearningStore } from "../store/useLearningStore";
import { useEffect } from "react";

export function Layout() {
  const { user, isInitializing, logout } = useAuthStore();
  const loadProgress = useLearningStore((state) => state.loadProgress);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isInitializing && !user) {
      navigate("/login");
    } else if (user) {
      if (
        !user.user_metadata?.full_name &&
        location.pathname !== "/onboarding"
      ) {
        navigate("/onboarding");
      } else if (
        user.user_metadata?.full_name &&
        location.pathname === "/onboarding"
      ) {
        navigate("/");
      } else {
        loadProgress();
      }
    }
  }, [user, isInitializing, navigate, loadProgress, location.pathname]);

  if (isInitializing || !user) return null;

  const isFullScreen =
    location.pathname === "/learning" ||
    location.pathname === "/end" ||
    location.pathname === "/onboarding";

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-[#f4f7f6] text-slate-800 font-sans">
      {/* Top Header matching Hi HSK style */}
      {!isFullScreen && (
        <header className="h-16 shrink-0 flex items-center justify-between px-4 sm:px-8 bg-white border-b border-slate-200 z-10 shadow-sm">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Layers className="text-[#008f68] w-8 h-8" />
            <h1 className="text-2xl font-bold text-[#008f68] tracking-tight">
              FlashCard
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#f4f7f6] rounded-full pl-4 pr-2 py-1.5 border border-slate-200">
              <UserIcon className="w-5 h-5 text-[#008f68]" />
              <span className="font-semibold text-slate-600 text-sm hidden sm:inline-block max-w-[120px] truncate mr-2">
                {user.user_metadata?.full_name || user.email?.split("@")[0]}
              </span>
              <button
                onClick={() => logout()}
                className="p-1.5 hover:bg-rose-100 text-rose-500 rounded-full transition-colors cursor-pointer"
                title="Đăng xuất"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>
      )}

      <main className="flex-1 w-full flex flex-col min-h-0 overflow-hidden">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      {!isFullScreen && (
        <nav className="md:hidden h-16 shrink-0 border-t border-slate-200 bg-white flex justify-around items-center px-4 z-20 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <button
            onClick={() => navigate("/")}
            className="flex flex-col items-center p-2 text-[#008f68]"
          >
            <Home className="w-6 h-6" />
            <span className="text-[10px] font-bold mt-1">Trang chủ</span>
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="flex flex-col items-center p-2 text-slate-400 hover:text-[#008f68] transition-colors"
          >
            <UserIcon className="w-6 h-6" />
            <span className="text-[10px] font-bold mt-1">Cá nhân</span>
          </button>
        </nav>
      )}
    </div>
  );
}
