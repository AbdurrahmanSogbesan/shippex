import { TriangleAlert } from "lucide-react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ErrorBoundary = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="text-center p-8 bg-white rounded-lg">
        <TriangleAlert className="mx-auto h-16 w-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Oops! Something went wrong.</h1>
        <p className="text-[#838282] mb-4">
          We're sorry, but an unexpected error has occurred.
        </p>

        <Link to="/">
          <Button>Go back home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorBoundary;
