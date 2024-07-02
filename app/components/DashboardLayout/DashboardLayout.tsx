'use client';

import { Label } from '@/app/components/typography/Typography';
import FormProvider from '@/app/contexts/form-context/FormContext';
import Button from '@/app/ui/atoms/Button';
import { NAV_LINKS } from '@/app/utils/data';
import { IDashboard, INavLinks } from '@/app/utils/interface';
import EventCreation from '@/public/EventCreation.svg';
import Hamburger from '@/public/hamburger.svg';
import OwanbeLogo from '@/public/owanbe.svg';
import {
  BellFilled,
  CompassOutlined,
  SettingOutlined,
  CaretDownFilled,
  QuestionCircleOutlined,
  FileAddOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Badge, Dropdown, Layout, Menu, Space, theme } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { isValidElement, useState } from 'react';
import useLocalStorage from 'use-local-storage';

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
  { icon: FileAddOutlined, title: 'Event Creation', link: '/Dashboard/events' },
  { icon: SettingOutlined, title: 'Settings', link: '/Dashboard/settings' },
  { icon: QuestionCircleOutlined, title: 'Coming Soon', link: '/Dashboard/' },
].map((item) => {
  const key = item.link;

  return {
    key: `${key}`,
    icon: React.createElement(item.icon),
    label: item.title,

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

const items3: MenuProps['items'] = [
  { icon: CompassOutlined, title: 'Discovery', link: '/Dashboard' },
].map((item) => {
  const key = item.link;

  return {
    key: `${key}`,
    icon: React.createElement(item.icon),
    label: item.title,
  };
});



function DashboardLayout({
  children,
  title,
  steppers,
  extraComponents,
}: IDashboard): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();


  const items: MenuProps['items'] = [
    {
      label: <Label className="cursor-pointer" content="Help" />,
      key: 'help',
    },
    {
      label: <Label className="cursor-pointer" content="Sign out" />,
      key: 'sign-',
      onClick:() => router.push("/login")
    },
  ];
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useLocalStorage<string>('sidebar', 'false');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const endpoints = ['events', 'settings'];

  const index = pathname.split('/')[2];

  const confirmIndex = endpoints.includes(index);

  const path = confirmIndex ? `/${index}` : '';

  const [currentPah, setCurrentPah] = useState(`/Dashboard${path}`);

  const onClick: MenuProps['onClick'] = (e: any) => {
    setCurrentPah(e?.key);
    router.push(e?.key);
  };

  const pathCheck =
    pathname.split('/').includes('settings') ||
    pathname.split('/').includes('events');

  const toggleSidebar = () => {
    console.log(collapsed);
    setCollapsed(collapsed === 'true' ? 'false' : 'true');
  };

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
              onClick={toggleSidebar}
            />
          </div>
          {!isLoggedIn && (
            <>
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
              <div className="flex flex-row items-end justify-end space-x-3">
                <>
                  <Button
                    variant="outline"
                    label="Sign in"
                    onClick={() => router.push('/login')}
                  />
                  <Button
                    label="Sign Up"
                    onClick={() => router.push('/signup')}
                  />
                </>
              </div>
            </>
          )}
          {
            isLoggedIn && (
              <>
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
                    <div className="flex-center gap-4 cursor-pointer">
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
                      <div className="h-fit flex gap-4">
                        <div className="flex flex-col justify-start">
                          <h3 className=" text-sm text-OWANBE_TABLE_CELL">
                            Onome Rose
                          </h3>
                          <span className="text-xs text-[#8C95A1]">User</span>
                        </div>
                        <CaretDownFilled />
                      </div>
                    </div>
                  </Dropdown>
                </Space>
              </>
            )
          }


        </Header>
        <Layout>
          <Sider
            width={200}
            style={{
              background: colorBgContainer,
              // overflowY: 'scroll',
              fontFamily: 'BricolageGrotesqueMedium !important',
              paddingTop: '60px',
            }}
            breakpoint="lg"
            trigger={null}
            collapsible
            collapsed={collapsed === 'false' ? false : true}
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
                border: 0,
                fontFamily: 'BricolageGrotesqueMedium !important',
              }}
              items={isLoggedIn ? items2 : items3}
              onClick={onClick}
              selectedKeys={[currentPah]}
              className={`${collapsed === 'true' ? 'collapsed-side-nav' : 'side-nav'
                }`}
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
                padding: '0 30px',
                overflowY: 'scroll',
              }}
            >
              <Content className="flex flex-col space-y-8 py-8">
                {steppers && (
                  <div
                    className={`mx-auto text-center flex flex-row items-center justify-center pb-3 ${!isValidElement(steppers) ? 'hidden' : ''
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
                  className="px-12 py-16"
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
