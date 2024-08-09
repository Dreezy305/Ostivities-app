import { LEGAL, NEWSLETTER, SUPPORT } from "@/app/utils/data";
import Instagram from "@/public/Instagram.svg";
import Linkedln from "@/public/LinkedIn.svg";
import Twitter from "@/public/X.svg";
import Whatsapp from "@/public/WhatsApp.svg";
import Mail from "@/public/envelope.svg";
import OwanbeLogo from "@/public/owanbe.svg";
import Phone from "@/public/phone.svg";
import { Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Heading5, Paragraph, Small } from "../typography/Typography";


function Footer(): JSX.Element {
  return (
    <footer className="overflow-hidden mt-3">
      <div className="container mx-auto py-6">
        <div className="flex flex-col space-y-5 py-4 w-4/5 px-6 md:px-0 xl:px-0 lg:px-0 md:w-4/5 md:mx-auto lg:w-full xl:w-full">
          <div className="grid grid-cols-1 gap-12 md:gap-10 lg:gap-0 xl:gap-0 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 pb-3">
            {/* 1 */}
            <div className="flex flex-col space-y-4">
              <Image src={OwanbeLogo} alt="Owanbe Logo" />
              <div className="flex flex-row items-center space-x-5">
                <Image src={Mail} alt="icon" />
                <Small
                  content={"support@ostivities.com"}
                  className="text-sm lg:text-lg xl:text-lg text-OWANBE_H4 font-light font-BricolageGrotesqueLight"
                />
              </div>

              <div className="flex flex-row items-center space-x-3">
                <Image src={Phone} alt="icon" />
                <Small
                  content={"+234 810 1218 257"}
                  className="text-sm lg:text-lg xl:text-lg text-OWANBE_H4 font-light font-BricolageGrotesqueLight"
                />
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col space-y-3">
              <Heading5 content="Legal" className="" />
              {LEGAL.map((item, index) => (
                <Link
                key={index} // Changed to index for uniqueness
                href={item.link}
                target={item.target}
                rel={item.rel}
                className="text-sm lg:text-lg xl:text-lg text-OWANBE_H4 font-light font-BricolageGrotesqueLight"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* 3 */}
            <div className="flex flex-col space-y-3">
              <Heading5 content="Support" className="" />
              {SUPPORT.map((item, index) => (
                <Link
                key={index} // Changed to index for uniqueness
                href={item.link}
                target={item.target}
                rel={item.rel}
                className="text-sm lg:text-lg xl:text-lg text-OWANBE_H4 font-light font-BricolageGrotesqueLight"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* 4 */}
            <div className="flex flex-col space-y-3">
      <Heading5 content="Newsletter" className="" />
      {NEWSLETTER.map((item, index) => (
        <Link
          key={index} // Changed to index for uniqueness
          href={item.link}
          target={item.target}
          rel={item.rel}
          className="text-sm lg:text-lg xl:text-lg text-OWANBE_H4 font-light font-BricolageGrotesqueLight"
        >
          {item.name}
        </Link>
      ))}
    </div>
          </div>
          <div className="flex flex-row items-center justify-start md:justify-end lg:justify-end xl:justify-end">
            <Space direction="horizontal" size={24}>
            <a href="https://www.instagram.com/ostivities" target="_blank" rel="noopener noreferrer">
  <Image
    src={Instagram}
    alt="Instagram"
    className="cursor-pointer"
  />
</a>
<a href="https://x.com/Ostivities" target="_blank" rel="noopener noreferrer">
  <Image
    src={Twitter}
    alt="Twitter"
    className="cursor-pointer"
  />
</a>
<a href="https://www.linkedin.com/company/ostivities" target="_blank" rel="noopener noreferrer">
  <Image
    src={Linkedln}
    alt="LinkedIn"
    className="cursor-pointer"
  />
</a>
<a href="https://wa.me/2348101218257" target="_blank" rel="noopener noreferrer">
  <Image
    src={Whatsapp}
    alt="Whatsapp"
    className="cursor-pointer"
  />
</a>
            </Space>
          </div>
        </div>
        <hr className="hor-rule" />
        <div className="footer-bottom pt-5">
          <Paragraph
            className="text-center"
            content="Copyright © 2024. Ostivities Technology Limited. All rights reserved. "
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;