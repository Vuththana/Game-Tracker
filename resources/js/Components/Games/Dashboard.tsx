import { PageProps } from "@/types";
import DashboardCard from "../UI/DashboardCard";
import { FaChartSimple } from "react-icons/fa6";
import { FaClock, FaGamepad, FaTrophy } from "react-icons/fa";

const Dashboard: React.FC<PageProps<{
    totalGames: number,
    totalHours: number,
    mostGamePlayed: {
        name: string | null;
        total: number | null;
    } | null;
    mostHoursPlayed: {
        total_hours: number|null;
    }
}>> = ({totalGames, totalHours, mostGamePlayed, mostHoursPlayed}) => {
    return (
        <div
            className="mt-4"
        >
            {/* Title Section */}
            <p
                className="text-white flex items-center gap-2 text-[30px] font-bold"
            >
                <FaChartSimple 
                    className="text-green-600"
                /> 
                Dashboard
            </p>

            <div
                className="grid md:grid-cols-2 gap-4 mt-2"
            >
                {/* Total Hours Played */}
                <DashboardCard 
                    title="Total Hours Played"
                    icon={<FaClock />}
                    data={totalHours + "h"}
                />

                {/* Total Sessions */}
                <DashboardCard 
                    title="Total Session"
                    icon={<FaGamepad />}
                    data={totalGames}
                />

                {/* Most Game Played */}
                <DashboardCard 
                    title="Most Game Played"
                    icon={<FaTrophy />}
                    data={`${mostGamePlayed?.name}`}
                />

                {/* Most Hours Played */}
                <DashboardCard 
                    title="Most Game Played"
                    icon={<FaClock />}
                    data={`${mostHoursPlayed?.total_hours}`}
                />
            </div>



        </div>
    );
};

export default Dashboard;