import Dashboard from "../containers/auth/dashboard/dashboard";
import Login from "../containers/auth/login";
import Register from "../containers/auth/register";

interface MyObject {
  id: number;
  title: string;
  slug: string;
  path: string;
  isProtected: boolean;
  validate: boolean;
  data?: any; // Make 'data' optional if not always present
}

export const protectedRoutes: MyObject[] = [
  {
    id: 0,
    title: "Login",
    slug: "login",
    path: "/login",
    data: <Login />,
    isProtected: false,
    validate: false,
  },
  {
    id: 1,
    title: "Register",
    slug: "register",
    path: "/register",
    data: <Register />,
    isProtected: false,
    validate: false,
  },
  {
    id: 2,
    title: "Dashboard",
    slug: "dashboard",
    path: "/",
    data: <Dashboard />,
    isProtected: true,
    validate: false,
  },
];
