import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout, theme } from "antd";
import MainMenu from "@/components/MainMenu";

const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Left side bar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical">Logo</div>
        <MainMenu />
      </Sider>
      {/* Right Content Area*/}
      <Layout>
        {/* Right Header */}
        <Header style={{ paddingLeft: "16px", background: colorBgContainer }}>
          <Breadcrumb style={{ lineHeight: "64px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        {/* Right Canvas */}
        <Content style={{ margin: "16px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* Display Page Content */}
            <Outlet />
          </div>
        </Content>
        {/* Right Footer */}
        <Footer
          style={{ textAlign: "center", padding: "0px", lineHeight: "48px" }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
