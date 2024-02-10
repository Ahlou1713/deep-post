import React from "react";
import Judge from "./Judge";

interface JudgeData {
  imageUrl: string;
  name: string;
  skills: string;
}

interface JudgeListProps {
  judges: JudgeData[];
}

const JudgeList: React.FC<JudgeListProps> = ({ judges }) => {
  return (
    <div
      style={{
        backgroundColor: "#181B23",
      }}
    >
      <div style={{ color: "white", textAlign: "center" }}>
        <h2>Judges</h2>
      </div>
      {judges.map((judge, index) => (
        <Judge
          key={index}
          imageUrl={judge.imageUrl}
          name={judge.name}
          skills={judge.skills}
        />
      ))}
    </div>
  );
};

export default JudgeList;
