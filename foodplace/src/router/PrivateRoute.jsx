import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

const PrivateRoute = () => {
    const { token } = useAuth();
    return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;