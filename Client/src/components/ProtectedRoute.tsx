import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../lib/auth-context";

const ProtectedRoute = () => {
  const location = useLocation();
  const { isAuthenticated, isInitializing } = useAuth();

  if (isInitializing) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-slate-300">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full border-2 border-slate-400 border-t-transparent animate-spin" />
          <span>Checking session...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    const nextPath = encodeURIComponent(
      `${location.pathname}${location.search}${location.hash}`,
    );
    return <Navigate to={`/login?next=${nextPath}`} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
