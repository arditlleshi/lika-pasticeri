import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "./NavLink";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ path: string; label: string }>;
}

export default function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-0 top-20 text-black bg-white/95 backdrop-blur-3xl z-50 border-b border-gray-200 shadow-xl"
        >
          <div className="p-4 max-h-[80vh] overflow-y-auto">
            <nav className="grid gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className="flex items-center px-4 py-3 rounded-xl hover:bg-rose-100 transition-colors"
                  activeClassName="bg-gradient-to-r from-rose-500 to-rose-600 text-white hover:bg-none"
                >
                  <span className="text-base font-medium">{link.label}</span>
                  <motion.div
                    className="ml-auto"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </NavLink>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}