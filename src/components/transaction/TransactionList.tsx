import { getAllTransaction } from "@/redux/slices/transactionSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  Bus,
  CreditCard,
  IndianRupee,
  MoreVertical,
  Utensils,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { format } from "date-fns";

const TransactionList = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const { transactionsList } = useAppSelector((state) => state.transaction);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTransaction());
  }, []);

  const CATEGORY_UI = {
    income: {
      category: "income",
      icon: IndianRupee,
      color: "from-emerald-500 to-green-500",
    },
    transportation: {
      category: "transportation",
      icon: Bus,
      color: "from-emerald-500 to-teal-500",
    },
    utilities: {
      category: "utilities",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
    },
    food: {
      category: "food",
      icon: Utensils,
      color: "from-orange-500 to-pink-500",
    },
  } as const;

  //type CategoryKey = keyof typeof CATEGORY_UI;

  const filteredTransactions = transactionsList.filter((transaction) => {
    const matchesSearch =
      transaction.transactionName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      transaction.categoryName.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedFilter === "all") return matchesSearch;
    if (selectedFilter === "income")
      return transaction.amount > 0 && matchesSearch;
    if (selectedFilter === "expenses")
      return transaction.amount < 0 && matchesSearch;

    return (
      transaction.categoryName.toLowerCase().includes(selectedFilter) &&
      matchesSearch
    );
  });

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 mx-8 rounded-2xl overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 px-2 md:px-6 py-4 bg-gray-700/30 border-b border-gray-700 font-semibold text-sm text-gray-400">
        <div className="col-span-4">Transaction</div>
        <div className="col-span-2">Category</div>
        <div className="col-span-2">Account</div>
        {/* <div className="col-span-2">Date</div> */}
        <div className="col-span-1 text-right">Amount</div>
        <div className="col-span-1 text-right">Actions</div>
      </div>

      {/* Transactions */}
      <div className="divide-y divide-gray-700">
        {filteredTransactions.map((transaction) => (
          <div
            key={transaction.transactionId}
            className="grid grid-cols-12 gap-2 md:gap-4 px-2 md:px-6 py-4 hover:bg-gray-700/20 transition-colors cursor-pointer"
            onClick={() => setSelectedTransaction(transaction)}
          >
            {/* Transaction Info */}
            <div className="col-span-4 flex items-center space-x-4">
              <div
                className={`w-12 h-12 bg-linear-to-r ${CATEGORY_UI[transaction.categoryName]?.color} rounded-xl flex items-center justify-center shrink-0`}
              >
                {(() => {
                    const Icon = CATEGORY_UI[transaction.categoryName]?.icon;
                    return Icon ? (
                      <Icon className="w-6 h-6 text-white" />
                    ) : null;
                  })()}
              </div>
              <div>
                <p className="font-semibold">{transaction.transactionName}</p>
                <p className="text-sm text-gray-400">
                  {format(
                    new Date(transaction.transactionDate),
                    "MMM dd, yyyy"
                  )}
                </p>
              </div>
            </div>

            {/* Category */}
            <div className="col-span-2 flex items-center">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                {transaction.categoryName}
              </span>
            </div>

            {/* Account */}
            <div className="col-span-2 flex items-center text-gray-400">
              {transaction.accountId}
            </div>

            {/* Date */}
            {/* <div className="col-span-2 flex items-center">
              <div>
                <p className="font-medium">{format(new Date(transaction.transactionDate), "MMM dd, yyyy")}</p>
                <span
                  className={`inline-block px-2 py-0.5 rounded-full text-xs ${
                    transaction.status === "completed"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {transaction.status}
                </span>
              </div>
            </div> */}

            {/* Amount */}
            <div className="col-span-1 flex items-center justify-end">
              <span
                className={`text-lg font-bold ${
                  transaction.amount > 0 ? "text-emerald-400" : "text-white"
                }`}
              >
                {transaction.amount > 0 ? "+" : ""}₹
                {Math.abs(transaction.amount).toFixed(2)}
              </span>
            </div>

            {/* Actions */}
            <div className="col-span-1 flex items-center justify-end">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedTransaction(transaction);
                }}
                className="p-2 hover:bg-gray-600 rounded-lg transition-colors"
              >
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTransactions.length === 0 && (
        <div className="text-center py-16">
          <CreditCard className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-xl font-semibold text-gray-400 mb-2">
            No transactions found
          </p>
          <p className="text-gray-500">
            Try adjusting your filters or search term
          </p>
        </div>
      )}
    </div>
  );
};

export default TransactionList;
