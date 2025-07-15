import React from "react";
import { FadeInView } from "@/components/FadeInView";
import { GradientText } from "@/components/GradientText";
import Image from "next/image";
import BlurDecoration from "@/components/BlurDecoration";
import { InteractiveCircles } from "@/components/InteractiveCircles";
import { FooterConsoleLog } from "@/components/FooterConsoleLog";
import Header, { Highlight } from "@/components/Header";
import { ClipboardTooltip } from "./ClipboardTooltip";

const Footer: React.FC = () => {
  return (
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
        <div className="py-8 text-center text-xl font-semibold text-[var(--highlight-blue)] transition-all hover:text-white md:text-3xl">
          <GradientText>Shoot me an </GradientText>

          <ClipboardTooltip
            tooltipText="hello@devonw.me"
            copyText="hello@devonw.me"
          >
            Email
          </ClipboardTooltip>

          <GradientText>, or find me on </GradientText>
          <GradientText
            highlight="var(--highlight-green)"
            href="https://www.linkedin.com/in/devon-welch-6b7724132/"
          >
            LinkedIn
          </GradientText>
        </div>
      </FadeInView>
      {/* 
      <FadeInView>
        <Image
          src="/footer-guy.png"
          alt="Footer Guy"
          width={248}
          quality={100}
          height={190}
          className="mx-auto -mb-10 w-[150px] pt-2 md:w-[248px] md:pt-16"
          style={{ height: "auto" }}
        />
      </FadeInView> */}

      <FadeInView delay={0.7}>
        <p className="pt-35 mb-3 py-12 pb-6 text-center text-sm text-neutral-50/30 md:pb-12 md:text-base">
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
  );
};

export default Footer;
