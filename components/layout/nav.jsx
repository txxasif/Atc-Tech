"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants/constants";
import Button from "../shared/button";
import { Collapse, Typography, IconButton } from "@material-tailwind/react";
import { useState } from "react";

function NavListLMobile() {
  return (
    <ul className="my-2 flex flex-col gap-2 border-x border-b pb-5 rounded-sm shadow-lg">
      {/* hidden h-full gap-12 lg:flex  */}
      {navLinks.map((link) => (
        <Link
          key={link.key}
          href={link.href}
          className="regular-16  flexCenter cursor-pointer pb-1.5 text-blue-600 hover:text-gray-50 transition-all hover:font-bold"
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
}
function NavList() {
  return (
    <ul className="hidden  h-full my-2 lg:flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 rounded-lg ">
      {/* hidden h-full gap-12 lg:flex  */}
      {navLinks.map((link) => (
        <Link
          key={link.key}
          href={link.href}
          className="font-semibold p-1  underline-offset-4  flexCenter cursor-pointer pb-1.5 text-[#0F79B9] hover:text-gray-50 transition-all hover:font-bold hover:text-[18px]"
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="max-container padding-container max-w-screen-xl px-6 ">
      <div className="flexBetween  relative z-30 ">
        <Link href="/">
          <Image
            className="object-cover lg:w-64 w-36"
            src="/atc.svg"
            alt="logo"
            width={1000}
            height={1000}
          />
        </Link>
        <NavList />
        <IconButton
          variant="text"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? (
            <Image
              src="/assets/icons/cross.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer lg:hidden"
              onClick={() => setOpen(true)}
            />
          ) : (
            <Image
              src={"/assets/icons/menu.svg"}
              alt="menu-close"
              width={32}
              height={32}
              className="inline-block cursor-pointer lg:hidden"
            />
          )}
        </IconButton>
      </div>
      <Collapse open={isOpen}>
        <NavListLMobile />
      </Collapse>
    </nav>
  );
};

export default Navbar;
