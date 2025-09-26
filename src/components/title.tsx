import { cn } from "@/utils/utils";

export function Title({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "text-center text-xl md:text-2xl text-offWhite leading-tight",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SubTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "text-sm md:text-md text-secondary-text text-center ",
        className
      )}
    >
      {children}
    </div>
  );
}
