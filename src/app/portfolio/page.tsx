import { FadeInView } from "@/components/FadeInView";
import { GradientText } from "@/components/GradientText";
import Image from "next/image";
import { Rive } from "@/components/Rive";
import BlurDecoration from "@/components/BlurDecoration";
import { InteractiveCircles } from "@/components/InteractiveCircles";
import Header, { Highlight } from "@/components/Header";
import CoreStats from "@/components/CoreStats";
import Projects, { exampleProjects } from "@/components/Projects";
import { Link } from "lucide-react";
import { FooterConsoleLog } from "@/components/FooterConsoleLog";

export default function Portfolio() {
  return (
    <main className="relative w-full overflow-hidden">
      <InteractiveCircles
        size="600px"
        mobileBreakpoint={768}
        mobileSize="200px"
        mobilePosition={{ top: "0", left: "-15%" }}
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
              src="/code.svg"
              className="align-text-center inline-block"
            />{" "}
            Web Developer,{" "}
            <Image
              alt="Web Developer"
              width={42.75}
              height={42.75}
              src="/design.svg"
              className="align-text-center inline-block"
            />{" "}
            Designer,{" "}
            <Image
              alt="Web Developer"
              width={42.75}
              height={42.75}
              src="/tech.svg"
              className="align-text-center inline-block"
            />{" "}
            Tech &{" "}
            <Image
              alt="Web Developer"
              width={42.75}
              height={42.75}
              src="/ai.svg"
              className="align-text-center inline-block"
            />{" "}
            AI Enthusiast,{" "}
            <Image
              alt="Web Developer"
              width={46.75}
              height={46.75}
              src="/gamer.svg"
              className="align-text-center inline-block"
            />{" "}
            Gamer and{" "}
            <Image
              alt="Web Developer"
              width={42.75}
              height={42.75}
              src="/dogo.svg"
              className="align-text-center inline-block"
            />{" "}
            Dogo Lover
          </GradientText>
        </h1>
      </FadeInView>

      <div className="mx-auto max-w-[1300px] px-[15px] py-12">
        <FadeInView className="backdrop-blur-lg" delay={0.8}>
          <div className="mx-auto max-w-[1300px] space-y-8 pb-12">
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

      <div id="projects-section">
        <Projects projects={exampleProjects} />
      </div>

      <footer className="relative z-10 mt-6 border-t border-neutral-50/20 px-8 pt-20 md:mt-16 md:pt-40">
        <BlurDecoration
          className="absolute -top-[300px] left-1/2 h-[1000px] w-[1000px] -translate-x-1/2"
          color="var(--highlight-blue)"
          opacity={0.1}
          centered={true}
        />

        <BlurDecoration
          className="absolute -bottom-[400px] left-1/2 h-[800px] w-[800px] -translate-x-1/2"
          color="var(--highlight-green)"
          opacity={0.1}
          centered={true}
        />

        <FadeInView>
          <h2 className="text-center text-4xl font-semibold md:text-6xl">
            <GradientText className="text-center">
              I'm currently <Highlight className="mr-2 italic">open</Highlight>{" "}
              for opportunities!
            </GradientText>
          </h2>
        </FadeInView>

        <FadeInView>
          <p className="py-8 text-center text-xl font-semibold md:text-3xl">
            <GradientText>Shoot me an </GradientText>
            <GradientText
              href="mailto:devonwelchcodes@gmail.com"
              highlight="var(--highlight-blue)"
            >
              email
            </GradientText>
            <GradientText>, or find me on </GradientText>
            <GradientText
              highlight="var(--highlight-green)"
              href="https://www.linkedin.com/in/devon-welch-6b7724132/"
            >
              LinkedIn
            </GradientText>
          </p>
        </FadeInView>

        <FadeInView>
          <Image
            src="/footer-guy.png"
            alt="Footer Guy"
            width={248}
            quality={100}
            height={190}
            className="mx-auto -mb-10 w-[150px] pt-2 md:w-auto md:pt-16"
            style={{ height: "auto" }}
          />
        </FadeInView>

        <FadeInView delay={0.7}>
          <p className="md:text-md py-12 pb-6 text-center text-base text-neutral-50/30 md:pb-12">
            console.log("You found the end!");
          </p>
        </FadeInView>

        <FooterConsoleLog message="Hey there! Thanks for viewing my portfolio <3" />

        <InteractiveCircles
          size="500px"
          mobileBreakpoint={1758}
          mobileSize="300px"
          sensitivity={1}
          position={{ top: "0", left: "0%" }}
          mobilePosition={{ top: null, bottom: "0", left: "0%" }}
          initialY={0}
        >
          <Image
            className="desktop:opacity-100 absolute left-40 top-1/2 z-50 hidden -translate-y-1/2 animate-[wiggle_4s_ease-in-out_infinite] opacity-50 xl:block"
            src="/laptop.png"
            alt="Laptop"
            width={260.5}
            quality={100}
            height={260.5}
          />
        </InteractiveCircles>

        <InteractiveCircles
          color="var(--highlight-blue)"
          position={{ top: "100px", right: "0" }}
          mobilePosition={{ top: "0", right: "0" }}
          size="600px"
          mobileBreakpoint={1758}
          mobileSize="180px"
          initialY={0}
        >
          <Image
            className="desktop:opacity-100 absolute -left-40 top-1/2 z-50 hidden -translate-y-1/2 animate-[wiggle_3s_ease-in-out_infinite] opacity-50 xl:block"
            src="/bug.png"
            alt="Bug"
            width={174}
            quality={100}
            height={174}
          />
        </InteractiveCircles>
      </footer>

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
