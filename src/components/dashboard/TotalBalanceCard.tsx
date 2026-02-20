import { useAppSelector } from "@/store/hooks";
import type { Account } from "@/types/account";
import {
  Building2,
  Calendar,
  ChevronDown,
  CreditCard,
  Download,
  Eye,
  EyeOff,
  IndianRupee,
  MoreHorizontal,
  Wallet,
} from "lucide-react";
import { useState } from "react";

const TotalBalanceCard = () => {
  const [showBalance, setShowBalance] = useState(true);

    const { allAccounts, isLoadingAccount } = useAppSelector(
    (state) => state.account
  );

  const totalBalance = allAccounts.reduce((total, account : Account)=> total + account?.balance, 0);

  const ACCOUNT_UI = {
    BUSINESS: {
      icon: Building2,
      bg: "bg-blue-500/15",
      text: "text-blue-400",
      type: "Business",
      color: "from-blue-500 to-cyan-500",
    },
    SAVINGS: {
      icon: Wallet,
      bg: "bg-emerald-500/15",
      text: "text-emerald-400",
      type: "Savings",
      color: "from-emerald-500 to-teal-500",
    },
    CREDIT: {
      icon: CreditCard,
      bg: "bg-purple-500/15",
      text: "text-purple-400",
      type: "Credit Card",
      color: "from-purple-500 to-pink-500",
    },
    CURRENT: {
      icon: IndianRupee,
      bg: "bg-yellow-500/15",
      text: "text-yellow-400",
      type: "Current",
      color: "from-blue-500 to-cyan-500",
    },
  };

  return (
    <div className="bg-linear-to-r from-[#134E4A] to-[#134E4F] rounded-3xl p-8 mb-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-emerald-100 mb-2">Total Balance</p>
          <div className="flex items-center space-x-1 sm:space-x-3">
            <h2 className="sm:text-5xl text-3xl font-bold">
              {showBalance
                ? `₹${totalBalance.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`
                : "••••••"}
            </h2>
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {showBalance ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-2 gap-2">
          <button className="px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
          <button className="px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg transition-colors flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">This Month</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {allAccounts.map((account) => (
          <div
            key={account.id}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div
                className={`w-10 h-10 bg-linear-to-r ${ACCOUNT_UI[account.accountType].color} rounded-lg flex items-center justify-center`}
              >
                {(() => {
                    const Icon = ACCOUNT_UI[account.accountType]?.icon;
                    return Icon ? (
                      <Icon className="w-6 h-6 text-white" />
                    ) : null;
                  })()}
              </div>
              <button className="text-white/80 hover:text-white">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-emerald-100 mb-1">{account.accountName}</p>
            <p className="text-xl font-bold">
              ₹{Math.abs(account.balance).toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </p>
            <p className="text-xs text-emerald-100 mt-1">{account.accountType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalBalanceCard;
