import { mission_vision } from "@/constants/mission-vission";

export default function MissionVisionCard() {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 py-6 ">
      {mission_vision.map((item) => {
        return (
          <div className=" px-3 py-4 space-y-3 pl-4  ">
            <h1 className=" bold-40 text-center ">{item.title}</h1>
            <p className="text-justify font-light leading-relaxed p-4">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
