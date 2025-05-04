"use client";

import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Utility function to get a random number between min and max
const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

// Utility function to generate an array of a specific length
const range = (count: number) => Array.from({ length: count }, (_, i) => i);

// Default color is the highlight green
const DEFAULT_COLOR = "var(--highlight-green)";

// Custom hook to check if user prefers reduced motion
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
};

// Custom hook for random intervals
const useRandomInterval = (
  callback: () => void,
  minDelay: number | null,
  maxDelay: number | null
) => {
  const timeoutId = useRef<number | null>(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const isEnabled =
      typeof minDelay === "number" && typeof maxDelay === "number";
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }
    return () => {
      if (timeoutId.current) {
        window.clearTimeout(timeoutId.current);
      }
    };
  }, [minDelay, maxDelay]);

  const cancel = React.useCallback(() => {
    if (timeoutId.current) {
      window.clearTimeout(timeoutId.current);
    }
  }, []);

  return cancel;
};

interface SparkleType {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: {
    top: string;
    left: string;
  };
}

const generateSparkle = (color: string = DEFAULT_COLOR): SparkleType => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(0, 100) + "%",
      left: random(0, 100) + "%",
    },
  };
};

const comeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const SparkleWrapper = styled.span`
  position: absolute;
  display: block;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${comeInOut} 700ms forwards;
  }
`;

const SparkleSvg = styled.svg`
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} 1000ms linear;
  }
`;

const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`;

const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;

interface SparkleProps {
  size: number;
  color: string;
  style: {
    top: string;
    left: string;
  };
}

const Sparkle = ({ size, color, style }: SparkleProps) => {
  const path =
    "M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z";

  return (
    <SparkleWrapper style={style}>
      <SparkleSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
        {/* First draw a black backdrop for stronger outline effect */}
        <path d={path} fill="black" transform="translate(1, 1)" />

        {/* Then draw the main sparkle with a thick stroke */}
        <path d={path} stroke="black" strokeWidth="3" fill={color} />
      </SparkleSvg>
    </SparkleWrapper>
  );
};

interface SparklesProps {
  color?: string;
  children: React.ReactNode;
  [x: string]: any;
}

const HeaderSparkles = ({
  color = DEFAULT_COLOR,
  children,
  ...delegated
}: SparklesProps) => {
  // Ensure this component only runs on client side
  const [isMounted, setIsMounted] = useState(false);
  const [sparkles, setSparkles] = useState<SparkleType[]>([]);

  const prefersReducedMotion = usePrefersReducedMotion();

  // Only initialize sparkles on the client side
  useEffect(() => {
    setIsMounted(true);
    // Generate initial sparkles only after component is mounted on client
    setSparkles(range(3).map(() => generateSparkle(color)));
  }, [color]);

  useRandomInterval(
    () => {
      if (!isMounted) return;

      const sparkle = generateSparkle(color);
      const now = Date.now();
      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });

      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    prefersReducedMotion || !isMounted ? null : 50,
    prefersReducedMotion || !isMounted ? null : 450
  );

  // Don't render sparkles on server, only the children
  if (!isMounted) {
    return (
      <Wrapper {...delegated}>
        <ChildWrapper>{children}</ChildWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper {...delegated}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};

export default HeaderSparkles;
