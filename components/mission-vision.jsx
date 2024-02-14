"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { mission_vision } from "@/constants/mission-vission";

export default function MissionVisionCard() {
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
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="grid  grid-cols-1 lg:grid-cols-2 py-6 "
    >
      {mission_vision.map((item, idx) => {
        return (
          <div key={idx} className=" lg:my-16   md:px-3 py-4 space-y-3 lg:pl-4 rounded-lg lg:ml-5 flex flex-col    ">
            <h1 className=" bold-40 text-center ">{item.title}</h1>
            <p className="text-justify font-light leading-relaxed lg:p-4">
              {item.description}
            </p>
          </div>
        );
      })}
    </motion.div>
  );
}
