import React from "react";

interface DashboardCardProps {
   title: string,
   icon: any,
   data: any, 
}

const DashboardCard:React.FC<DashboardCardProps> = ({title, icon, data}) => {
    return (
        <div
            className="p-6 border border-green-800 rounded-lg"
        >
            {/* Title */}
            <p
            className="text-sm text-gray-400">
                {title}
            </p>
            
            <div className="flex items-center gap-2 text-[25px] mt-2">
                <p
                    className="text-purple-700"
                >
                    {icon}
                </p>

                <p
                    className="text-white font-bold"
                >
                    {data}
                </p>
            </div>
        </div>
    );
};

export default DashboardCard;