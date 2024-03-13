'use client';

import { Label } from '@/app/components/typography/Typography';
import FormProvider from '@/app/contexts/form-context/FormContext';
import { NAV_LINKS } from '@/app/utils/data';
import { IDashboard, INavLinks } from '@/app/utils/interface';
import EventCreation from '@/public/EventCreation.svg';
import Hamburger from '@/public/hamburger.svg';
import OwanbeLogo from '@/public/owanbe.svg';
import {
  BellFilled,
  CompassOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Badge, Dropdown, Layout, Menu, Space, theme } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { isValidElement, useState } from 'react';

const items1: MenuProps['items'] = [
  {
    label: 'Create Event',
    key: 'create-event',
  },
  {
    label: 'Event created',
    key: 'event-create',
  },
];

const items2: MenuProps['items'] = [
  { icon: CompassOutlined, title: 'Discovery', link: '/Dashboard' },
  { icon: EventCreation, title: 'Events Creation', link: '/Dashboard/events' },
  { icon: SettingOutlined, title: 'Settings', link: '/Dashboard/settings' },
].map((icon) => {
  const key = icon.link;

  return {
    key: `${key}`,
    icon:
      icon.title === 'Events Creation' ? (
        <Image src={icon.icon} alt="event creation" />
      ) : (
        React.createElement(icon.icon)
      ),
    label: icon.title,

    // HANDLES SUB MENU ON SIDE BAR
    // children: new Array(4).fill(null).map((_, j) => {
    //   const subKey = index * 4 + j + 1;
    //   return {
    //     key: subKey,
    //     label: `option${subKey}`,
    //   };
    // }),
  };
});

const items: MenuProps['items'] = [
  {
    label: <Label className="cursor-pointer" content="Help" />,
    key: 'help',
  },
  {
    label: <Label className="cursor-pointer" content="Sign out" />,
    key: 'sign-',
  },
];

function DashboardLayout({
  children,
  title,
  steppers,
  extraComponents,
}: IDashboard): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();

  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(true);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onClick: MenuProps['onClick'] = (e: any) => {
    router.push(e?.key);
  };

  const pathCheck =
    pathname.split('/').includes('settings') ||
    pathname.split('/').includes('events');

  // console.log(pathCheck);

  return (
    <FormProvider>
      <Layout
        style={{ height: '100vh', fontFamily: 'BricolageGrotesqueMedium' }}
      >
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: 20,
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
            borderBottom: '2px solid #d0d4d4',
          }}
        >
          <div className="demo-logo flex flex-row items-center space-x-12">
            <Image
              src={OwanbeLogo}
              alt="Owanbe Logo"
              style={{ height: '40px' }}
              className="w-[110px] cursor-pointer"
            />

            <Image
              src={Hamburger}
              alt="Owanbe Logo"
              style={{ width: '40px', height: '35px' }}
              className="cursor-pointer"
              onClick={() => setCollapsed(!collapsed)}
            />
          </div>
          {!pathCheck && (
            <div className="flex flex-row items-center space-x-8">
              {NAV_LINKS.map((link: INavLinks) => (
                <Link
                  href={link.link}
                  key={link.link + link.name}
                  className="font-BricolageGrotesqueMedium font-medium text-base text-black"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          <Space
            direction="horizontal"
            className="space-x-8 items-center justify-center"
            align="center"
            size={'small'}
          >
            <div className="mt-5">
              <Badge count={1}>
                <BellFilled
                  className="cursor-pointer"
                  style={{
                    fontSize: '26px',
                    color: '#8C95A1',
                  }}
                />
              </Badge>
            </div>
            <Dropdown menu={{ items }} trigger={['click', 'hover']}>
              <Avatar
                size={40}
                style={{
                  background: '#E20000',
                  fontFamily: 'BricolageGrotesqueMedium',
                  cursor: 'pointer',
                }}
              >
                IR
              </Avatar>
            </Dropdown>
          </Space>
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{
              background: colorBgContainer,
              overflowY: 'scroll',
              fontFamily: 'BricolageGrotesqueMedium !important',
              paddingTop: '60px',
            }}
            breakpoint="lg"
            trigger={null}
            collapsible
            collapsed={!collapsed}
            zeroWidthTriggerStyle={{
              background: 'green !important',
              fontFamily: 'BricolageGrotesqueMedium !important',
            }}
            onBreakpoint={(broken: any) => {
              // console.log(broken, 'broken');
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                borderRight: 0,
                fontFamily: 'BricolageGrotesqueMedium !important',
              }}
              items={items2}
              onClick={onClick}
              selectedKeys={['/Dashboard/']}
            />
          </Sider>
          <Layout
            style={
              {
                // paddingBottom: '2rem',
              }
            }
          >
            <Header
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: 20,
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
              }}
            >
              <div className="demo-logo w-full">
                <h5 className="w-full font-BricolageGrotesqueRegular font-normal text-black text-3xl">
                  {title}
                </h5>
              </div>

              {title === 'Events Creation' && (
                <Menu
                  theme="light"
                  mode="horizontal"
                  defaultSelectedKeys={['create-event']}
                  items={items1}
                  className="w-1/2 justify-end font-BricolageGrotesqueMedium"
                />
              )}
            </Header>

            <Layout
              style={{
                padding: '0 30px 30px',
                overflow: 'scroll',
              }}
            >
              <Content className="flex flex-col space-y-8 py-8">
                {steppers && (
                  <div
                    className={`mx-auto text-center flex flex-row items-center justify-center pb-3 ${
                      !isValidElement(steppers) ? 'hidden' : ''
                    }`}
                  >
                    {steppers}
                  </div>
                )}
                {extraComponents && (
                  <div className="mb-[1.375rem]">{extraComponents}</div>
                )}
                <div
                  style={{
                    borderRadius: '30px',
                    border: '1px solid #E5E5E5',
                    boxShadow: '0px 8px 24px 0px #00000014',
                    background: 'linear-gradient(0deg, #FFFFFF, #FFFFFF)',
                  }}
                  className=" px-12 py-16"
                >
                  <div>{children}</div>
                </div>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </FormProvider>
  );
}

export default DashboardLayout;
