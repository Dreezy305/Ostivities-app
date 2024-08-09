"use client";

import Sider from "antd/es/layout/Sider";

import { useRouter } from "next/navigation";

import { Menu, MenuProps, theme } from "antd";
import Image from "next/image";

import EventCreation from "@/public/EventCreation.svg";

import { CompassOutlined, FieldTimeOutlined, FileAddOutlined, PlusCircleOutlined, QuestionCircleOutlined, QuestionOutlined, SettingOutlined } from "@ant-design/icons";
import { createElement } from "react";
import React from "react";

const items2: MenuProps['items'] = [
  { icon: CompassOutlined, title: 'Discovery', link: '/Dashboard' },
  { icon: PlusCircleOutlined, title: 'Create Event', link: '/Dashboard/' },
  { icon: SettingOutlined, title: 'Settings', link: '/Dashboard/settings' },
  { icon: FieldTimeOutlined, title: 'Coming Soon', link: '/Dashboard/coming-soon' },
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

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  const router = useRouter();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onClick: MenuProps["onClick"] = (e: any) => {
    router.push(e?.key);
  };

  return (
    <Sider
      width={200}
      style={{
        background: colorBgContainer,
        overflowY: "scroll",
        fontFamily: "BricolageGrotesqueMedium !important",
        paddingTop: "60px",
      }}
      breakpoint="lg"
      trigger={null}
      collapsible
      collapsed={collapsed}
      zeroWidthTriggerStyle={{
        background: "green !important",
        fontFamily: "BricolageGrotesqueMedium !important",
      }}
      onBreakpoint={(broken: any) => {
        console.log(broken, "broken");
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{
          height: "100%",
          borderRight: 0,
          fontFamily: "BricolageGrotesqueMedium !important",
        }}
        items={items2}
        onClick={onClick}
      />
    </Sider>
  );
};

export default Sidebar;
