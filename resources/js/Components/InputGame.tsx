interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const InputGame: React.FC<InputProps> = ({label, error, className = "", ...props}) => {
    return (
        <div
            >
            {label && (
            <label
                className="text-sm font-bold text-white"
            >
                {label}
            </label>  
            )}
            <input
                {...props}
                className= {`w-full p-2 rounded bg-black border-gray-800/100 text-white ${className}`}
            />
        </div>


    );
};

export default InputGame;