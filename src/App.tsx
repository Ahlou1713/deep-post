import { Button, DatePicker, Input, Progress, Slider, Space, Spin } from "antd";
import SideBar from "./layouts/sidebar";

function App() {
  return (
    <div className="App">
      <SideBar />

      <Space>
        <Button type="primary">Primary Button</Button>
        <Input placeholder="Type here..."></Input>
        <Progress percent={60} type="dashboard" />
        <Spin spinning />
        <DatePicker />
        <Slider defaultValue={30} />
      </Space>
    </div>
  );
}

export default App;
