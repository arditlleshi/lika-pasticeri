// src/components/SubcategoryButton.tsx

import React from "react";

interface SubcategoryButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string; // Optional className prop
}

const SubcategoryButton = React.forwardRef<HTMLButtonElement, SubcategoryButtonProps>(
  ({ label, isSelected, onClick, className = "" }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className={`${className} whitespace-nowrap rounded-full px-3 py-1 text-sm transition-all duration-300 ${
        isSelected
          ? "bg-rose-200 text-rose-800 shadow-md"
          : "bg-rose-50 text-rose-600 hover:bg-rose-100"
      }`}
      aria-pressed={isSelected}
    >
      {label}
    </button>
  )
);

SubcategoryButton.displayName = "SubcategoryButton";

export default SubcategoryButton;
