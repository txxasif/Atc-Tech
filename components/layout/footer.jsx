import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerContactInfo, footerLinks, socials } from "@/constants/constants";

const Footer = () => {
  return (
    <footer className="flexCenter  mt-20  text-white bg-[#001C38] py-5">
      <div className="padding-container max-container flex w-full flex-col gap-8">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image
              className="object-cover lg:w-64 w-36"
              src="/atc.svg"
              alt="logo"
              width={1000}
              height={1000}
            />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {footerLinks.map((column) => (
              <FooterColumn key={column.title} title={column.title}>
                <ul className="regular-14 flex flex-col gap-4">
                  {column.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={footerContactInfo.title}>
                {footerContactInfo.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap ">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumn title={socials.title}>
                <ul className="regular-14 flex gap-4">
                  {socials.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image
                        className="t"
                        src={link}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border w-full" />
        <p className="regular-14 w-full text-center pb-5">
          &copy; ATC Tech Limited | All rights reserved 2024
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
