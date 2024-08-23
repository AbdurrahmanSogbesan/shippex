import React from "react";
import { Link } from "react-router-dom";
import NotFoundIcon from "../assets/icons/404.svg";
import MainLayout from "../components/MainLayout";

const NotFound: React.FC = () => {
  return (
    <MainLayout>
      <div className="items-center h-[85%] flex justify-center flex-col">
        <NotFoundIcon />
        <p className="text-[24px] font-bold mt-10 mb-2">404</p>
        <p className="mb-2 sm:mb-6 text-[14px] text-[#838282]">
          Oops! The page you're looking for can't be found.
        </p>
        <Link
          to="/app"
          className="text-[#2563EB] text-[15px] hover:underline py-2 sm:py-[14px] font-semibold"
        >
          Go back to the main page
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
