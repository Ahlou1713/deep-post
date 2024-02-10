import OverlayItem from "./OverlayItem";
import FormInput from "./FormInput";

interface Props {
  items: String[];
}

const Overlay = ({ items }: Props) => {
  return (
    <>
      <FormInput placeholder="Team mate name" size="large"></FormInput>
      {items.map((item) => {
        <OverlayItem>{item}</OverlayItem>;
      })}
    </>
  );
};

export default Overlay;
