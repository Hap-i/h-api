import React from "react";
import HomeSideBar from "../components/HomeComponents/HomeSideBar";
import HomeMiddleBar from "../components/HomeComponents/HomeMiddleBar";
import Allapps from "../components/HomeComponents/Allapps";
// import WorkspaceSettings from "../components/HomeComponents/WorkspaceSettings";
// import WorkspaceMembers from "../components/HomeComponents/WorkspaceMembers";

function Home() {
  return (
    <div className="flex justify-between">
      <HomeSideBar></HomeSideBar>
      <HomeMiddleBar></HomeMiddleBar>
      {/* <WorkspaceMembers></WorkspaceMembers> */}
      <Allapps></Allapps>
    </div>
  );
}

export default Home;
