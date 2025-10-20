const SelectMood: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & { className?: string, label?: string }> 
= ({ className = "", label="Mood" , ...props }) => {
    return(
        <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {label}
            </label>
            <select
                {...props}
                className={`w-full p-2 rounded bg-black border-gray-800/100 ${className} text-white`}
            >
                    <option value="">How did you feel?</option>
                    <option value="😄">😄 Happy</option>
                    <option value="😐">😐 Neutral</option>
                    <option value="😞">😞 Frustrated</option>
            </select>
        </div>

    );
};

export default SelectMood;