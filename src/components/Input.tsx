import * as React from "react";

import clsx from "clsx";
import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hideable?: boolean;
  errorText?: string;
  leftIcon?: React.ReactNode;
  helperContent?: React.ReactNode;
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
      leftIcon,
      helperContent,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className={clsx(className, "flex flex-col gap-[6px]")}>
        {label && (
          <div className="flex justify-between items-center mb-1">
            <label
              htmlFor={id || name}
              className="text-[14px] font-semibold text-[#1F2937]"
            >
              {label}
            </label>
            {helperContent && <div>{helperContent}</div>}
          </div>
        )}

        <div className="relative">
          {leftIcon && (
            <div
              className={clsx(
                "absolute left-4 -translate-y-1/2",
                errorText ? "top-[33%]" : "top-1/2"
              )}
            >
              {leftIcon}
            </div>
          )}
          <input
            name={name}
            id={id}
            className={clsx(
              "bg-background flex h-[46px] w-full rounded-[8px] border px-4 py-[14px] text-[15px] text-[#1F2937] placeholder:text-[#6B7280] focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 shadow-sm transition-colors",
              leftIcon && "pl-12",
              hideable && "pr-12",
              errorText
                ? "border-[#EF4444] focus:border-[#EF4444] focus-visible:border-[#EF4444] focus:shadow-[0_0_0_4px_rgba(239,68,68,0.2)] focus-visible:shadow-[0_0_0_4px_rgba(239,68,68,0.2)]"
                : "border-[#e5e7eb] focus:border-[#2563EB] focus-visible:border-[#2563EB] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.2)] focus-visible:shadow-[0_0_0_4px_rgba(37,99,235,0.2)]"
            )}
            ref={ref}
            type={!showPassword && hideable ? "password" : type}
            {...props}
          />

          {errorText && !disabled && (
            <p className="text-[#EF4444] text-[13px] mt-1">{errorText}</p>
          )}

          {hideable && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setShowPassword((prevShow) => !prevShow);
              }}
              className={clsx(
                "absolute right-4 top-[50%] z-50 -translate-y-[50%] cursor-pointer",
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
