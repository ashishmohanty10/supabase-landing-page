export const Marquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center max-w-[70rem] mx-auto my-5 overflow-hidden  [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      {children}
    </div>
  );
};
