import React from "react";
import { Heading3, Paragraph } from "../typography/Typography";
import Section from "./Section";

function ComingSoon(): JSX.Element {
  return (
    <Section>
      <div className="mx-auto hidden md:hidden lg:block xl:block">
        <div className="w-full coming-soon mx-auto flex flex-row items-center">
          <div className="flex flex-col text-left space-y-3 w-2/3 items-start pl-16">
            <Heading3
              content=""
              className="w-3/4 text-left text-white"
            />
            <Paragraph
              content=""
              className="w-3/4 text-white text-lg text-left"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ComingSoon;
