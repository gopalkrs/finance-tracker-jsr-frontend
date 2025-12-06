import { Filter } from 'lucide-react';

const SpendingByCategory = () => {

  const spendingByCategory = [
    { category: "Food & Dining", amount: 450, percentage: 30, color: "bg-orange-500" },
    { category: "Transportation", amount: 300, percentage: 20, color: "bg-blue-500" },
    { category: "Shopping", amount: 250, percentage: 16.7, color: "bg-purple-500" },
    { category: "Utilities", amount: 200, percentage: 13.3, color: "bg-yellow-500" },
    { category: "Entertainment", amount: 150, percentage: 10, color: "bg-pink-500" },
    { category: "Others", amount: 150, percentage: 10, color: "bg-gray-500" }
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Spending by Category */}
            <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Spending by Category</h3>
                <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm">Filter</span>
                </button>
              </div>

              <div className="space-y-4">
                {spendingByCategory.map((item, index) => (
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
                ))}
              </div>
            </div>
            </div>
  )
}

export default SpendingByCategory