import Image from "next/image";
import { FadeInView } from "@/components/FadeInView";
import { GradientText } from "@/components/GradientText";
import Sparkles from "@/components/Sparkles";
import dynamic from "next/dynamic";

const TerminalAnimation = dynamic(
  () =>
    import("@/components/TerminalAnimation").then(
      (mod) => mod.TerminalAnimation
    ),
  { ssr: false } // Server-side rendering is false because it's a client-side animation
);
import BlurDecoration from "@/components/BlurDecoration";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FadeInView>
        <div className="flex w-full items-center justify-center gap-4 px-12 py-12 md:px-4">
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
            className="w-auto min-w-[50px] max-w-[337px]" // Sets minimum width and maintains aspect ratio
          />
        </div>
      </FadeInView>
      <FadeInView delay={0.3}>
        <h1 className="mx-auto mb-2 block text-center text-3xl font-semibold leading-normal md:text-5xl md:leading-normal">
          <GradientText>Hey! You're looking for Devon's</GradientText>{" "}
          <span className="text-[var(--highlight-green)]">Portfolio </span>
          <GradientText highlight="#b5b5b5">right?</GradientText>
        </h1>
      </FadeInView>
      <FadeInView delay={0.5}>
        <h3 className="text-center text-xl font-semibold md:text-3xl">
          <GradientText highlight="#d4d4d4">
            Awesome — we just need to{" "}
          </GradientText>
          <span className="relative mr-2 text-[var(--highlight-green)]">
            simulate
            <div
              className="animate-underline absolute bottom-0 left-0 h-[2px] w-full rounded-2xl bg-[var(--highlight-green)]"
              style={{ transform: "scaleX(0)" }}
            ></div>
          </span>
          <GradientText>
            installing some{" "}
            <Image
              src="/sunglass-emoji.png"
              alt="Sunglasses Emoji"
              width={29}
              height={29}
              className="animate-wiggle inline-block align-text-bottom"
            />{" "}
          </GradientText>
          <span
            className="text-[var(--highlight-blue)]"
            suppressHydrationWarning
          >
            <Sparkles color="#FFD700">cool stuff</Sparkles>
          </span>{" "}
          <GradientText>first...</GradientText>
        </h3>
      </FadeInView>
      <FadeInView delay={0.7}>
        <div className="relative mx-auto max-w-2xl">
          <div className="p-3">
            <TerminalAnimation />
          </div>
          {/* <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-full bg-[var(--highlight-blue)] opacity-20 blur-[150px]" /> */}
          <Image
            src="/guy-coding.png"
            alt="Icon"
            width={155}
            height={139}
            quality={100}
            className="absolute -bottom-4 -right-[50.5px]"
          />
        </div>
      </FadeInView>

      <BlurDecoration className="absolute left-1/2 top-0 -z-10 h-[40vw] min-h-[700px] w-[40vw] min-w-[700px] -translate-x-1/2" />
    </main>
  );
}
