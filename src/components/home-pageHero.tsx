import { cn } from "@/utils/utils";

interface HeroProps {
  children: React.ReactNode;
  className?: string;
}

interface HeroElementsProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementsProps) => {
  return (
    <h1
      className={cn(
        "text-2xl md:text-5xl leading-none tracking-widest",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HerosubTitle = ({ children, className }: HeroElementsProps) => {
  return <p className={cn("text-md md:text-lg py-4", className)}>{children}</p>;
};

export const Hero = ({ children, className }: HeroProps) => {
  return <div className={cn("text-center", className)}>{children}</div>;
};
