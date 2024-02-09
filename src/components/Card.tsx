import React from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

interface CardProps {
  imageUrl: string;
  title: string;
  date: string;
  participants: number;
  prize: string;
}

const MyCard: React.FC<CardProps> = ({
  imageUrl,
  title,
  date,
  participants,
  prize,
}) => {
  return (
    <Card
      hoverable
      style={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        padding: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: 0,
        }}
      >
        <img src={imageUrl} alt="" style={{ width: 80, height: 85 }} />
        <div>
          <Title level={5}>{title}</Title>
          <Text
            style={{
              fontSize: "11px",
              border: "2px solid #00b96b",
              borderRadius: 10,
              padding: "3px",
              margin: "5px",
            }}
          >
            Date: {date}
          </Text>
          <div style={{ marginTop: "10px" }}>
            <Text
              style={{
                fontSize: "11px",
                border: "2px solid #FFC215",
                borderRadius: 10,
                padding: "3px",
                margin: 5,
              }}
            >
              Participants: {participants}
            </Text>
            <Text
              style={{
                fontSize: "11px",
                border: "2px solid #E84234",
                borderRadius: 10,
                padding: "3px",
              }}
            >
              Prize: {prize}
            </Text>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MyCard;
