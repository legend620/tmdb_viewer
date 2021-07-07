import React from "react";
import { Layout, Menu } from "antd";

import { appRoutes } from "routes/router.config";

const { Header, Content, Footer } = Layout;

const AppLayout = ({ component: Component, history }: any) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
        >
          {appRoutes.map((route, index) => {
            return (
              <Menu.Item key={index} onClick={() => history.push(route.path)}>
                {route.name}
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Component />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default AppLayout;
