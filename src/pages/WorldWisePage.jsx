import NavPage from "../components/NavPage";
import Map from "../components/WorldWise/Map";
import SideBar from "../components/WorldWise/SideBar";

const WorldWisePage = () => {
  return (
    <div>
      <NavPage />
      <h1>World Wise Page</h1>
      <div
        style={{
          display: "flex",
          position: "relative",
        }}
      >
        <div style={{ backgroundColor: "orange" }}>
          <SideBar />
        </div>
        <div style={{ backgroundColor: "yellow" }}>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default WorldWisePage;
