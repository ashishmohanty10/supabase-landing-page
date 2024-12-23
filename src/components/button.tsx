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

const buttonClasses = cva("relative inline-flex items-center", {
  variants: {
    variant: {
      primary:
        "bg-primary-button border border-button-active/30 hover:border-button-active hover:bg-button-active rounded-lg",
      secondary:
        "bg-secondary-color/70 hover:bg-secondary-color border-2 inset-0 border-tranparent-border/30 hover:border-tranparent-border/100 rounded-lg",
      tertiary:
        "hover:bg-secondary-color transition-colors duration-200 ease-out rounded-lg",
      quaternary:
        "bg-secondary-color/70 rounded-[6rem] hover:bg-secondary-color tranistion-colors",
      quinary:
        "bg-secondary-color/70 rounded-full hover:bg-secondary-color tranistion-colors border border-transparent-border/10 hover:border-tranparent-border",
    },
    size: {
      small: "text-xs px-[1rem] py-[.25rem]",
      medium: "text-sm py-[.7rem] px-4",
      cta: "text-sm py-[0.7rem] px-1",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={cn(
      "border border-brand/30 bg-brand/10 text-brand rounded-full py-[0.3rem] px-3",
      className
    )}
  >
    {children}
  </span>
);

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
