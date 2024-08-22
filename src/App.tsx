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
        children: [{ path: "tracking", element: <Tracking /> }],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
