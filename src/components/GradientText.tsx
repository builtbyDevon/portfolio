interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  highlight?: string;
}

export const GradientText = ({
  children,
  className = "",
  highlight,
}: GradientTextProps) => {
  // Default gradient is gray (#b5b5b5), but can be overridden with highlight prop
  const gradientStyle = highlight
    ? {
        background: `radial-gradient(circle, ${highlight} 0%, white 100%)`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }
    : undefined;

  return (
    <span
      className={`bg-[radial-gradient(circle,_white_0%,_#b5b5b5_100%)] bg-clip-text text-transparent ${className}`}
      style={gradientStyle}
    >
      {children}
    </span>
  );
};
