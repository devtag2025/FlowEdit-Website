const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={`font-inter font-medium text-xl leading-[150%] ${className}`}
    >
      <h1>Flow Edit</h1>
    </div>
  );
};

export default Logo;
