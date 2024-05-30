import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function Protection({ children, ...props }: any) {
  const isAuth = useSelector((item: any) => item?.LoginReducer?.data?.token);
  return isAuth ? children : <Navigate to="/login" />;
}
