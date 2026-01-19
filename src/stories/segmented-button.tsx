import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const segmentedButtonVariants = cva(
  "inline-flex items-center rounded-md transition-all",
  {
    variants: {
      variant: {
        primary:
          "bg-primary p-1 shadow-sm [&_button]:text-primary-foreground",
        secondary:
          "bg-secondary p-1 shadow-sm [&_button]:text-secondary-foreground",
      },
      size: {
        default: "[&_button]:px-3 [&_button]:py-2 [&_button]:text-sm",
        sm: "[&_button]:px-2 [&_button]:py-1 [&_button]:text-xs",
        lg: "[&_button]:px-4 [&_button]:py-3 [&_button]:text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const segmentedButtonItemVariants = cva(
  "relative flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "hover:bg-primary/80 data-[state=active]:bg-primary/90",
        secondary: "hover:bg-secondary/80 data-[state=active]:bg-secondary/80",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface SegmentedButtonContextType {
  selectedValue: string;
  onValueChange: (value: string) => void;
  variant: "primary" | "secondary";
  disabled?: boolean;
}

const SegmentedButtonContext = React.createContext<
  SegmentedButtonContextType | undefined
>(undefined);

const useSegmentedButtonContext = () => {
  const context = React.useContext(SegmentedButtonContext);
  if (!context) {
    throw new Error(
      "SegmentedButtonItem must be used within SegmentedButton"
    );
  }
  return context;
};

interface SegmentedButtonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof segmentedButtonVariants> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}

const SegmentedButton = React.forwardRef<
  HTMLDivElement,
  SegmentedButtonProps
>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      defaultValue = "",
      value: controlledValue,
      onValueChange,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(
      defaultValue
    );
    const isControlled = controlledValue !== undefined;
    const selectedValue = isControlled ? controlledValue : uncontrolledValue;

    const handleValueChange = (newValue: string) => {
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onValueChange?.(newValue);
    };

    return (
      <SegmentedButtonContext.Provider
        value={{
          selectedValue,
          onValueChange: handleValueChange,
          variant: variant as "primary" | "secondary",
          disabled,
        }}
      >
        <div
          ref={ref}
          className={cn(
            segmentedButtonVariants({ variant, size }),
            className
          )}
          {...props}
        >
          {children}
        </div>
      </SegmentedButtonContext.Provider>
    );
  }
);

SegmentedButton.displayName = "SegmentedButton";

interface SegmentedButtonItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  label?: string;
}

const SegmentedButtonItem = React.forwardRef<
  HTMLButtonElement,
  SegmentedButtonItemProps
>(({ className, value, label, children, disabled, ...props }, ref) => {
  const { selectedValue, onValueChange, variant, disabled: groupDisabled } =
    useSegmentedButtonContext();
  const isSelected = selectedValue === value;
  const isDisabled = disabled || groupDisabled;

  const handleClick = () => {
    if (!isDisabled) {
      onValueChange(value);
    }
  };

  return (
    <button
      ref={ref}
      type="button"
      role="radio"
      aria-checked={isSelected}
      aria-disabled={isDisabled}
      data-state={isSelected ? "active" : "inactive"}
      disabled={isDisabled}
      className={cn(
        segmentedButtonItemVariants({ variant }),
        "flex-1 whitespace-nowrap rounded-sm first:rounded-l-md last:rounded-r-md",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {/* Divider - appears on right side except for last item */}
      {/* This pseudo-element is added via CSS, but we need to ensure proper structure */}
      {children || label}
    </button>
  );
});

SegmentedButtonItem.displayName = "SegmentedButtonItem";

export { SegmentedButton, SegmentedButtonItem };