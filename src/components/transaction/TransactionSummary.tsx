import { ArrowDownRight, ArrowUpRight, TrendingUp } from "lucide-react";

const TransactionSummary = () => {
  
  const totalIncome = 7500;
  const totalExpenses = 4200;

  return (
    <div className="p-8">
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-emerald-600 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <p className="text-emerald-100">Total Income</p>
            <ArrowUpRight className="w-5 h-5 text-emerald-100" />
          </div>
          <p className="text-3xl font-bold">
            ₹{totalIncome.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
          <p className="text-sm text-emerald-100 mt-2">This month</p>
        </div>

        <div className="bg-red-600 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <p className="text-red-100">Total Expenses</p>
            <ArrowDownRight className="w-5 h-5 text-red-100" />
          </div>
          <p className="text-3xl font-bold">
            ₹
            {totalExpenses.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </p>
          <p className="text-sm text-red-100 mt-2">This month</p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-400">Net Balance</p>
            <TrendingUp className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="text-3xl font-bold text-emerald-400">
            ₹
            {(totalIncome - totalExpenses).toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </p>
          <p className="text-sm text-gray-400 mt-2">This month</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionSummary;
