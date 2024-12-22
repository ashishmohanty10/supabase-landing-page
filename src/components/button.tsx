import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/utils";

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode;
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps);

const buttonClasses = cva(
  "relative rounded-lg inline-flex items-center px-[1rem] py-[.25rem]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-button border border-button-active/30 hover:border-button-active hover:bg-button-active",
        secondary:
          "bg-secondary-button border-2 inset-0 border-tranparent-border/30 hover:border-tranparent-border/100",
        tertiary:
          "hover:bg-secondary-button transition-colors duration-200 ease-out",
      },
      size: {
        small: "text-xs",
        medium: "text-sm",
        large: "text-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <span className={cn("highlight", className)}>{children}</span>;

export const Button = ({ children, variant, size, ...props }: ButtonProps) => {
  const classes = buttonClasses({ variant, size, className: props.className });

  if ("href" in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};
