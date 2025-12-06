import { BarChart3, CreditCard, DollarSign, LogOut, PieChart, Plus, Settings, Target, Wallet, X } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { closeSidebar } from '../../redux/slices/sidebarSlice';
import { Link } from 'react-router-dom';
import { showAddAccountModal } from '../../redux/slices/addAccountModalSlice';

const SideBar = () => {

    const dispatch = useAppDispatch();
    const {user} = useAppSelector((state) => state.auth);
    const {sidebarIsOpen} = useAppSelector((state)=> state.sidebar);


    const handleAddAccount = () => {
      dispatch(showAddAccountModal());
      dispatch(closeSidebar());
    };

  return (
    <aside className={`fixed top-0 left-0 h-full w-64 bg-gray-800/50 backdrop-blur-md border-r border-gray-700 z-50 transform transition-transform duration-300 ${sidebarIsOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-linear-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">FinTrack</span>
            </div>
            <button 
              onClick={()=>dispatch(closeSidebar())}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="space-y-2">
            <Link to={'/dashboard'} className="flex items-center space-x-3 px-4 py-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
              <BarChart3 className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link to={'/account'} className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors">
              <Wallet className="w-5 h-5" />
              <span>Accounts</span>
            </Link>
            <Link to={'/transactions'} className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors">
              <CreditCard className="w-5 h-5" />
              <span>Transactions</span>
            </Link>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors">
              <Target className="w-5 h-5" />
              <span>Budget Goals</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors">
              <PieChart className="w-5 h-5" />
              <span>Analytics</span>
            </a>
          </nav>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <button 
              onClick={handleAddAccount}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-medium"
            >
              <Plus className="w-5 h-5" />
              <span>Add Account</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 w-full p-6 border-t border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            {/* <div className="w-10 h-10 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">{user.avatar}</span>
            </div> */}
            <div className="flex-1">
              <p className="font-medium">{user?.fullName}</p>
              <p className="text-sm text-gray-400">{user?.email}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors">
              <Settings className="w-4 h-4" />
            </button>
            <button className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
  )
}

export default SideBar