import { Avatar } from "antd";
import { Typography } from "antd";
import React, { ReactNode } from "react";
import MyButton from "./MyButton";

const { Title, Text } = Typography;

interface Props {
  children: ReactNode;
}

const OverlayItem = ({ children }: Props) => {
  return (
    <>
      <Avatar></Avatar>
      <Title>{children}</Title>
      <Text></Text>
      <MyButton size="small">Add</MyButton>
    </>
  );
};

export default OverlayItem;
