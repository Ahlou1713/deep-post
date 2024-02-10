import FormInput from "./FormInput";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = () => {
  return (
    <>
      <FormInput size="small" placeholder="Search" prefix={<SearchOutlined />}></FormInput>
    </>
  );
};

export default SearchBar;
