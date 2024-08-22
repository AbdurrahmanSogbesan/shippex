import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: "login", element: <Login /> },
      {
        element: <PrivateRoutes />,
        children: [
          { path: "users", element: <Users /> },
          { path: "products", element: <Products /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return <Outlet />;
}

function Users() {
  return <div>Users</div>;
}

function Login() {
  return <div>Login</div>;
}

function Products() {
  return <div>Products</div>;
}
