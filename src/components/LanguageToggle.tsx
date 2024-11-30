import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

// Custom hook to detect screen size
function useIsLargeScreen() {
  const [isLargeScreen, setIsLargeScreen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024; // Tailwind's lg breakpoint
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    // Initialize the state
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLargeScreen;
}

const languages = [
  { code: "sq", label: "AL" },
  { code: "en", label: "EN" },
];

const dropdownVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 22,
      mass: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: {
      duration: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  }),
};

export default function LanguageToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const isLargeScreen = useIsLargeScreen();

  const toggleDropdown = () => {
    if (isLargeScreen) {
      setIsOpen((prev) => !prev);
    } else {
      // Cycle through the languages
      const currentIndex = languages.findIndex(
        (lang) => lang.code === selectedLang.code
      );
      const nextIndex = (currentIndex + 1) % languages.length;
      setSelectedLang(languages[nextIndex]);
    }
  };

  const handleLanguageSelect = (language: { code: string; label: string }) => {
    setSelectedLang(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleDropdown}
        className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-gray-200/80 bg-gradient-to-r from-white/80 to-white px-4 py-2 shadow-sm transition-all duration-300 hover:shadow-md"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-rose-50 to-rose-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          transition={{
            duration: 0.3,
          }}
        />

        <motion.div
          animate={{
            rotate: isOpen ? 360 : 0,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="relative"
        >
          <Globe className="h-4 w-4 text-rose-500" />
        </motion.div>

        <span className="relative w-5 text-sm font-medium text-gray-700 transition-colors group-hover:text-rose-600">
          {selectedLang.label}
        </span>

        {isLargeScreen && (
          <motion.span
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="relative ml-1 text-xs text-black"
          >
            ▼
          </motion.span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && isLargeScreen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-0 mt-2 w-36 rounded-xl border border-gray-100 bg-white/90 py-2 shadow-lg backdrop-blur-md"
          >
            {languages.map((lang, i) => (
              <motion.button
                key={lang.code}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  backgroundColor: "rgba(244, 63, 94, 0.08)",
                  x: 4,
                }}
                onClick={() => handleLanguageSelect(lang)}
                className={`relative w-full px-4 py-2.5 text-sm ${
                  selectedLang.code === lang.code
                    ? "font-medium text-rose-600"
                    : "text-gray-700 hover:text-rose-600"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{lang.label}</span>
                  {selectedLang.code === lang.code && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      className="absolute right-4 flex items-center justify-center text-rose-500"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
