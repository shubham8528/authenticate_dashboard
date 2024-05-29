import Login from "../containers/auth/login";

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
    title: "SingUp",
    slug: "signUp",
    path: "/signUp",
    // data: <ForgotPassword />,
    isProtected: false,
    validate: false,
  },
  {
    id: 2,
    title: "Dashboard",
    slug: "dashboard",
    path: "/",
    data: "shubham",
    isProtected: true,
    validate: false,
  },
];
