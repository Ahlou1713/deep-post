import { ConfigProvider } from "antd";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const AppThemeProvider = ({ children }: Props) => {
  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Typography: {
            colorSuccess: '#0D9D58',
            fontSize: 20
          }
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AppThemeProvider;
