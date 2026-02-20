import { useAppSelector } from "@/store/hooks";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useAppSelector((state) => state.auth);

  return user ? <Outlet /> : <Navigate to={"/"} replace={true} />;
};

export default ProtectedRoute;
