import React from "react";

interface TextAreaGameProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextAreaGame: React.FC<TextAreaGameProps> = ({ label, error, className = "", ...props }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <textarea
        {...props}
        className={`px-3 py-2 border rounded-lg resize-none
          focus:outline-none focus:ring-2 focus:ring-green-500
          dark:bg-black/20 dark:border-gray-700 dark:text-white
          ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300"}
          ${className}`}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextAreaGame;
