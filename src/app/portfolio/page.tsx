import { FadeInView } from "@/components/FadeInView";
import { GradientText } from "@/components/GradientText";
import Image from "next/image";
import { Rive } from "@/components/Rive";
import BlurDecoration from "@/components/BlurDecoration";
import { InteractiveCircles } from "@/components/InteractiveCircles";
import Header, { Highlight } from "@/components/Header";
import CoreStats from "@/components/CoreStats";
import Projects, { exampleProjects } from "@/components/Projects";

export default function Portfolio() {
  return (
    <main className="relative w-full overflow-hidden">
      <InteractiveCircles
        size="600px"
        mobileBreakpoint={768}
        mobileSize="200px"
        position={{ top: "0", left: "15%" }}
      />

      <InteractiveCircles
        color="var(--highlight-blue)"
        position={{ top: "-100px", right: "0" }}
        size="400px"
        sensitivity={3}
        mobileBreakpoint={768}
        mobileSize="180px"
      />

      <FadeInView>
        <div className="flex w-full items-center justify-center gap-4 px-4 py-12">
          <Image
            src="/icon.png"
            alt="Icon"
            width={54}
            height={35}
            quality={100}
            priority
            className="min-w-[54px] transform-none" // Prevents blur and maintains minimum width
          />
          <Image
            src="/logo.svg"
            alt="Logo"
            width={337}
            height={337}
            style={{ height: "auto" }}
            className="w-auto min-w-[50px] max-w-[337px]"
          />
        </div>
      </FadeInView>

      <FadeInView delay={0.5}>
        <h1 className="relative mx-auto max-w-[1300px] px-[15px] text-center text-4xl font-semibold md:text-[63px]">
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

      <div className="15px">
        <FadeInView
          className="mx-auto max-w-[1300px] backdrop-blur-lg"
          delay={0.8}
        >
          <div className="mx-auto max-w-[1300px] space-y-8 px-[15px] py-12">
            <Header
              size="lg"
              mobileSize="sm"
              className="margin-0 relative z-50 mb-1 pl-4 text-center uppercase text-white md:left-12 md:-mb-8 md:pl-0 md:text-left"
            >
              My core <Highlight>stats</Highlight>
            </Header>

            <CoreStats className="relative z-10" />
          </div>
        </FadeInView>
      </div>

      <div>
        <Projects projects={exampleProjects} />
      </div>

      <BlurDecoration
        className="left-1/6 md:-top-1/6 top-0 h-[200vw] w-[200vw] -translate-x-1/2 md:h-[90vw] md:w-[90vw]"
        color="var(--highlight-blue)"
        opacity={0.1}
        centered={true}
      />

      <BlurDecoration
        className="bottom-1/2 right-[-450px] h-[900px] w-[900px] md:bottom-0 md:right-[-30vw] md:h-[60vw] md:w-[60vw]"
        color="var(--highlight-green)"
        opacity={0.1}
        centered={true}
      />
    </main>
  );
}
