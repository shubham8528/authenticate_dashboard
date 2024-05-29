import { Navigate } from "react-router-dom";

export default function Protection({ children, ...props }: any) {
  //   const isAuth = useSelector(
  //     (loginReducer) => loginReducer?.LoginReducer?.data?.data?.token
  //   );
  return true ? children : "shubham";
}
