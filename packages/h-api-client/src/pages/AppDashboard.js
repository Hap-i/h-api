import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import AppBottomBar from "../components/AppComponents/AppBottomBar";
import AppSidebar from "../components/AppComponents/AppSidebar";

function AppDashboard() {
  let params = useParams();
  return (
    <div>
      <AppSidebar></AppSidebar>
      {/* <div>App ID: {params.id}</div>
      <Link to={"settings"}>settings</Link>
      <Outlet /> */}
      <AppBottomBar />
    </div>
  );
}

export default AppDashboard;
