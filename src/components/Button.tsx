import { forwardRef } from "react";
import clsx from "clsx";
import { LoaderCircle } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  customWidth?: number | "full";
  loadingText?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      loading,
      customWidth,
      loadingText,
      ...restButtonProps
    },
    ref
  ) => {
    const customWidthStyle =
      typeof customWidth === "number" ? { width: `${customWidth}px` } : {};

    return (
      <button
        className={clsx(
          "rounded-[8px] transition-all duration-200 inline-flex items-center justify-center",
          "cursor-pointer disabled:cursor-default",
          "font-semibold relative h-[46px]",
          "bg-[#2563EB] text-white text-[15px] hover:shadow-[0_0_0_4px_rgba(37,99,235,0.2)] disabled:bg-[#60A5FA] disabled:cursor-not-allowed disabled:hover:shadow-none",
          "py-[14px] px-6",
          {
            "w-full": customWidth === "full",
            "w-fit": !customWidth,
          },
          className
        )}
        ref={ref}
        style={customWidthStyle}
        {...restButtonProps}
      >
        {loading && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-[10px]">
            <LoaderCircle className="animate-spin" size={14} />
            {loadingText && <span>{loadingText}</span>}
          </div>
        )}

        <div className={loading ? "opacity-0" : ""}>{children}</div>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
