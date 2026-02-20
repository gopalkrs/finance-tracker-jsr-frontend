import {
  ArrowDownRight,
  ArrowUpRight,
  PieChart,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import LoggedHeader from "../components/dashboard/LoggedHeader";
import SideBar from "../components/shared/SideBar";
import TotalBalanceCard from "../components/dashboard/TotalBalanceCard";
import BudgetGoals from "../components/dashboard/BudgetGoals";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import SpendingByCategory from "../components/dashboard/SpendingByCategory";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getAllAccounts } from "@/redux/slices/accountSlice";
import { getUserStats } from "@/redux/slices/dashboardSlice";

const Dashboard = () => {

  const dispatch = useAppDispatch();

  const { userStats, isLoadingStats, error } = useAppSelector((state) => state.userStats); 
  
    useEffect(()=>{
      dispatch(getAllAccounts());
      dispatch(getUserStats());
    },[]);

  const [stats, setStats] = useState([
  {
    key: "income",
    label: "Total Income",
    value: userStats ? `$${userStats.totalIncome.toLocaleString()}` : "--",
    change: "--",
    trend: "up",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    key: "expense",
    label: "Total Expense",
    value: userStats ? `$${userStats.totalExpense.toLocaleString()}` : "--",
    change: "--",
    trend: "down",
    icon: <TrendingDown className="w-6 h-6" />,
    color: "from-rose-500 to-pink-500",
  },
  {
    key: "savings",
    label: "Savings",
    value: userStats ? `$${userStats.totalSavings.toLocaleString()}` : "--",
    change: "--",
    trend: "up",
    icon: <Wallet className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    key: "investment",
    label: "Total Investments",
    value: userStats ? `$${userStats.totalInvestments.toLocaleString()}` : "--",
    change: "--",
    trend: "up",
    icon: <PieChart className="w-6 h-6" />,
    color: "from-purple-500 to-fuchsia-500",
  },
]);


  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <SideBar activePage="dashboard" />

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

        </main>
      </div>
    </div>
  );
};

export default Dashboard;
