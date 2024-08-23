import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Tracking from "./pages/Tracking";
import AuthProvider from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: "login", element: <Login /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "app", element: <Tracking /> },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <div className="mx-auto max-w-full p-4 sm:p-6 md:p-12 lg:max-w-7xl h-screen">
        <RouterProvider router={router} />
      </div>
      <Toaster />
    </AuthProvider>
  );
}
