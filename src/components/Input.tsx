import * as React from "react";

import clsx from "clsx";
import { useState } from "react";

import { cn } from "../lib/utils";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hideable?: boolean;
  errorText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      id,
      name,
      label,
      type,
      errorText,
      disabled,
      hideable,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className={clsx(className, "flex flex-col gap-[6px]")}>
        <label htmlFor={id || name} className="flex">
          <p>{label}</p>
        </label>

        <div className="relative">
          <input
            name={name}
            id={id}
            className="bg-background flex h-[46px] w-full rounded-[8px] border border-[#e5e7eb] px-4 py-[14px] text-[15px] placeholder:text-[#6B7280] focus:border-[#2563EB] focus-visible:border-[#2563EB] focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            ref={ref}
            type={!showPassword && hideable ? "password" : type}
            {...props}
          />

          {errorText && !disabled && (
            <p className={errorText ? "text-error-100" : "text-gray-300"}>
              {errorText}
            </p>
          )}

          {hideable && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setShowPassword((prevShow) => !prevShow);
              }}
              className={cn(
                "absolute right-[18px] top-[50%] z-50 -translate-y-[50%] cursor-pointer",
                errorText && "top-[30%]"
              )}
            >
              {showPassword ? (
                <Eye size={16} color="#6B7280" />
              ) : (
                <EyeOff size={16} color="#6B7280" />
              )}
            </button>
          )}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
