import { Bell, Menu, Search } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { openSidebar } from "../../redux/slices/sidebarSlice";
import { useEffect } from "react";
import { loadUser } from "../../redux/slices/authSlice";

const LoggedHeader = () => {
  const { user } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  //const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <header className="bg-gray-800/50 backdrop-blur-md border-b border-gray-700 sticky top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch(openSidebar())}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-sm text-gray-400">
                Welcome back, {user?.fullName}!
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search transactions..."
                className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400 w-64"
              />
            </div>
            <button className="relative p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LoggedHeader;
