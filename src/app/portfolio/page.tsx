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
    <main className="relative w-full overflow-x-hidden">
      <FadeInView delay={0.5}>
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
      </FadeInView>

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
            className="w-auto min-w-[50px] max-w-[337px]"
          />
        </div>
      </FadeInView>

      <FadeInView delay={0.3}>
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

      <FadeInView delay={0.4}>
        <div className="mx-auto max-w-[1300px] space-y-8 px-[15px] py-12">
          <Header
            size="lg"
            mobileSize="sm"
            className="margin-0 relative z-50 mb-1 pl-4 text-center uppercase text-white md:left-12 md:-mb-8 md:pl-0 md:text-left"
          >
            My core <Highlight>stats</Highlight>
          </Header>

          <div className="relative">
            <CoreStats className="relative z-10" />
            <BlurDecoration
              size="80%"
              color="var(--highlight-blue)"
              opacity={0.1}
              centered={true}
            />
          </div>
        </div>
      </FadeInView>

      <FadeInView delay={0.5}>
        <Projects projects={exampleProjects} />
      </FadeInView>
    </main>
  );
}
