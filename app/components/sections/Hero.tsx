import LaptopHero from "@/public/laptop.png";
import Z from "@/public/z.svg";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import React from "react";
import { Heading3, Paragraph } from "../typography/Typography";
import Section from "./Section";

function Hero(): JSX.Element {
  return (
    <Section>
      <div className="flex flex-col space-y-3">
        <div className="flex flex-row space-x-8 items-center">
          <div className="flex flex-col space-y-5 w-1/2">
            <Heading3
              content="Celebrate, Connect and Create Memories"
              className="w-3/4"
            />
            <Paragraph
              content="Embark on a journey with Ostivities — where celebrations thrive! Connect, discover, and create lasting memories. Join now for a vibrant experience!"
              className="w-[86%] text-OWANBE_ASH text-lg"
            />
            <Button className="get-started space-x-2 active:overflow-hidden">
              <span className="overflow-hidden">Get Started</span>{" "}
              <ArrowRightOutlined />
            </Button>
          </div>
          <div className="w-1/2">
            <Image src={LaptopHero} alt="hero" className="ms-1" />
          </div>
        </div>

        <div className="w-1/2 text-left">
          <Image src={Z} alt="hero" className="ms-0" />
        </div>
      </div>
    </Section>
  );
}

export default Hero;
