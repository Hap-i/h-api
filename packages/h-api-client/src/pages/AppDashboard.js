import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import AppBottomBar from "../components/AppComponents/AppBottomBar";
import AppSidebar from "../components/AppComponents/AppSidebar";

function AppDashboard() {
  let params = useParams();
  return (
    <div>
      <div className="flex">
        <AppSidebar></AppSidebar>
        <Outlet />
      </div>
      <AppBottomBar />
    </div>
  );
}

export default AppDashboard;
