"use client";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: `I cannot say enough about the quality of work that Devon does. Our association had a decades-old website (www.mover.net) and Devon, along with others of the Smartt team, were able to transform our new site into a highly engaging, bilingual site with fresh, new methods and features that will appeal to our market. Devon was the lead developer on this project and we worked closely together for approximately three months.\n\nHe was always very respectful and understanding of our questions and concerns, as neither myself, nor our Association’s manager, had any experience with Drupal. Devon took extra time to explain things to us and even provided us with some very useful guides (that he wrote) to assist us in continuing on with the website once he moved on to the next client.\n\nDevon has a very positive approach to his work and enthusiastically offered up ideas and suggestions to make our site an even better experience. The little things matter to him and I am grateful that he was that fussy. I would highly recommend Devon for any website development job.`,
    name: "Nancy Irvine",
    role: "President, Canadian Association of Movers",
  },
  {
    quote: `Devon was a hard-working student who always went above and beyond any project requirements to produce high quality professional looking web sites for all the courses that I was an instructor of Devon’s. Some of Devon’s projects such as his Left for Dead JavaScript memory game were some of the best student projects I had ever seen from a student in my 7 years of teaching.\n\nIn addition to his high-quality projects, Devon was always a positive addition to the class, getting along well with all his classmates. His positive attitude helped him work well as part of a team for several group successful projects throughout the program.\n\nDevon’s professionalism was also excellent. Always present and on time for all classes and with all assignments and major projects completed by their assigned deadlines. Overall Devon was one of the top students of his intake. I am positive that with his positive attitude and the high quality of work that he produces that he will be successful in any professional work environment. I am happy to give Devon my full recommendation.`,
    name: "Michael Whyte",
    role: "Program Head, BCIT Front-End Web Developer Program",
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [height, setHeight] = useState<number | undefined>(undefined);
  const slideRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((i) => {
      if (newDirection === 1) return i === testimonials.length - 1 ? 0 : i + 1;
      if (newDirection === -1) return i === 0 ? testimonials.length - 1 : i - 1;
      return i;
    });
  };

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) paginate(1);
    else if (info.offset.x > 50) paginate(-1);
  };

  useLayoutEffect(() => {
    if (slideRef.current) {
      setHeight(slideRef.current.offsetHeight);
    }
  }, [index]);

  return (
    <div
      className="relative mx-auto max-w-[1300px] rounded-2xl p-2 py-4 text-center shadow-lg md:my-12 md:p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4 flex items-center justify-center gap-4">
        <button
          aria-label="Previous testimonial"
          onClick={() => paginate(-1)}
          className="rounded-full p-2 transition-colors hover:bg-neutral-800"
        >
          <ChevronLeft size={28} className="text-white" />
        </button>
        <motion.div
          className="relative flex flex-1 items-center justify-center overflow-hidden"
          animate={{ height: height || "auto" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ minHeight: 40 }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              ref={slideRef}
              custom={direction}
              initial={{
                x: direction === 1 ? 300 : -300,
                opacity: 0,
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
              }}
              animate={{
                x: 0,
                opacity: 1,
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
              }}
              exit={{
                x: direction === 1 ? -300 : 300,
                opacity: 0,
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              className="cursor-grab"
              style={{ position: "absolute", left: 0, top: 0, width: "100%" }}
            >
              <blockquote className="text-neutral mb-4 leading-7 text-neutral-100 opacity-60 md:text-sm">
                {testimonials[index].quote.split(/\n+/).map((para, i) => (
                  <p key={i} className="mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </blockquote>
              <div className="text-highlight-green font-semibold">
                {testimonials[index].name}
              </div>
              <div className="text-sm text-neutral-400">
                {testimonials[index].role}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <button
          aria-label="Next testimonial"
          onClick={() => paginate(1)}
          className="rounded-full p-2 transition-colors hover:bg-neutral-800"
        >
          <ChevronRight size={28} className="text-white" />
        </button>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`inline-block h-2 w-2 rounded-full ${i === index ? "bg-highlight-green" : "bg-neutral-700"}`}
          />
        ))}
      </div>
    </div>
  );
}
