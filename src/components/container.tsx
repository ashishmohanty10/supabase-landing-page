import { cn } from "@/utils/utils";

export const Container = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("max-w-[140rem] mx-auto px-3", className)}>
      {children}
    </div>
  );
};
