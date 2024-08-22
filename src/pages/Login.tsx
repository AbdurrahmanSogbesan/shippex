import { Lock, Users } from "lucide-react";
import ShippexIcon from "../assets/icons/logo.svg";
import { useState, useEffect } from "react";
import CustomLink from "../components/CustomLink";
import { Input } from "../components/Input";
import CheckBox from "../components/Checkbox";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { login } from "../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { handleRememberMe } from "../utils";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, formState, handleSubmit, setValue } = useForm<SignupForm>({
    mode: "onBlur",
  });

  useEffect(() => {
    const savedCredentials = localStorage.getItem("loginCredentials");
    if (savedCredentials) {
      const { username, password, expiry } = JSON.parse(savedCredentials);
      if (new Date().getTime() < expiry) {
        setValue("username", username);
        setValue("password", password);
        setRememberMe(true);
      } else {
        localStorage.removeItem("loginCredentials");
      }
    }
  }, [setValue]);

  const onSubmit = async (data: SignupForm) => {
    setIsLoading(true);
    try {
      const response = await login(data.username, data.password);
      auth.login(response.full_name);
      handleRememberMe(data.username, data.password, rememberMe);
      toast.success("Login successful!");
      navigate(response.home_page);
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error?.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative">
      <div className="w-full max-w-[342px] xs:w-[340px] flex flex-col items-center">
        <div className="absolute top-0 left-0">
          <ShippexIcon />
        </div>

        <p className="text-[24px] font-bold mb-2">Sign in</p>
        <div className="flex items-center gap-x-2 mb-4">
          <p className="text-[14px] text-[#4B5563]">
            Don't have an account yet?
          </p>
          <CustomLink text="Sign up here" />
        </div>

        <form
          className="w-full flex flex-col gap-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            {...register("username", {
              required: "Username is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Enter your email"
            label="Username"
            errorText={formState.errors?.username?.message}
            leftIcon={<Users size={16} color="#6B7280" />}
          />
          <Input
            {...register("password", {
              required: "Password is required",
            })}
            placeholder="Enter your password"
            label="Password"
            errorText={formState.errors?.password?.message}
            hideable
            leftIcon={<Lock size={16} color="#6B7280" />}
            helperContent={<CustomLink text="Forgot password?" />}
          />
          <CheckBox
            label="Remember me"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="mb-2"
          />
          <Button
            type="submit"
            customWidth="full"
            loading={isLoading}
            loadingText="Signing in"
            disabled={!formState.isValid}
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
