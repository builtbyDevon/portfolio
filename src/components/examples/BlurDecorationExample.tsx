"use client";

import React from "react";
import BlurDecoration from "../BlurDecoration";

export const BlurDecorationExample = () => {
  return (
    <div className="p-6">
      <h2 className="mb-8 text-2xl font-bold">BlurDecoration Examples</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Example 1: Default centered blue */}
        <div className="relative h-64 overflow-hidden rounded-lg border border-neutral-700 bg-neutral-900 p-6">
          <BlurDecoration />
          <div className="relative z-10">
            <h3 className="mb-2 text-xl">Default Centered</h3>
            <p>Using default centered position with blue color</p>
          </div>
        </div>

        {/* Example 2: Bottom position (non-centered) */}
        <div className="relative h-64 overflow-hidden rounded-lg border border-neutral-700 bg-neutral-900 p-6">
          <BlurDecoration centered={false} color="var(--highlight-green)" />
          <div className="relative z-10">
            <h3 className="mb-2 text-xl">Bottom Left (Non-Centered)</h3>
            <p>Using bottom-left position with green color</p>
          </div>
        </div>

        {/* Example 3: Custom position overriding centered */}
        <div className="relative h-64 overflow-hidden rounded-lg border border-neutral-700 bg-neutral-900 p-6">
          <BlurDecoration className="left-0 top-0 translate-x-0 translate-y-0" />
          <div className="relative z-10">
            <h3 className="mb-2 text-xl">Custom Top Left</h3>
            <p>Overriding centered position with custom class</p>
          </div>
        </div>

        {/* Example 4: Custom size with centered */}
        <div className="relative h-64 overflow-hidden rounded-lg border border-neutral-700 bg-neutral-900 p-6">
          <BlurDecoration width="50%" height="200px" color="purple" />
          <div className="relative z-10">
            <h3 className="mb-2 text-xl">Centered with Custom Size</h3>
            <p>50% width, 200px height, purple color, centered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlurDecorationExample;
