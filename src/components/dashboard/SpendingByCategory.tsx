import { useAppSelector } from "@/store/hooks";
import { useMemo } from "react";

const SpendingByCategory = () => {
  const { transactionsList } = useAppSelector((state) => state.transaction);
  //const dispatch = useAppDispatch();

  const spendingByCategory = useMemo(() => {
    if (!transactionsList?.length) return [];

    // total expense amount
    const totalAmount = transactionsList.reduce(
      (sum, tx) => sum + tx.amount,
      0,
    );

    const categoryColors = {
      Food: "bg-orange-500",
      Transportation: "bg-blue-500",
      Shopping: "bg-purple-500",
      Utilities: "bg-yellow-500",
      Entertainment: "bg-pink-500",
      Others: "bg-gray-500",
    };

    // group by category
    const grouped = transactionsList.reduce(
      (acc: Record<string, number>, tx) => {
        const category = tx.categoryName || "Others";
        acc[category] = (acc[category] || 0) + tx.amount;
        return acc;
      },
      {},
    );

    // map to UI format
    return Object.entries(grouped).map(([category, amount]) => ({
      category,
      amount,
      percentage:
        totalAmount > 0 ? Number(((amount / totalAmount) * 100).toFixed(1)) : 0,
      color: categoryColors[category] || "bg-gray-500",
    }));
  }, [transactionsList]);

  // const spendingByCategory = [
  //   { category: "Food", amount: 450, percentage: 30, color: "bg-orange-500" },
  //   { category: "Transportation", amount: 300, percentage: 20, color: "bg-blue-500" },
  //   { category: "Shopping", amount: 250, percentage: 16.7, color: "bg-purple-500" },
  //   { category: "Utilities", amount: 200, percentage: 13.3, color: "bg-yellow-500" },
  //   { category: "Entertainment", amount: 150, percentage: 10, color: "bg-pink-500" },
  //   { category: "Others", amount: 150, percentage: 10, color: "bg-gray-500" }
  // ];

  return (
    <div className="grid lg:grid-cols-3 gap-8 mb-8">
      {/* Spending by Category */}
      <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Spending by Category</h3>
          {/* <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filter</span>
          </button> */}
        </div>

        <div className="space-y-4">
          {spendingByCategory.length === 0 ? (
            <p className="text-gray-400 text-center">No transactions found.</p>
          ) : (
            spendingByCategory.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                    <span className="text-gray-300">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${item.amount}</p>
                    <p className="text-xs text-gray-400">{item.percentage}%</p>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SpendingByCategory;
