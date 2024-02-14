"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { fadeInAnimationVariants } from "@/constants/framer-motion-variants";
const data = [
  "Associate Software Engineer",
  "Sr. Software Engineer",
  "Network Engineer",
  "Database Engineer",
  "Intern Engineer",
  "SQA Engineer",
];
export function CareerCard({ text, idx }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ type: "spring", stiffness: 100 }}
      className="border font-semibold border-solid px-4 py-4 rounded-md shadow-sm hover:font-bold hover:text-[17px] border-b hover: text-[#0F79B9] transition-all"
    >
      {text}
    </motion.div>
  );
}
export function Career() {
  return (
    <section className="w-full">
      <h1 className="text-center text-black  mb-8 bold-40">Career At ATC</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {data.map((c, idx) => {
          return <CareerCard key={idx} text={c} idx={idx} />;
        })}
      </div>
    </section>
  );
}
