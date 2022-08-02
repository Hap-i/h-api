import React from "react";
import AppOverview from "../components/AppInfo/AppOverview";
import SideBar from "../components/SideBar";

function AppInfo() {
  return (
    <SideBar height="h-screen" width="w-full" bgColor="bg-csGrey">
      <div>Main Background</div>
      <div>
        <AppOverview></AppOverview>
      </div>
      <div>options</div>
    </SideBar>
  );
}

export default AppInfo;
