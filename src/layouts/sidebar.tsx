import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { CodeOutlined, HomeFilled, UserOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import UserAvatar from "../components/UserAvatar";

const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  backgroundColor: '#16171A',
  color: '#fff'
};

const menuStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  backgroundColor: '#16171A',
};

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

interface Props {
  children: String[];
}

const SideBar = ({ children }: Props) => {
  const items: MenuItem[] = [
    getItem("Home", "1", <HomeFilled />),
    getItem("Account", "2", <UserOutlined />),
    getItem(
      "My Hackathons",
      "3",
      <CodeOutlined />,
      children.map((hackathon, index) => getItem(hackathon, index + 4))
    ),
  ];

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh", background: colorBgContainer }}>
      <Sider
      style={siderStyle}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          style={menuStyle}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
        <UserAvatar>Alla Eddine Rakik</UserAvatar>
      </Sider>
      <Content style={{ background: '#16171A' }}></Content>
    </Layout>
  );
};

export default SideBar;
