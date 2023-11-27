import { Heading3, Paragraph } from "@/app/components/typography/Typography";
import theme from "@/app/theme/theme.config";
import { ConfigProvider } from "antd";
import OwanbeWebLayout from "./components/WebLayout/OwanbeWebLayout";
import Advantages from "./components/sections/Advantages";
import AdvantagesTwo from "./components/sections/AdvantagesTwo";
import ComingSoon from "./components/sections/ComingSoon";
import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <OwanbeWebLayout>
      <ConfigProvider
        theme={{
          ...theme,
          components: {
            Typography: {
              fontFamily: "BricolageGrotesqueMedium",
            },
          },
        }}
      >
        <Hero />
        <Features />
        <Advantages />
        <AdvantagesTwo />
        <ComingSoon />
      </ConfigProvider>
    </OwanbeWebLayout>
  );
}
