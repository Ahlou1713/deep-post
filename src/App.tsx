import SideBar from "./layouts/sidebar";

function App() {
  const myHackathons = ["DevFest", "Game Jam", "GDG HACK"];

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
