import React from "react";
import { Avatar, Typography } from "antd";

const { Title, Text } = Typography;

interface JudgeProps {
  imageUrl: string;
  name: string;
  skills: string;
}

const Judge: React.FC<JudgeProps> = ({ imageUrl, name, skills }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "#181B23",
      }}
    >
      <Avatar src={imageUrl} size={64} />
      <div style={{ marginLeft: 20 }}>
        <Title level={5} style={{ color: "white" }}>
          {name}
        </Title>
        <Text style={{ color: "#E84234" }}>{skills}</Text>
      </div>
    </div>
  );
};

export default Judge;
