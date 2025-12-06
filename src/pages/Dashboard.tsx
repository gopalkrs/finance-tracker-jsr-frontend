import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  PieChart,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import LoggedHeader from "../components/loggedin/LoggedHeader";
import SideBar from "../components/loggedin/SideBar";
import TotalBalanceCard from "../components/loggedin/dashboard/TotalBalanceCard";
import BudgetGoals from "../components/loggedin/dashboard/BudgetGoals";
import RecentTransactions from "../components/loggedin/dashboard/RecentTransactions";
import SpendingByCategory from "../components/loggedin/dashboard/SpendingByCategory";
import { useAppSelector } from "../store/hooks";
import AddAccountModal from "../components/loggedin/dashboard/AddAccountModal";

const Dashboard = () => {

  const { showAddAccountModal } = useAppSelector((state) => state.addAccountModal)
  const stats = [
    {
      label: "Total Income",
      value: "$8,450",
      change: "+12.5%",
      trend: "up",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      label: "Total Expenses",
      value: "$3,240",
      change: "-8.2%",
      trend: "down",
      icon: <TrendingDown className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    },
    {
      label: "Savings Rate",
      value: "61.6%",
      change: "+5.3%",
      trend: "up",
      icon: <PieChart className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Investments",
      value: "$15,840",
      change: "+18.7%",
      trend: "up",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <SideBar />

      <div className="lg:ml-64 min-h-screen">
        <LoggedHeader />
        <main className="p-4 space-y-4 sm:p-6 lg:p-8">
          <TotalBalanceCard />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-linear-to-r ${stat.color} rounded-xl flex items-center justify-center`}
                  >
                    {stat.icon}
                  </div>
                  <div
                    className={`flex items-center space-x-1 text-sm ${
                      stat.trend === "up" ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
          <SpendingByCategory />
          <BudgetGoals />
          <RecentTransactions />

          {showAddAccountModal && <AddAccountModal />}

        </main>
      </div>
    </div>
  );
};

export default Dashboard;
