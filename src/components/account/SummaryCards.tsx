import { useAppSelector } from "@/store/hooks";
import type { Account } from "@/types/account";
import { ArrowUpRight } from "lucide-react";

const SummaryCards = () => {

  const {allAccounts, isLoadingAccount} = useAppSelector((state)=> state.account);

  //const activeAccounts = 3;
  const totalBalance = allAccounts.reduce((total, account : Account)=> total + account?.balance, 0);
  //      const accountTypes = [
  //     { type: "All Accounts", count: accounts.length, color: "from-gray-500 to-gray-600" },
  //     { type: "Checking", count: accounts.filter(a => a.type === "Checking").length, color: "from-blue-500 to-cyan-500" },
  //     { type: "Savings", count: accounts.filter(a => a.type === "Savings").length, color: "from-emerald-500 to-teal-500" },
  //     { type: "Credit Card", count: accounts.filter(a => a.type === "Credit Card").length, color: "from-purple-500 to-pink-500" },
  //     { type: "Investment", count: accounts.filter(a => a.type === "Investment").length, color: "from-orange-500 to-red-500" },
  //     { type: "Other", count: accounts.filter(a => !["Checking", "Savings", "Credit Card", "Investment"].includes(a.type)).length, color: "from-indigo-500 to-blue-500" }
  //   ];

  const accountTypes = [
    { type: "All Accounts", count: allAccounts.length, color: "from-gray-500 to-gray-600" },
    { type: "Savings", count: allAccounts.filter(a => a.accountType === "SAVINGS").length, color: "from-blue-500 to-cyan-500" },
    { type: "Current", count: allAccounts.filter(a => a.accountType === "CURRENT").length, color: "from-blue-500 to-cyan-500" },
    { type: "Business", count: allAccounts.filter(a => a.accountType === "BUSINESS").length, color: "from-blue-500 to-cyan-500" },
    { type: "Credit", count: allAccounts.filter(a => a.accountType === "CREDIT").length, color: "from-blue-500 to-cyan-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-linear-to-r from-emerald-500 to-green-500 rounded-2xl p-6 shadow-xl">
        <p className="text-emerald-100 mb-2">Total Balance</p>
        <p className="sm:text-4xl text-2xl font-bold mb-2">
          ₹
          {totalBalance.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
        <div className="flex items-center space-x-1 text-emerald-100 text-sm">
          <ArrowUpRight className="w-4 h-4" />
          <span>+5.2% from last month</span>
        </div>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
        <p className="text-gray-400 mb-2">Active Accounts</p>
        <p className="sm:text-4xl text-2xl font-bold mb-2">{allAccounts.length}</p>
        <p className="text-gray-400 text-sm">
          Across {accountTypes.filter((t) => t.count > 0).length - 1} types
        </p>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
        <p className="text-gray-400 mb-2">This Month</p>
        <p className="sm:text-4xl text-2xl font-bold mb-2">324</p>
        <p className="text-gray-400 text-sm">Total transactions</p>
      </div>
    </div>
  );
};

export default SummaryCards;
