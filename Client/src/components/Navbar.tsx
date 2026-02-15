import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Menu,
  X,
  LogIn,
  User,
  Sparkles,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useAuth } from "../lib/auth-context";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();
  const reduceMotion = useReducedMotion();

  const profilePath =
    user?.role === "organizer"
      ? "/auth/organizer/profile"
      : "/auth/player/profile";

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      setIsMenuOpen(false);
      navigate("/login");
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/70 text-white backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-linear-to-r from-transparent via-cyan-400/25 to-transparent" />
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-linear-to-br from-cyan-300 via-sky-400 to-indigo-400 text-slate-950">
              <Sparkles size={18} />
            </span>
            <span className="font-display font-bold tracking-wide text-lg text-white">
              APEX ARENAS
            </span>
          </Link>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -1 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  <NavLink
                    to="/auth"
                    className={({ isActive }) =>
                      `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    <LayoutDashboard size={18} />
                    <span>Dashboard</span>
                  </NavLink>
                </motion.div>

                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -1 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  <NavLink
                    to={profilePath}
                    className={({ isActive }) =>
                      `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    <User size={18} />
                    <span>{user?.username ?? "Profile"}</span>
                  </NavLink>
                </motion.div>

                <motion.button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-slate-300 hover:text-white hover:bg-white/5 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={
                    reduceMotion || isLoggingOut ? undefined : { y: -1 }
                  }
                  whileTap={
                    reduceMotion || isLoggingOut ? undefined : { scale: 0.98 }
                  }
                >
                  <LogOut size={18} />
                  <span>{isLoggingOut ? "Logging out..." : "Logout"}</span>
                </motion.button>
              </>
            ) : (
              <>
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -1 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    <LogIn size={18} />
                    <span>Login</span>
                  </NavLink>
                </motion.div>

                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -1 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? "bg-linear-to-r from-cyan-300 via-sky-400 to-indigo-400 text-slate-950"
                          : "bg-linear-to-r from-cyan-300 via-sky-400 to-indigo-400 text-slate-950 hover:shadow-md hover:shadow-cyan-500/30"
                      }`
                    }
                  >
                    <User size={18} />
                    <span>Sign Up</span>
                  </NavLink>
                </motion.div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              className="md:hidden border-t border-slate-800/70 overflow-hidden"
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={
                reduceMotion ? undefined : { height: "auto", opacity: 1 }
              }
              exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="py-4">
                <div className="flex flex-col space-y-3">
                  {isAuthenticated ? (
                    <>
                      <NavLink
                        to="/auth"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center space-x-3 px-4 py-3 rounded-lg border border-transparent ${
                            isActive
                              ? "bg-white/10 text-white font-medium border-slate-700"
                              : "text-slate-300 hover:bg-white/5 hover:border-slate-800"
                          }`
                        }
                      >
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                      </NavLink>

                      <NavLink
                        to={profilePath}
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center space-x-3 px-4 py-3 rounded-lg border border-transparent ${
                            isActive
                              ? "bg-white/10 text-white font-medium border-slate-700"
                              : "text-slate-300 hover:bg-white/5 hover:border-slate-800"
                          }`
                        }
                      >
                        <User size={20} />
                        <span>{user?.username ?? "Profile"}</span>
                      </NavLink>

                      <button
                        type="button"
                        onClick={handleLogout}
                        disabled={isLoggingOut}
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg border border-transparent text-slate-300 hover:bg-white/5 hover:border-slate-800 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <LogOut size={20} />
                        <span>
                          {isLoggingOut ? "Logging out..." : "Logout"}
                        </span>
                      </button>
                    </>
                  ) : (
                    <>
                      <NavLink
                        to="/login"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center space-x-3 px-4 py-3 rounded-lg border border-transparent ${
                            isActive
                              ? "bg-white/10 text-white font-medium border-slate-700"
                              : "text-slate-300 hover:bg-white/5 hover:border-slate-800"
                          }`
                        }
                      >
                        <LogIn size={20} />
                        <span>Login</span>
                      </NavLink>

                      <NavLink
                        to="/signup"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center space-x-3 px-4 py-3 rounded-lg font-medium ${
                            isActive
                              ? "bg-linear-to-r from-cyan-300 via-sky-400 to-indigo-400 text-slate-950"
                              : "bg-linear-to-r from-cyan-300 via-sky-400 to-indigo-400 text-slate-950"
                          }`
                        }
                      >
                        <User size={20} />
                        <span>Sign Up</span>
                      </NavLink>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
