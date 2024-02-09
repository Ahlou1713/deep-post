import { ConfigProvider } from "antd";
import { ReactNode, useState } from "react";

interface Props {
    children: ReactNode
}

const AppThemeProvider = ({children}: Props) => {
    const [currentTheme, setCurrentTheme] = useState('Light');
    const lightTheme = {
        colorPrimary: 'green',
        colorTextBase: 'black',
        colorTextLightSolid: 'white'
    }
    const darkTheme = {
        colorPrimary: 'black',
        colorTextBase: 'black',
        colorTextLightSolid: 'white'
    }
    return (
    <ConfigProvider
      theme={{
        token: currentTheme === 'Light' ? lightTheme: darkTheme,
        components: {
          Button: {
            colorPrimary: "#00b96b",
            algorithm: true, // Enable algorithm
          },
          Input: {
            colorPrimary: "#00b96b",
            algorithm: true, // Enable algorithm
          },
          Progress: {
            colorPrimary: '#00b96b',
          }
        },
      }}
    >{children}</ConfigProvider>
  );
};

export default AppThemeProvider;
