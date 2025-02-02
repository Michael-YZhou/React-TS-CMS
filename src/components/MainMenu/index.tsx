import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem("Option 1", "/comp1", <PieChartOutlined />),
//   getItem("Option 2", "/comp2", <DesktopOutlined />),
//   getItem("User", "page3", <UserOutlined />, [
//     getItem("Tom", "3"),
//     getItem("Bill", "4"),
//     getItem("Alex", "5"),
//   ]),
//   getItem("Team", "page4", <TeamOutlined />, [
//     getItem("Team 1", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Files", "9", <FileOutlined />),
// ];

const items: MenuItem[] = [
  { label: "Option 1", key: "/comp1", icon: <PieChartOutlined /> },
  { label: "Option 2", key: "/comp2", icon: <DesktopOutlined /> },
  {
    label: "User",
    key: "page3",
    icon: <UserOutlined />,
    children: [
      { label: "Tom", key: "3" },
      { label: "Bill", key: "4" },
      { label: "Alex", key: "5" },
    ],
  },
  {
    label: "Team",
    key: "page4",
    icon: <TeamOutlined />,
    children: [
      { label: "Team 1", key: "6" },
      { label: "Team 2", key: "8" },
    ],
  },
  { label: "Files", key: "9", icon: <FileOutlined /> },
];

const MainMenu: React.FC = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const navigateTo = useNavigate();

  const handleMenuClick = (e: { key: string }) => {
    //console.log(e.key);
    navigateTo(e.key);
  };

  const handleOpenChange = (openKeys: string[]) => {
    //console.log(openKeys);
    setOpenKeys(openKeys.splice(openKeys.length - 1));
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["/comp1"]}
      mode="inline"
      items={items}
      onClick={handleMenuClick}
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
    />
  );
};

export default MainMenu;
