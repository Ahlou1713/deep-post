import { Avatar, Flex } from "antd";
import { Typography } from "antd";
import React, { ReactNode } from "react";

const { Title, Text } = Typography;

interface Props {
    children: ReactNode,
}

const Judge = ({children}: Props) => {
  return (
    <Flex>
      <Avatar></Avatar>
      <Title>{children}</Title>
      <Text></Text>
    </Flex>
  );
};

export default Judge;
