import { CreditCard, DollarSign, Plus, Wallet, X } from 'lucide-react';
import { useAppDispatch } from '../../store/hooks';
import { closeAddAccountModal } from '../../redux/slices/addAccountModalSlice';

const AddAccountModal = () => {

    const dispatch = useAppDispatch();
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-md w-full p-8 relative">
            <button 
              onClick={() => dispatch(closeAddAccountModal())}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Add New Account</h2>
              <p className="text-gray-400">Connect your bank account or credit card</p>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-gray-800 border border-gray-700 rounded-xl hover:border-emerald-500 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Checking Account</p>
                    <p className="text-sm text-gray-400">Connect your bank</p>
                  </div>
                </div>
                <Plus className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full flex items-center justify-between p-4 bg-gray-800 border border-gray-700 rounded-xl hover:border-emerald-500 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-linear-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Savings Account</p>
                    <p className="text-sm text-gray-400">Link savings account</p>
                  </div>
                </div>
                <Plus className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full flex items-center justify-between p-4 bg-gray-800 border border-gray-700 rounded-xl hover:border-emerald-500 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Credit Card</p>
                    <p className="text-sm text-gray-400">Add credit card</p>
                  </div>
                </div>
                <Plus className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
  )
}

export default AddAccountModal