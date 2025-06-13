// File: C:/Users/devie/OneDrive/Documents/Portfolio/my-app/src/components/TerminalAnimation.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GradientText } from "./GradientText";
import { useRouter } from "next/navigation";

const COMMAND_PREFIX = "npm install ";
const PACKAGE_NAME = "devon-welch-portfolio";
const FULL_COMMAND = COMMAND_PREFIX + PACKAGE_NAME;

const GAG_LINES = [
  "Fetching package info...",
  "Resolving dependencies...",
  "Grabbing coffee ☕",
  "Petting doggos 🐕",
  "Compiling assets...",
  '"Borrowing" code from Stack Overflow...',
  'Ensuring code is "pixel-purrfect" 😼',
  "Asking ChatGPT for help... 💻",
  "Almost there...",
];

const SUCCESS_MESSAGE = "Installed! ✨";

const TYPING_SPEED = 70; // Milliseconds per character
const LINE_DELAY = 450; // Milliseconds between gag lines
const INITIAL_LINE_DELAY = 500; // Delay after command typing finishes before first line appears

// Helper function to split text into parts with and without emojis
const splitTextAndEmojis = (text: string) => {
  // This regex matches emoji characters
  const emojiRegex = /[\p{Emoji}]/gu;

  // Find all emoji matches with their positions
  const matches = [...text.matchAll(emojiRegex)];

  if (matches.length === 0) {
    return [{ text, isEmoji: false }];
  }

  const parts = [];
  let lastIndex = 0;

  // Process each emoji match
  matches.forEach((match) => {
    const matchIndex = match.index!;

    // Add text before emoji
    if (matchIndex > lastIndex) {
      parts.push({
        text: text.substring(lastIndex, matchIndex),
        isEmoji: false,
      });
    }

    // Add emoji
    parts.push({
      text: match[0],
      isEmoji: true,
    });

    lastIndex = matchIndex + match[0].length;
  });

  // Add remaining text after last emoji
  if (lastIndex < text.length) {
    parts.push({
      text: text.substring(lastIndex),
      isEmoji: false,
    });
  }

  return parts;
};

export const TerminalAnimation = () => {
  const [typedCommand, setTypedCommand] = useState("");
  const [lines, setLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();

  // Effect for typing the command (SIMPLIFIED)
  useEffect(() => {
    // Stop typing if complete or command is already fully typed
    if (isComplete || typedCommand.length >= FULL_COMMAND.length) return;

    const timeoutId = setTimeout(() => {
      setTypedCommand(FULL_COMMAND.slice(0, typedCommand.length + 1));
    }, TYPING_SPEED);

    // Only return the cleanup for the typing timeout
    return () => clearTimeout(timeoutId);
  }, [typedCommand, isComplete]); // Dependency array is correct

  // Effect for displaying ALL lines (including the first)
  useEffect(() => {
    // Only run if command is fully typed and animation is not finished
    if (typedCommand !== FULL_COMMAND || isComplete) return;

    let timeoutId: NodeJS.Timeout | undefined;

    // If no lines have been added yet, add the first one after a delay
    if (lines.length === 0) {
      timeoutId = setTimeout(() => {
        setLines([GAG_LINES[0]]);
      }, INITIAL_LINE_DELAY); // Use the dedicated initial delay
    }
    // If lines have already started appearing
    else {
      const currentLineIndex = GAG_LINES.indexOf(lines[lines.length - 1]);

      // Add next gag line
      if (currentLineIndex !== -1 && currentLineIndex < GAG_LINES.length - 1) {
        timeoutId = setTimeout(() => {
          setLines((prevLines) => [
            ...prevLines,
            GAG_LINES[currentLineIndex + 1],
          ]);
        }, LINE_DELAY);
      }
      // Add success message
      else if (currentLineIndex === GAG_LINES.length - 1) {
        timeoutId = setTimeout(() => {
          setLines((prevLines) => [...prevLines, SUCCESS_MESSAGE]);
          setIsComplete(true); // Mark as complete
        }, LINE_DELAY);
      }
    }

    // Cleanup function for this effect
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lines, typedCommand, isComplete]); // Dependencies are correct

  // Effect for redirecting to portfolio page after completion
  useEffect(() => {
    if (isComplete && lines.includes(SUCCESS_MESSAGE)) {
      const redirectTimer = setTimeout(() => {
        router.push("/portfolio");
      }, 500); // Wait 2 seconds before redirecting

      return () => clearTimeout(redirectTimer);
    }
  }, [isComplete, lines, router]);

  return (
    // Use a dark background, set default text to white
    <div
      style={{
        background:
          "linear-gradient(180deg, rgb(30 30 30) 0%, rgba(0, 0, 0, 0.64) 28%, rgba(0, 0, 0, 0.20) 100%)",
      }}
      className="font outline-opacity-50 border-neutral-600s mx-auto my-4 min-h-80 w-full max-w-2xl rounded-3xl border border-neutral-700 bg-gradient-to-b p-4 text-sm text-neutral-200 shadow-xl backdrop-blur-lg md:my-8 md:text-base"
    >
      <div className="mb-2 flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      {/* Command Line */}
      <div className="flex items-center">
        {/* Use CSS variable for green $ sign */}
        <span className="mr-2 flex-shrink-0 text-[var(--highlight-green)]">
          $
        </span>
        <span className="flex-grow overflow-hidden whitespace-nowrap">
          <GradientText highlight="#FFFFFF">{COMMAND_PREFIX}</GradientText>
          {/* Use CSS variable for blue package name */}
          <span className="text-[var(--highlight-blue)]">
            {PACKAGE_NAME.slice(
              0,
              Math.max(0, typedCommand.length - COMMAND_PREFIX.length)
            )}
          </span>
          {/* Simple Blinking Cursor using Tailwind Animation - make it white */}
          {typedCommand.length < FULL_COMMAND.length && (
            <span className="animate-blink ml-1 inline-block h-[1em] w-[8px] bg-white align-bottom"></span>
          )}
        </span>
      </div>

      {/* Output Lines */}
      <div className="mt-2">
        <AnimatePresence>
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              // Use CSS variable for green success message
              className={
                line === SUCCESS_MESSAGE ? "text-[var(--highlight-green)]" : ""
              }
            >
              {line === SUCCESS_MESSAGE
                ? line // Render success message directly without GradientText
                : // Split text into parts with and without emojis
                  splitTextAndEmojis(line).map((part, i) => (
                    <span key={i}>
                      {part.isEmoji ? (
                        // Render emojis directly
                        part.text
                      ) : (
                        // Wrap non-emoji text in GradientText
                        <GradientText highlight="#d4d4d4">
                          {part.text}
                        </GradientText>
                      )}
                    </span>
                  ))}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
