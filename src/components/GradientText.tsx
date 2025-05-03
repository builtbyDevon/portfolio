interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText = ({
  children,
  className = "",
}: GradientTextProps) => {
  return (
    <span
      className={`bg-[radial-gradient(circle,_white_0%,_#b5b5b5_100%)] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
};
