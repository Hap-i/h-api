import React from "react";
import HomeSideBar from "../components/HomeComponents/HomeSideBar";
import HomeMiddleBar from "../components/HomeComponents/HomeMiddleBar";
import Allapps from "../components/HomeComponents/Allapps";
import WorkspaceSettings from "../components/HomeComponents/WorkspaceSettings";
import WorkspaceMembers from "../components/HomeComponents/WorkspaceMembers";
import { useSelector } from "react-redux";

function Home() {
  const selectedMenu = useSelector(state => state.homeMenu)

  function mainComponent() {
    if (selectedMenu === "Workspace Settings") return <WorkspaceSettings></WorkspaceSettings>
    else if (selectedMenu === "Workspace Members") return <WorkspaceMembers></WorkspaceMembers>
    else return <Allapps></Allapps>

  }
  return (
    <div className="flex justify-between">
      <HomeSideBar></HomeSideBar>
      <HomeMiddleBar></HomeMiddleBar>
      {mainComponent()}
    </div>
  );
}

export default Home;
