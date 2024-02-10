import SideBar from "./layouts/sidebar";

function App() {
  const myHackathons = ["DevFest", "Game Jam", "GDG HACK"];

  return (
    <div className="App">
      <SideBar>{myHackathons}</SideBar>
    </div>
  );
}

export default App;
