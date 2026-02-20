import SideBar from "@/components/shared/SideBar";
import TransactionHeader from "@/components/transaction/TransactionHeader";
import TransactionList from "@/components/transaction/TransactionList";
import TransactionSummary from "@/components/transaction/TransactionSummary";

const Transaction = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <SideBar activePage="transactions" />

      <div className="lg:ml-64 min-h-screen">
        <TransactionHeader />

        <TransactionSummary />
        <TransactionList />
      </div>
    </div>
  );
};

export default Transaction;
