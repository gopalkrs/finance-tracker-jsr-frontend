import { useAppSelector } from "@/store/hooks";
import { format } from "date-fns";
import { HelpCircle, Home, ShoppingBag, TrendingUp } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const RecentTransactions = () => {
  const { transactionsList } = useAppSelector((state) => state.transaction);

  const categoryConfig = {
    "Food & Dining": {
      icon: <ShoppingBag className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
    },
    Income: {
      icon: <TrendingUp className="w-5 h-5" />,
      color: "from-emerald-500 to-teal-500",
    },
    Utilities: {
      icon: <Home className="w-5 h-5" />,
      color: "from-yellow-500 to-orange-500",
    },
    default: {
      icon: <HelpCircle className="w-5 h-5" />,
      color: "from-gray-500 to-slate-500",
    },
  };

  const recentTransactions = useMemo(() => {
    if (!transactionsList?.length) return [];

    return (
      transactionsList
        .slice()
        .sort(
          (a, b) =>
            new Date(b.transactionDate).getTime() -
            new Date(a.transactionDate).getTime(),
        )
        // limit count
        .slice(0, 5)
        .map((tx) => {
          const config =
            categoryConfig[tx.categoryName] || categoryConfig.default;

          return {
            name: tx.transactionName,
            category: tx.categoryName || "Others",
            amount: tx.amount,
            date: format(tx.transactionDate, "MMM dd yyyy"),
            icon: config.icon,
            color: config.color,
          };
        })
    );
  }, [transactionsList]);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Recent Transactions</h3>
        <Link to={'/transactions'} className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium">
          View All
        </Link>
      </div>

      <div className="space-y-4">
        { recentTransactions.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No transactions yet</p>
        ) : (
        
        recentTransactions.map((transaction, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div
                className={`w-12 h-12 bg-linear-to-r ${transaction.color} rounded-xl flex items-center justify-center`}
              >
                {transaction.icon}
              </div>
              <div>
                <p className="font-medium">{transaction.name}</p>
                <p className="text-sm text-gray-400">{transaction.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`font-bold ${transaction.amount > 0 ? "text-emerald-400" : "text-white"}`}
              >
                {transaction.amount > 0 ? "+" : ""}$
                {Math.abs(transaction.amount).toFixed(2)}
              </p>
              <p className="text-sm text-gray-400">{transaction.date}</p>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
};

export default RecentTransactions;
