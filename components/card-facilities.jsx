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
    <div className="border p-2 bg-green-50 rounded-lg  text-white shadow-2xl pb-3">
      <div className="flex justify-center">
        <SectionIcon className="w-[80px] h-[80px]" type={title} />
      </div>
      {/* Title and Description */}
      <div className="p-2 space-y-2 pb-6">
        <h2 className="text-4xl  text-center font-bold underline p-2">
          {title}
        </h2>
        <p className="regular-14 text-justify tracking-tight xl:regular-16 text-thin opacity-90 ">
          {description}
        </p>
      </div>
      <div className="p-2 ">
        <ul className="space-y-1">
          {list.map((text, idx) => (
            <li className="bold-16 flex  space-x-2 items-center" key={idx}>
              <IconTickCircle className="w-4 h-4" />
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
    <div className="grid grid-cols-1 md:grid-cols-3 py-3 gap-3">
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
