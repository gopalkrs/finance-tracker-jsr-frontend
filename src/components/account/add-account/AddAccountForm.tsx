import { useReviewFields } from "@/store/account-hooks";
import type { Account } from "@/types/account";
import {
  AlertCircle,
  Building2,
  Check,
  CreditCard,
  IndianRupee,
  Info,
  Wallet,
} from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import NavigationButtons from "./NavigationButtons";
import { useAppDispatch } from "@/store/hooks";
import { createAccount } from "@/redux/slices/accountSlice";
import { useNavigate } from "react-router-dom";

type AccountFormProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const AddAccountForm = ({ currentStep, setCurrentStep }: AccountFormProps) => {

  const navigate = useNavigate();

  const accountTypes = [
    {
      id: "current",
      name: "Current Account",
      icon: <Wallet className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      description: "For everyday transactions",
    },
    {
      id: "savings",
      name: "Savings Account",
      icon: <IndianRupee className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
      description: "For long-term savings",
    },
    {
      id: "credit",
      name: "Credit Card",
      icon: <CreditCard className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      description: "Track credit card spending",
    },
    {
      id: "business",
      name: "Business Account",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      description: "For business finances",
    },
  ];


  const {
    register,
    handleSubmit,
    //formState: { errors },
    control,
    setValue
  } = useForm<Account>();

  const [balance, bankName, accountName, accountNumber, accountType] = useReviewFields([
    "balance",
    "bankName",
    "accountName",
    "accountNumber",
    "accountType"
  ], control);
  const dispatch = useAppDispatch();

  const formSubmitHandler: SubmitHandler<Account> = async (data) => {
    //console.log('Account created:', { accountType, ...formData });
    console.log('Account created:', data);
    const accountTypeUpper = data.accountType?.toUpperCase();
    data.accountType = accountTypeUpper as Account["accountType"];
    dispatch(createAccount(data));
    navigate("/account");
    // Navigate back to accounts page
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
      <form onSubmit={handleSubmit(formSubmitHandler)}>
      {/* Step 1: Account Type Selection */}
      {currentStep === 1 && (
        <div>
          <h2 className="text-3xl font-bold mb-2">Select Account Type</h2>
          <p className="text-gray-400 mb-8">
            Choose the type of account you want to add
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {accountTypes.map((type) => (
              <button
                type="button"
                key={type.id}
                onClick={() => {
                  // setAccountType(type.id);
                  setValue('accountType', type.id as any);
                }}
                className={`p-6 border-2 rounded-xl transition-all duration-300 text-left ${
                  accountType === type.id
                    ? "border-emerald-500 bg-emerald-500/10"
                    : "border-gray-700 hover:border-gray-600"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-linear-to-r ${type.color} rounded-xl flex items-center justify-center`}
                  >
                    {type.icon}
                  </div>
                  {accountType === type.id && (
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                <p className="text-sm text-gray-400">{type.description}</p>
              </button>
            ))}
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 flex items-start space-x-3">
            <Info className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm text-blue-300 font-medium mb-1">
                Secure Connection
              </p>
              <p className="text-sm text-gray-400">
                Your banking credentials are encrypted and never stored on our
                servers.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Account Information */}
      {currentStep === 2 && (
        <div>
          <h2 className="text-3xl font-bold mb-2">Account Information</h2>
          <p className="text-gray-400 mb-8">Enter your account details</p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Account Name *
              </label>
              <input
                type="text"
                {...register('accountName')}
                placeholder="e.g., My Checking Account"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400"
              />
              <p className="text-xs text-gray-500 mt-1">
                Give your account a memorable name
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Bank Name *
              </label>
              <input
                type="text"
                {...register("bankName")}
                placeholder="e.g., Chase Bank"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Account Number *
                </label>
                <input
                  type="text"
                  {...register("accountNumber")}
                  placeholder="••••••••1234"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Initial Balance *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    $
                  </span>
                  <input
                    type="number"
                    {...register("balance")}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Current balance in this account
                </p>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-yellow-300 font-medium mb-1">
                  Security Notice
                </p>
                <p className="text-sm text-gray-400">
                  All sensitive information is encrypted using bank-level
                  security protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Verify */}
      {currentStep === 3 && (
        <div>
          <h2 className="text-3xl font-bold mb-2">Review Account Details</h2>
          <p className="text-gray-400 mb-8">
            Please verify all information is correct
          </p>

          <div className="space-y-6">
            {/* Account Type Summary */}
            <div className="bg-gray-700/30 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className={`w-14 h-14 bg-linear-to-r ${
                    accountTypes.find((t) => t.id === accountType)?.color
                  } rounded-xl flex items-center justify-center`}
                >
                  {accountTypes.find((t) => t.id === accountType)?.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400">Account Type</p>
                  <p className="text-xl font-bold">
                    {accountTypes.find((t) => t.id === accountType)?.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Account Details */}
            <div className="bg-gray-700/30 rounded-xl p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Account Name</p>
                  <p className="font-semibold">{accountName || "-"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Bank Name</p>
                  <p className="font-semibold">{bankName || "-"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Account Number</p>
                  <p className="font-semibold">
                    ••••••{accountNumber.slice(-4) || "----"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Initial Balance</p>
                  <p className="font-semibold text-emerald-400">₹ {balance}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Currency</p>
                  <p className="font-semibold">{"INR"}</p>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="bg-gray-700/30 rounded-xl p-4">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-gray-600 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-gray-900"
                />
                <span className="text-sm text-gray-300">
                  I confirm that all the information provided is accurate and I
                  agree to the
                  <a
                    href="#"
                    className="text-emerald-400 hover:text-emerald-300 ml-1"
                  >
                    Terms of Service
                  </a>{" "}
                  and
                  <a
                    href="#"
                    className="text-emerald-400 hover:text-emerald-300 ml-1"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>
          </div>
        </div>
      )}
      <NavigationButtons currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </form>
    </div>
  );
};

export default AddAccountForm;
