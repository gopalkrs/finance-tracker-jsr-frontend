import {
  ArrowDownRight,
  ArrowUpRight,
  Banknote,
  Building2,
  CreditCard,
  Edit,
  IndianRupee,
  MoreVertical,
  Plus,
  Trash2,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { Account } from "@/types/account";
import { deleteAccountById } from "@/redux/slices/accountSlice";

const AccountList = () => {
  const [showAccountDetails, setShowAccountDetails] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState<Account>();

  const dispatch = useAppDispatch();

  const handleAccountAction = (action: string, account: Account) => {
    console.log(`${action} account:`, account);
    dispatch(deleteAccountById(account.id));
    setShowAccountDetails(null);
  };

  const { allAccounts, isLoadingAccount } = useAppSelector(
    (state) => state.account
  );

  const ACCOUNT_UI = {
    BUSINESS: {
      icon: Building2,
      bg: "bg-blue-500/15",
      text: "text-blue-400",
    },
    SAVINGS: {
      icon: Wallet,
      bg: "bg-emerald-500/15",
      text: "text-emerald-400",
    },
    CREDIT: {
      icon: CreditCard,
      bg: "bg-purple-500/15",
      text: "text-purple-400",
    },
    CURRENT: {
      icon: IndianRupee,
      bg: "bg-yellow-500/15",
      text: "text-yellow-400",
    },
  };
  // const accounts = [
  //   {
  //     id: 1,
  //     name: "Chase Checking",
  //     type: "Checking",
  //     accountNumber: "****1234",
  //     balance: 12450.5,
  //     bank: "Chase Bank",
  //     icon: <Wallet className="w-5 h-5" />,
  //     color: "from-blue-500 to-cyan-500",
  //     change: "+$450.00",
  //     changePercent: "+3.7%",
  //     trend: "up",
  //     lastUpdated: "2 hours ago",
  //     transactions: 45,
  //     status: "active",
  //   },
  // ];
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">All Accounts</h2>
        <Link
          to={"/account/add-new"}
          className="flex items-center space-x-2 px-2 sm:px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span className="sm:text-lg text-sm">Add New</span>
        </Link>
      </div>

      <div className="space-y-4">
        {allAccounts.map((account) => (
          <div
            key={account.id}
            className="bg-gray-700/30 rounded-xl p-3 sm:p-6 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedAccount(account)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center sm:space-x-4 space-x-2 flex-1">
                <div
                  className={`sm:w-14 sm:h-14 w-10 h-10 bg-linear-to-r ${
                    ACCOUNT_UI[account.accountType]?.bg
                  } rounded-xl flex items-center justify-center`}
                >
                  {(() => {
                    const Icon = ACCOUNT_UI[account.accountType]?.icon;
                    return Icon ? (
                      <Icon className="w-6 h-6 text-white" />
                    ) : null;
                  })()}
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="sm:text-lg text-sm font-bold">
                      {account.accountName}
                    </h3>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium">
                      {account.status || "active"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-400">
                    <span>{account.bankName}</span>
                    <span>•</span>
                    <span>{account.accountNumber}</span>
                    <span>•</span>
                    <span>{account.accountType.toLowerCase()}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-right hidden md:block">
                  <p className="text-sm text-gray-400 mb-1">Balance</p>
                  <p className="text-2xl font-bold">
                    ₹
                    {Math.abs(account.balance).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                  {/* {account.creditLimit && (
                          <p className="text-xs text-gray-500">
                            Limit: ${account.creditLimit.toLocaleString()}
                          </p>
                        )} */}
                </div>

                <div className="text-right hidden lg:block">
                  <div
                    className={`flex items-center space-x-1 mb-1 ${
                      account.trend === "up"
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {account.trend === "up" ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    <span className="font-semibold">
                      {account.changePercent}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{account.change}</p>
                </div>

                <div className="text-right hidden xl:block">
                  <p className="text-sm text-gray-400 mb-1">Transactions</p>
                  <p className="font-bold">{account.transactions}</p>
                  <p className="text-xs text-gray-500">{account.lastUpdated}</p>
                </div>

                <div className="">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowAccountDetails(
                          showAccountDetails === account.id ? null : account.id
                        );
                      }}
                      className="p-2 hover:bg-gray-600 rounded-lg transition-colors"
                    >
                      <MoreVertical className="w-5 h-5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-gray-800 border border-gray-700">
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="flex items-center space-x-3 w-full px-4 py-3 text-green-500 hover:bg-gray-700 transition-colors text-left"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAccountAction("edit", account);
                        }}
                      >
                        <Edit className="w-4 h-4" />
                        <span>Edit Account</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAccountAction("delete", account);
                        }}
                        className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-red-500/10 text-red-400 transition-colors text-left"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Delete Account</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountList;
