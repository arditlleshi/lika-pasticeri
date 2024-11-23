// components/SubcategoryButton.tsx

"use client";

import React from "react";

interface SubcategoryButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const SubcategoryButton: React.FC<SubcategoryButtonProps> = ({
  label,
  isSelected,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`whitespace-nowrap rounded-full px-3 py-1 text-sm transition-all duration-300 ${
      isSelected
        ? "bg-rose-200 text-rose-800 shadow-md"
        : "bg-rose-50 text-rose-600 hover:bg-rose-100"
    }`}
    aria-pressed={isSelected}
    aria-label={label}
  >
    {label}
  </button>
);

export default SubcategoryButton;
