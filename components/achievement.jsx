"use client";
import {
  IconClients,
  IconGlobe,
  IconIndustry,
  IconUserSettingsLine,
} from "@/icons/icons";
import { motion, useInView } from "framer-motion";
import { useEffect } from "react";

const data = [
  {
    text: "Client Management Software",
    count: 150,
  },
  {
    text: "ERP Solutions",
    count: 200,
  },
  {
    text: "Clients",
    count: 400,
  },
  {
    text: "Countries",
    count: 3,
  },
];
function AchievementIcon({ index, className }) {
  if (index == 0) {
    return <IconUserSettingsLine className={className} />;
  } else if (index == 1) {
    return <IconIndustry className={className} />;
  } else if (index == 2) {
    return <IconClients className={className} />;
  } else {
    return <IconGlobe className={className} />;
  }
}
function AchievementCard({ text, count, index }) {
  return (
    <div className="border rounded w-full p-8 ">
      <div
        className=" flex justify-between md:justify-center items-center gap-4
    "
      >
        <div>
          <span className="text-3xl ">
            <AchievementIcon
              index={index}
              className="w-20 h-20 text-white bg-[#0F79B9] p-4 rounded-lg "
            />
          </span>
        </div>
        <div className="text-center ">
          <h1 className="font-bold text-4xl text-end lg:text-center">
            {count}+
          </h1>
          <h1 className="font-light text-end lg:text-center "> {text}</h1>
        </div>
      </div>
    </div>
  );
}

export function Achievement() {
  return (
    <section>
      <h1 className="bold-40 text-center pt-16 pb-14 lg:pb-0">Achievement</h1>
      <section className="w-full   md:py-8 gap-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item, idx) => {
          return (
            <AchievementCard
              key={idx}
              count={item.count}
              text={item.text}
              index={idx}
            />
          );
        })}
      </section>
    </section>
  );
}
