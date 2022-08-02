import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
function AppOverview() {
  return (
    <div className="w-auto rounded-md m-3 ml-6 border-csBlack border-2 text-csWhite pl-3 pt-5 pb-16">
      <div className="flex items-center space-x-3">
        <HomeOutlinedIcon />
        <div>OverView</div>
      </div>
      <div className="mt-4 text-sm">
        Your Amplication-generated app is ready. We created it using the amazing
        open-source technologies. Push the auto-generated code to GitHub or
        download the source-code and take it to the moon with your coding
        skills.
      </div>
      <div className="flex space-x-80 mt-10">
        <div className="space-y-4">
          <div>Node Js</div>
          <div>Nest JS</div>
          <div>TypeScript</div>
        </div>
        <div className="space-y-4">
          <div> GraphQL</div>
          <div>REST API</div>
          <div>Admin UI</div>
        </div>
        <div className="space-y-4">
          <div>Mongoose</div>
          <div>MongoDB</div>
          <div>Docker</div>
        </div>
        <div className="space-y-4">
          <div>Authenication Passport JWT</div>
          <div>Swagger</div>
          <div>Jest</div>
        </div>
      </div>
    </div>
  );
}

export default AppOverview;
