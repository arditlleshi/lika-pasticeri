"use client";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";

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

interface LanguageToggleProps {
  isMobile?: boolean;
  onCloseMobileNav?: () => void;
}

export default function LanguageToggle({
  isMobile = false,
  onCloseMobileNav,
}: LanguageToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const controls = useAnimation();

  useEffect(() => {
    if (isMobile) {
      controls.start({
        rotate: 360,
        transition: { duration: 0.5, ease: "easeInOut" },
      }).then(() => controls.set({ rotate: 0 }));
    }
  }, [selectedLang, isMobile, controls]);

  const toggleDropdown = () => {
    if (isMobile) {
      // For mobile, cycle through languages
      const currentIndex = languages.findIndex(
        (lang) => lang.code === selectedLang.code
      );
      const nextIndex = (currentIndex + 1) % languages.length;
      setSelectedLang(languages[nextIndex]);
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  const handleLanguageSelect = (language: typeof languages[0]) => {
    setSelectedLang(language);
    setIsOpen(false);
    if (onCloseMobileNav) onCloseMobileNav(); // Close MobileNav if provided (only for desktop dropdown)
  };

  return isMobile ? (
    // Mobile Version
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleDropdown}
      className="w-full px-4 py-3 rounded-xl flex items-center justify-between gap-2 transition-all duration-300 group hover:bg-rose-50"
    >
      <span className="text-base font-medium">Language</span>
      <div className="flex items-center space-x-2">
        <motion.div animate={controls} className="flex items-center">
          <Globe className="h-5 w-5 transition-transform group-hover:scale-110" />
        </motion.div>
        <span className="font-medium w-6">{selectedLang.label}</span>
      </div>
    </motion.button>
  ) : (
    // Desktop Version
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleDropdown}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="language-dropdown"
        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-white/80 to-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
      >
        {/* Background Gradient on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-rose-50 to-rose-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          transition={{
            duration: 0.3,
          }}
        />

        {/* Globe Icon with Rotation Animation */}
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
          <Globe className="w-4 h-4 text-rose-500" />
        </motion.div>

        {/* Selected Language Label */}
        <span className="relative text-sm font-medium w-5 text-gray-700 group-hover:text-rose-600 transition-colors">
          {selectedLang.label}
        </span>

        {/* Dropdown Arrow */}
        <motion.span
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="relative ml-1 text-xs text-black"
        >
          ▼
        </motion.span>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            id="language-dropdown"
            role="menu"
            className="absolute right-0 mt-2 w-36 rounded-xl border border-gray-100 bg-white py-2 shadow-lg backdrop-blur-md"
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
                role="menuitem"
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
