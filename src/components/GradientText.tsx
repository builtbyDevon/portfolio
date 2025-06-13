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
          color: highlight,
        }
      : {
          background: `radial-gradient(circle, white 0%, #b5b5b5 100%)`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        };

    return (
      <span className={className} style={gradientStyle}>
        {highlight ? (
          <HeaderSparkles color={highlight}>{children}</HeaderSparkles>
        ) : (
          children
        )}
      </span>
    );
  }
};
