import { ArrowRight, PieChart } from "lucide-react";

const HeroSection = ({openAuth}) => {
  const stats = [
    { value: "₹8,700", label: "Avg Monthly Overspend Saved" },
    { value: "63%", label: "Users Sticking to Budget" },
    { value: "14", label: "Custom Budgets Created" },
    { value: "31%", label: "Spending Reduction in 3 Months" },
  ];


  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Take Control of Your
            <span className="block bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Financial Future
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Track expenses, manage budgets, and achieve your financial goals
            with AI-powered insights. All your finances in one beautiful, secure
            platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => openAuth("signup")}
              className="bg-linear-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-medium shadow-xl flex items-center space-x-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-700 text-gray-300 px-8 py-4 rounded-lg hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300 font-medium">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="bg-linear-to-r from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl">
          <div className="aspect-video bg-linear-to-r from-emerald-900/20 to-teal-900/20 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <PieChart className="w-24 h-24 text-emerald-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">Dashboard Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
