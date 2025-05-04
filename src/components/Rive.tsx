"use client";

import { useRive } from "@rive-app/react-canvas";

export const Rive = () => {
  const { RiveComponent, rive } = useRive({
    src: "/animations/test.riv",
    autoplay: true,
  });

  return (
    <div className="h-[70px] w-[70px]">
      <RiveComponent
      // onMouseEnter={() => rive && rive.play()}
      // onMouseLeave={() => rive && rive.pause()}
      />
    </div>
  );
};
