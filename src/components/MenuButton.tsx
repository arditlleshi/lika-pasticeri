import { motion } from "framer-motion";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center hover:bg-rose-100 transition-colors"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center">
        <motion.span
          animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-0.5 bg-rose-600 block absolute"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-0.5 bg-rose-600 block"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-0.5 bg-rose-600 block absolute"
        />
      </div>
    </button>
  );
}