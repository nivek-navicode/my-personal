import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isDark, setIsDark] = useState(false);

  const { scrollYProgress } = useScroll();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      ["home", "about", "projects", "contact"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80  backdrop-blur-md shadow-sm z-50">
      
      {/* scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 origin-left"
      />

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <motion.div className="animate-pulse text-2xl font-bold text-blue-600">
          NIVETHITHA.K
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8 font-medium">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`transition-all duration-300 
              ${
                active === id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right side (Dark + Mobile menu) */}
        <div className="flex items-center gap-4">
          
          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="text-xl text-gray-600 dark:text-yellow-400 hover:scale-110 transition"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile menu button */}
          <div
            className="md:hidden text-2xl text-blue-600 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-black w-full border-b shadow-lg p-6 flex flex-col space-y-4 font-medium"
          >
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-left transition 
                ${
                  active === id
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Header;