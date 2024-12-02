// src/components/FilterButton.tsx

import React from "react";

interface FilterButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string; // Optional className prop
}

const FilterButton = React.forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ label, isSelected, onClick, className = "" }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className={`${className} group flex items-center gap-2 px-4 py-1 rounded-full whitespace-nowrap transition-all duration-300 ${
        isSelected
          ? "bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-lg shadow-rose-500/20"
          : "bg-white/80 text-gray-700 hover:bg-gray-100 hover:shadow-md"
      }`}
      aria-pressed={isSelected}
    >
      {label}
    </button>
  )
);

FilterButton.displayName = "FilterButton";

export default FilterButton;
