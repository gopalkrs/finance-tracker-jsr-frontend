import { Home, ShoppingBag, TrendingUp } from 'lucide-react';

const RecentTransactions = () => {

    const recentTransactions = [
    {
      id: 1,
      name: "Grocery Store",
      category: "Food & Dining",
      amount: -85.40,
      date: "Today, 2:30 PM",
      icon: <ShoppingBag className="w-5 h-5" />,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      name: "Salary Deposit",
      category: "Income",
      amount: 5000.00,
      date: "Yesterday, 9:00 AM",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 3,
      name: "Electric Bill",
      category: "Utilities",
      amount: -120.00,
      date: "Dec 2, 2025",
      icon: <Home className="w-5 h-5" />,
      color: "from-yellow-500 to-orange-500"
    },
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Recent Transactions</h3>
              <button className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {recentTransactions.map(transaction => (
                <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-linear-to-r ${transaction.color} rounded-xl flex items-center justify-center`}>
                      {transaction.icon}
                    </div>
                    <div>
                      <p className="font-medium">{transaction.name}</p>
                      <p className="text-sm text-gray-400">{transaction.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${transaction.amount > 0 ? 'text-emerald-400' : 'text-white'}`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-400">{transaction.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

  )
}

export default RecentTransactions;