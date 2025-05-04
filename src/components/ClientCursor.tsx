"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the cursor library
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function ClientCursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={1.7}
      outerAlpha={0.2}
      trailingSpeed={8}
      color="255, 255, 255" // White for best blend mode effect
      innerStyle={{
        backgroundColor: "white",
        mixBlendMode: "difference", // Creates inverse color effect
      }}
      outerStyle={{
        border: "2px solid white",
        mixBlendMode: "difference", // Creates inverse color effect
        backgroundColor: "transparent",
      }}
      clickables={[
        "a",
        "button",
        "input",
        "select",
        "textarea",
        ".clickable",
        ".link",
        "label",
      ]}
    />
  );
}
