import FeatureBg from "@/public/feature.svg";
import Z from '@/public/z.svg';
import { ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';
import Section from './Section';
import H3 from '@/app/ui/atoms/H3';
import Link from 'next/link';

function Hero(): JSX.Element {
  return (
    <Section>
      <div className="flex flex-col space-y-3 pt-5 mt-3 md:pt-5 md:mt-3 lg:pt-0 lg:mt-0">
        <div className="flex flex-col space-y-8 md:flex md:flex-col md:space-y-8 lg:flex lg:flex-row lg:space-x-8 lg:items-center">
          <div className="flex flex-col w-full items-center space-y-5 mx-0 md:flex md:flex-col md:w-4/5 md:mx-auto lg:items-start lg:mx-0 lg:flex lg:flex-col lg:space-y-5 lg:w-1/2">
            <H3
              content="Celebrate, Connect and Create Memories"
              className="w-full text-center lg:text-left md:w-full md:text-center lg:w-3/4"
            />

            <p className="w-full md:w-full font-BricolageGrotesqueMedium text-center lg:text-left lg:w-[89%] text-OWANBE_ASH text-lg">
            Join Ostivities and make every celebration unforgettable! Connect, discover, 
            and create lasting memories with ease. Dive into a world of vibrant events today!
            </p>
            <Link
              href="/Dashboard"
              className=" bg-OWANBE_SECONDARY hover:!bg-OWANBE_PRY transition-all duration-300 rounded-full hover:!text-white text-white px-8 py-2"
            >
              <span className=" pr-1">Explore Events</span> <ArrowRightOutlined />
            </Link>
          </div>
          <div className="w-full md:w-full lg:w-1/2">
            <Image src={FeatureBg} alt="hero" className="ms-1" />
          </div>
        </div>
        <div className="hidden md:hidden lg:block lg:w-2/2 text-left pt-8 lg:pt-0">
        <Image src={Z} alt="hero" className="ms-0 pt-8 md:pt-8 lg:pt-0" />
        </div>
      </div>
    </Section>
  );
}

export default Hero;
