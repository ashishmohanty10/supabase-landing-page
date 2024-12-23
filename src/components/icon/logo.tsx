import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/logo.webp"
      alt="Logo"
      priority
      width={125}
      height={120}
      className="shrink-0"
    />
  );
};
