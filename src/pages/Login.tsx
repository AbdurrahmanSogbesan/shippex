import ShippexIcon from "../assets/icons/logo.svg";
import UsersIcon from "../assets/icons/users.svg";

import CustomLink from "../components/CustomLink";
import { Input } from "../components/Input";

const Login = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-between">
      <div className="w-full">
        <ShippexIcon />
      </div>

      <div className="flex items-center justify-center">
        <div className="flex flex-col w-[342px] items-center">
          <p className="text-[24px] font-bold mb-2">Sign in</p>
          <div className="flex items-center gap-x-2">
            <p className="text-[14px] text-[#4B5563]">
              Don't have an account yet?
            </p>
            <CustomLink text="Sign up here" />
          </div>

          <form className="mt-6 w-full">
            <Input />
          </form>
        </div>
      </div>

      <div className="w-full p-4"></div>
    </div>
  );
};

export default Login;
