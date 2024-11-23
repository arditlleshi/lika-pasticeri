// components/FilterButton.tsx

"use client";

import React from "react";

interface FilterButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isSelected,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`whitespace-nowrap rounded-full px-4 py-1 transition-all duration-300 ${
      isSelected
        ? "bg-rose-600 text-white shadow-lg"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
    aria-pressed={isSelected}
    aria-label={label}
  >
    {label}
  </button>
);

export default FilterButton;
