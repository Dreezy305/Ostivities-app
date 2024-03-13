import OwanbeWebLayout from '@/app/components/WebLayout/OwanbeWebLayout';
import Advantages from '@/app/components/sections/Advantages';
import AdvantagesTwo from '@/app/components/sections/AdvantagesTwo';
import ComingSoon from '@/app/components/sections/ComingSoon';
import Faqs from '@/app/components/sections/Faqs';
import Features from '@/app/components/sections/Features';
import Hero from '@/app/components/sections/Hero';
import theme from '@/app/theme/theme.config';
import { ConfigProvider } from 'antd';

export default function Home() {
  return (
    <OwanbeWebLayout>
      <ConfigProvider
        theme={{
          ...theme,
          hashed: false,
          components: {
            Typography: {
              fontFamily: 'BricolageGrotesqueMedium',
            },
          },
        }}
      >
        <Hero />
        <Features />
        <Advantages />
        <AdvantagesTwo />
        <Faqs />
        <ComingSoon />
      </ConfigProvider>
    </OwanbeWebLayout>
  );
}
