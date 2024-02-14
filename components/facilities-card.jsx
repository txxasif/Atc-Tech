"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  IconTickCircle,
  IconIndustry,
  IconServices,
  IconProducts,
} from "@/icons/icons";
import { RevealPopUp } from "./shared/reveal";
export function SectionIcon({ type, className }) {
  if (type === "Industries") {
    return <IconIndustry className={className} />;
  } else if (type === "Products") {
    return <IconProducts className={className} />;
  } else {
    return <IconServices className={className} />;
  }
}
export function FacilitiesCard({ src, title, description, list }) {
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
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="border p-2  rounded-lg   shadow-2xl pb-3"
    >
      <div className="flex justify-center pt-6">
        <SectionIcon className="w-[60px] h-[60px]" type={title} />
      </div>
      {/* Title and Description */}
      <div className="p-3 space-y-4 md:pb-6 md:h-44 ">
        <h2 className="text-4xl  text-center font-bold  p-2">{title}</h2>
        <p className="regular-14 text-justify tracking-tight xl:regular-16 text-thin opacity-90 ">
          {description}
        </p>
      </div>
      <div className="p-2 pt-10 ">
        <ul className="space-y-1">
          {list.map((text, idx) => (
            <li
              className="bold-16 flex  space-x-2 space-y-2 items-center"
              key={idx}
            >
              <IconTickCircle className="w-4 h-4 text-blue-900 mt-2  " />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
