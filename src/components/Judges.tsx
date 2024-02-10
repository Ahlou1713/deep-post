import Judge from "./Judge";
import Title from "antd/es/typography/Title";

interface Props {
  items: String[];
}

const Judges = ({ items }: Props) => {
  return (
    <>
      <Title>Judges</Title>
      {items.map((item) => {
        <Judge>{item}</Judge>;
      })}
    </>
  );
};

export default Judges;
