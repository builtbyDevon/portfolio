import { FadeInView } from "@/components/FadeInView";
import { GradientText } from "@/components/GradientText";
import Image from "next/image";
import BlurDecoration from "@/components/BlurDecoration";
import { InteractiveCircles } from "@/components/InteractiveCircles";
import Header, { Highlight } from "@/components/Header";
import CoreStats from "@/components/CoreStats";
import Projects, { exampleProjects } from "@/components/Projects";
import Footer from "@/components/Footer";
import ScrollToProjects from "@/components/ScrollToProjects";
import { Download } from "lucide-react";

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
        <div className="relative mx-auto w-full max-w-[1300px] px-4 py-8 md:px-12 md:py-12">
          {/* Centered Logo */}
          <div className="flex w-full items-center justify-center gap-2 md:gap-4">
            <Image
              src="/icon.png"
              alt="Icon"
              width={54}
              height={35}
              quality={100}
              priority
              className="h-auto w-[40px] min-w-[40px] transform-none md:w-[54px] md:min-w-[54px]"
            />
            <Image
              src="/logo.svg"
              alt="Logo"
              width={337}
              height={337}
              style={{ height: "auto" }}
              className="w-auto min-w-[100px] max-w-[160px] md:max-w-[337px]"
            />
          </div>

          {/* Social Icons - Positioned absolutely on the right */}
          <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2 md:right-12 md:gap-4">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/devon-welch/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-highlight-green text-neutral-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="transition-transform hover:scale-110 md:h-6 md:w-6"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* GitHub Icon */}
            <a
              href="https://github.com/builtbyDevon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-highlight-green text-neutral-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="transition-transform hover:scale-110 md:h-6 md:w-6"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </FadeInView>

      <FadeInView delay={0.5}>
        <h1 className="relative mx-auto max-w-[1300px] px-[15px] py-8 text-center text-4xl font-semibold md:text-[45px]">
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
            AI Enthusiast
            {/* <Image
              alt="Web Developer"
              width={46.75}
              height={46.75}
              src="/gamer.svg"
              className="align-text-center inline-block"
            />{" "}
            Gamer */}
            {/* <Image
              alt="Web Developer"
              width={42.75}
              height={42.75}
              src="/dogo.svg"
              className="align-text-center inline-block"
            />{" "}
            Dogo Lover */}
          </GradientText>
        </h1>
      </FadeInView>

      {/* About Me Blurb */}
      <FadeInView delay={0.6}>
        <div className="mx-auto max-w-[800px] px-[15px] py-4 text-center">
          <p className="text-lg md:text-xl">
            <GradientText>
              Canadian dev with 5+ years building sleek, accessible web
              experiences. I fuse design vision with engineering craft.
            </GradientText>
          </p>
        </div>
      </FadeInView>

      {/* Action Buttons */}
      <FadeInView delay={0.8}>
        <div className="mx-auto max-w-[1300px] px-[15px] py-8 text-center">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* See my projects button */}
            <ScrollToProjects />
            {/* Download resume button */}
            <a
              href="/Resume.pdf"
              download="Devon_Welch_Resume.pdf"
              className="hover:border-highlight-green hover:text-highlight-green inline-flex items-center gap-2 rounded-lg border-2 border-neutral-600 bg-transparent px-8 py-3 text-lg font-semibold text-neutral-200 transition-all hover:scale-105"
            >
              <Download size={20} strokeWidth={2} />
              Download resume
            </a>
          </div>
        </div>
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

      <Footer />

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
