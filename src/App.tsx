import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import AddNewAccount from "./pages/AddNewAccount";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <div className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/add-new" element={<AddNewAccount />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transactions" element={<Transaction />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
