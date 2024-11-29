import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  index: number;
}

export default function StatCard({ icon: Icon, value, label, index }: StatCardProps) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8,
      rotate: -5
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: index * 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1,
        delay: index * 0.2 + 0.3
      }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2 + 0.6
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-rose-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
      <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-rose-600 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        
        <motion.div
          variants={iconVariants}
          className="relative w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-rose-100 to-rose-50 rounded-2xl p-3"
        >
          <Icon className="w-full h-full text-rose-600" />
          <div className="absolute inset-0 bg-rose-500/10 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300" />
        </motion.div>

        <motion.div
          variants={numberVariants}
          className="text-4xl font-bold text-gray-900 text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-500"
        >
          {value}
        </motion.div>

        <div className="text-gray-600 text-center font-medium">
          {label}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-rose-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </motion.div>
  );
}