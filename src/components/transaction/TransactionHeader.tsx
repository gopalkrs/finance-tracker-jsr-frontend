import { Download, Filter, Menu, Plus, Search } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { openSidebar } from "@/redux/slices/sidebarSlice";
import { useForm } from "react-hook-form";
import type { TransactionFormInput } from "@/types/transaction";
import { createTransaction } from "@/redux/slices/transactionSlice";

const TransactionHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  //const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const dispatch = useAppDispatch();

  const { allAccounts } = useAppSelector((state) => state.account);

  const {
    register,
    handleSubmit,
    //formState: { errors },
  } = useForm<TransactionFormInput>();

  const transactionFormHandler = async (data: TransactionFormInput) => {
    console.log(data);
    await dispatch(createTransaction(data));
    setOpen(false);
  }

  return (
    <header className="bg-gray-800/50 backdrop-blur-md border-b border-gray-700 sticky top-0 z-40">
      <div className="px-8 py-4">
        {/* <div className="pb-2">
            <h1 className="sm:text-2xl text-xl font-bold">Transactions</h1>
            <p className="text-sm text-gray-400">
              * {filteredTransactions.length} transactions found *
            </p>
          </div> */}
        <div className="flex items-center space-x-4 pb-2">
          <button
            onClick={() => dispatch(openSidebar())}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h1 className="sm:text-2xl text-xl font-bold">Transactions</h1>
            <p className="text-sm text-gray-400">
              {/* {filteredTransactions.length} transactions found  */}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center sm:space-x-4 space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search transactions..."
                className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400 w-48 md:w-64"
              />
            </div>
            <button
              onClick={() => setShowFilterModal(true)}
              className="flex items-center space-x-2 p-2 md:px-4 md:py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span className="md:block hidden">Filter</span>
            </button>
            <button className="flex items-center space-x-2 p-2 md:px-4 md:py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <Download className="w-4 h-4" />
              <span className="md:block hidden">Export</span>
            </button>
            {/* <button 
                  onClick={() => setShowAddTransaction(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-emerald-500 to-teal-500 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Transaction</span>
                </button> */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-all duration-300">
                <Plus className="w-4 h-4" />
                <span className="sm:block hidden">Add Transaction</span>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border border-gray-700 rounded-2xl max-w-md text-white">
                <DialogHeader>
                  <DialogTitle className="text-center">
                    Add Transaction
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    Record a new transaction
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(transactionFormHandler)}>
                  <div className="md:space-y-4 space-y-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Transaction Name
                      </label>
                      <input
                        type="text"
                        {...register("transactionName")}
                        placeholder="e.g., Coffee Shop"
                        className="w-full px-2 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></span>
                        <input
                          type="number"
                          {...register("amount")}
                          placeholder="0.00"
                          className="w-full pl-8 pr-2 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Category
                      </label>
                      <select
                        {...register("categoryName")}
                        className="w-full px-2 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                      >
                        <option value={"FOOD"}>Food & Dining</option>
                        <option value={"TRANSPORTATION"}>Transportation</option>
                        <option value={"UTILITIES"}>Utilities</option>
                        <option value={"SHOPPING"}>Shopping</option>
                        <option value={"INCOME"}>Income</option>
                        <option value={"OTHERS"}>Others</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Account
                      </label>
                      <select {...register('accountId')} className="w-full px-2 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white">
                        {allAccounts.map((account) => (
                          <option key={account.id} value={account.id}>
                            {account.accountName}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-row md:space-x-4 space-x-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Transaction Date
                        </label>
                        <input
                          type="date"
                          {...register("transactionDate")}
                          className="w-full px-2 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Transaction Type
                        </label>
                        <select
                          {...register("transactionType")}
                          className="w-full px-2 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                        >
                          <option value={"INCOME"}>Income</option>
                          <option value={"EXPENSE"}>Expense</option>
                        </select>
                      </div>
                    </div>

                    <button className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-medium">
                      Add Transaction
                    </button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TransactionHeader;
