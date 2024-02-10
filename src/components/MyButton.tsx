import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { ReactNode } from "react";

interface Props {
    children: ReactNode,
    size: SizeType,
    type: "link" | "text" | "default" | "primary" | "dashed" | undefined
    onClick: () => void
}

const MyButton = ({children, size, type, onClick}: Props) => {
  return (
    <Button type={type} size={size} onClick={onClick}>
      {children}
    </Button>
  );
};

export default MyButton;
