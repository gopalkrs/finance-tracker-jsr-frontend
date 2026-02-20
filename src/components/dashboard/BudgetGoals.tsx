import { DollarSign, Target, Wallet } from 'lucide-react';

const BudgetGoals = () => {

   const budgetGoals = [
    {
      id: 1,
      name: "Monthly Budget",
      current: 1350,
      target: 1500,
      icon: <Target className="w-5 h-5" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 2,
      name: "Emergency Fund",
      current: 12000,
      target: 20000,
      icon: <Wallet className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Vacation Savings",
      current: 2500,
      target: 5000,
      icon: <DollarSign className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-6">Budget Goals</h3>
              <div className="space-y-6">
                {budgetGoals.map(goal => {
                  const progress = (goal.current / goal.target) * 100;
                  return (
                    <div key={goal.id}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className={`w-8 h-8 bg-linear-to-r ${goal.color} rounded-lg flex items-center justify-center`}>
                            {goal.icon}
                          </div>
                          <span className="text-sm font-medium">{goal.name}</span>
                        </div>
                        <span className="text-xs text-gray-400">{progress.toFixed(0)}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <div 
                          className={`bg-linear-to-r ${goal.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>${goal.current.toLocaleString()}</span>
                        <span>${goal.target.toLocaleString()}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
  )
}

export default BudgetGoals