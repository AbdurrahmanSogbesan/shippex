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

function ErrorBoundary() {
  return (
    <div className="text-2xl text-red-700">Oops! Something went wrong.</div>
  );
}

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
        children: [{ path: "app", element: <Tracking /> }],
      },
    ],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <div className="mx-auto max-w-full px-4 sm:p-6 md:p-8 md:py-12 lg:max-w-7xl">
        <RouterProvider router={router} />
      </div>
      <Toaster />
    </AuthProvider>
  );
}
