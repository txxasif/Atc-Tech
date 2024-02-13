"use client";
import { facilities } from "@/constants/facilities";
import {
  IconTickCircle,
  IconIndustry,
  IconServices,
  IconProducts,
} from "@/icons/icons";
import Image from "next/image";
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
  return (
    <div className="border p-2  rounded-lg   shadow-2xl pb-3">
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
    </div>
  );
}

export function Facilities() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3 gap-4">
      {facilities.map((item) => {
        return (
          <FacilitiesCard
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
