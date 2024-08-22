import { HTMLProps, forwardRef } from "react";
import clsx from "clsx";
import { Check } from "lucide-react";

const CheckBox = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement> & {
    className?: string;
  }
>(({ className, label, checked, disabled, ...inputProps }, ref) => {
  return (
    <label
      htmlFor={inputProps.id}
      className={clsx(
        "flex items-center gap-4 mb-0 relative cursor-pointer transition-colors",
        className
      )}
    >
      <>
        <div
          className={clsx(
            "rounded-[4px] flex items-center justify-center relative cursor-pointer border transition-colors w-[16px] h-[16px]",
            checked
              ? "border-[#2563EB] bg-[#2563EB] cursor-pointer stroke-white"
              : "border-[#e5e7eb] hover:border-[#2563EB]"
          )}
        >
          {checked && <Check className="stroke-inherit w-[12px] h-[12px]" />}
        </div>
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          disabled={disabled}
          ref={ref}
          {...inputProps}
        />
      </>

      {label && <p className="font-medium text-[#1F2937]">{label}</p>}
    </label>
  );
});

CheckBox.displayName = "CheckBox";

export default CheckBox;
