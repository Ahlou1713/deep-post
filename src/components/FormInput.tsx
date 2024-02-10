import { Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

import { ReactNode } from "react";

interface Props {
  placeholder: string;
  size: SizeType;
  prefix?: ReactNode
}

const FormInput = ({ placeholder, size, prefix }: Props) => {
  return <Input size={size} placeholder={placeholder} prefix={prefix} />;
};

export default FormInput;
