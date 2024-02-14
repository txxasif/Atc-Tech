"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { facilities } from "@/constants/facilities";

import Image from "next/image";
import { FacilitiesCard } from "./facilities-card";

export function Facilities() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3 gap-4">
      {facilities.map((item, idx) => {
        return (
          <FacilitiesCard
            key={idx}
            src={item.src}
            title={item.title}
            description={item.description}
            list={item.list}
          />
        );
      })}
    </div>
  );
}
