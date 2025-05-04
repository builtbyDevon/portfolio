import { FadeInView } from "@/components/FadeInView";
import { GradientText } from "@/components/GradientText";
import Image from "next/image";
import { Rive } from "@/components/Rive";
import BlurDecoration from "@/components/BlurDecoration";
import { InteractiveCircles } from "@/components/InteractiveCircles";
export default function Portfolio() {
  return (
    <main className="relative h-screen w-full overflow-y-auto overflow-x-hidden">
      <InteractiveCircles size="600px" />

      <InteractiveCircles
        color="var(--highlight-blue)"
        position={{ top: "0", right: "0" }}
        size="400px"
        sensitivity={3}
      />

      <FadeInView>
        <div className="flex w-full items-center justify-center gap-4 px-4 py-12">
          <div>
            <Rive />
          </div>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={337}
            height={337}
            style={{ height: "auto" }}
            className="w-auto min-w-[50px] max-w-[337px]" // Sets minimum width and maintains aspect ratio
          />
        </div>
      </FadeInView>

      <FadeInView>
        <h1 className="relative mx-auto max-w-[1300px] px-[15px] text-center text-4xl font-semibold md:text-[63px]">
          <BlurDecoration />
          <GradientText>
            <Image
              alt="Web Developer"
              width={42.75}
              height={42.75}
              src="code.svg"
              className="align-text-center inline-block"
            />{" "}
            Web Developer,{" "}
            <Image
              alt="Web Developer"
              width={42.75}
              height={42.75}
              src="design.svg"
              className="align-text-center inline-block"
            />{" "}
            Designer,{" "}
            <Image
              alt="Web Developer"
              width={42.75}
              height={42.75}
              src="tech.svg"
              className="align-text-center inline-block"
            />{" "}
            Tech &{" "}
            <Image
              alt="Web Developer"
              width={42.75}
              height={42.75}
              src="ai.svg"
              className="align-text-center inline-block"
            />{" "}
            AI Enthusiast,{" "}
            <Image
              alt="Web Developer"
              width={46.75}
              height={46.75}
              src="gamer.svg"
              className="align-text-center inline-block"
            />{" "}
            Gamer and{" "}
            <Image
              alt="Web Developer"
              width={42.75}
              height={42.75}
              src="dogo.svg"
              className="align-text-center inline-block"
            />{" "}
            Dogo Lover
          </GradientText>
        </h1>
      </FadeInView>
    </main>
  );
}
