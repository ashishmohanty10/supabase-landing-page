import { cn } from "@/utils/utils";

export const Marquee = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn(className)}>{children}</div>;
};
