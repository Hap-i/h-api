import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
function AppDashboard() {
  let params = useParams();
  return (
    <div>
      <div>App ID: {params.id}</div>
      <Link to={"settings"}>settings</Link>
      <Outlet />
    </div>
  );
}

export default AppDashboard;
