"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
export function CeoQuote() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView]);
  return (
    <motion.figure
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="mx-auto text-center"
    >
      <svg
        className="w-10 h-10 mx-auto mb-3 mt-20 text-gray-400 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <blockquote>
        <p className="text-2xl italic font-medium  text-gray-900 dark:text-white">
          "Building on seven years of successful software development, ATC
          confidently approaches future needs. Our highly skilled engineers,
          trained in international quality standards, ensure flawless execution
          and uncompromising data security. We empower organizations through
          technology and strive for global leadership, fueled by stakeholder
          support and a commitment to innovation."
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700 mb-20">
          <cite className="pe-3 font-medium text-gray-900 dark:text-white">
            Dr. Mohammad Atikur Rahman
          </cite>
          <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
            MD & CEO at ATC
          </cite>
        </div>
      </figcaption>
    </motion.figure>
  );
}
