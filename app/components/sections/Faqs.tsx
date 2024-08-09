import React from "react";
import Accordion from "../Accordion/Accordion";
import { Heading3, Small } from "../typography/Typography";
import Section from "./Section";

function Faqs(): JSX.Element {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <Section>
      <div
        className="flex flex-col space-y-5 md:w-4/5 lg:w-full xl:w-full md:mx-auto lg:mx-0 xl:mx-0 h-auto md:h-auto lg:h-[700px] xl:h-[700px]"
        // style={{ height: "700px" }}
      >
        <div className="flex flex-col w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
          <Small
            content="FAQ"
            className="text-OWANBE_PRY text-lg tracking-wider uppercase"
          />
          <Heading3
            content="Frequently asked questions"
            className="w-full md:w-full lg:w-4/4 xl:w-3/4 capitalize"
          />
        </div>
        <Accordion />
      </div>
    </Section>
  );
}

export default Faqs;
