import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Trophy, User, LogIn } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", icon: null },
    { to: "/tournaments", label: "Tournaments", icon: <Trophy size={18} /> },
    { to: "/leaderboards", label: "Leaderboards", icon: null },
    { to: "/how-it-works", label: "How it Works", icon: null },
    { to: "/about", label: "About", icon: null },
  ];

  const authLinks = [
    { to: "/login", label: "Login", icon: <LogIn size={18} /> },
    { to: "/signup", label: "Sign Up", icon: <User size={18} /> },
  ];

  const activeClass = "text-blue-600 font-semibold border-b-2 border-blue-600";
  const inactiveClass = "text-gray-700 hover:text-blue-600 transition-colors";

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-linear-to-r from-blue-600 to-purple-600 w-8 h-8 rounded-lg flex items-center justify-center">
                <Trophy size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                APEX ARENAS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium ${isActive ? activeClass : inactiveClass}`
                }
              >
                {link.icon && <span>{link.icon}</span>}
                <span>{link.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {authLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : link.label === "Sign Up"
                      ? "bg-linear-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`
                }
              >
                {link.icon && <span>{link.icon}</span>}
                <span>{link.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg ${isActive ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-700 hover:bg-gray-50"}`
                  }
                >
                  {link.icon && <span>{link.icon}</span>}
                  <span>{link.label}</span>
                </NavLink>
              ))}
              
              <div className="border-t pt-4 mt-2">
                {authLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : link.label === "Sign Up"
                          ? "bg-linear-to-r from-blue-600 to-purple-600 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`
                    }
                  >
                    {link.icon && <span>{link.icon}</span>}
                    <span>{link.label}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;