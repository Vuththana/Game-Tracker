import React from "react";

interface SelectDateProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const SelectDate: React.FC<SelectDateProps> = ({ label = "Played On", value, onChange }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>

      <input
        type="date"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="px-3 py-2 border rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-green-500
                   border-gray-300 dark:bg-black/20 dark:border-gray-700 dark:text-white"
      />
    </div>
  );
};

export default SelectDate;
