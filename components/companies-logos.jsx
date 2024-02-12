import { socials } from "@/constants/constants";
import Link from "next/link";
import Image from "next/image";
import { RevealPopUp } from "./shared/reveal";
export default function CompanyLogos() {
  return (
    <ul className="regular-14 flex gap-4 text-gray-30">
      {socials.links.map((link) => (
        <RevealPopUp>
          <Link href="/" key={link}>
            <Image src={link} alt="logo" width={100} height={100} />
          </Link>
        </RevealPopUp>
      ))}
    </ul>
  );
}
