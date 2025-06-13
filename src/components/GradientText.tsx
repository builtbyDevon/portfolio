import Link from "next/link";
import HeaderSparkles from "@/components/HeaderSparkles";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  highlight?: string;
  href?: string;
}

export const GradientText = ({
  children,
  className = "",
  highlight,
  href,
}: GradientTextProps) => {
  if (href) {
    if (highlight) {
      const linkStyle = { color: highlight };
      return (
        <HeaderSparkles color={highlight}>
          <Link target="_blank" href={href}>
            <span className={`underline ${className}`} style={linkStyle}>
              {children}
            </span>
          </Link>
        </HeaderSparkles>
      );
    } else {
      return (
        <Link href={href}>
          <span className={`text-highlight-green underline ${className}`}>
            {children}
          </span>
        </Link>
      );
    }
  } else {
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
  }
};
