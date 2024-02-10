import React from "react";
import { Card, Button } from "antd";

interface CustomCardProps {
  imageUrl: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ imageUrl }) => {
  return (
    <Card
      hoverable
      style={{
        width: 350,
        height: 150,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 10,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <Button type="primary" style={{ width: "100%", textAlign: "left" }}>
          Learn More
        </Button>
      </div>
    </Card>
  );
};

export default CustomCard;
