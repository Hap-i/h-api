import React from "react";
import SideBar from "./../components/SideBar";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";
import HelpOutlineSharpIcon from "@mui/icons-material/HelpOutlineSharp";
import BackgroundLetterAvatars from "../components/BackgroundLetterAvatars";

function Home() {
  return (
    <div className="flex justify-between">
      <SideBar height="h-screen" width="w-14" bgColor="bg-csBlack">
        <div className="flex justify-between flex-col h-full items-center">
          <div>up</div>
          <div className="mb-3">
            <IconButton>
              <DarkModeSharpIcon
                fontSize="large"
                color="primary"
                sx={{ color: "#fffff" }}
              ></DarkModeSharpIcon>
            </IconButton>
            <IconButton>
              <HelpOutlineSharpIcon
                fontSize="large"
                color="primary"
                sx={{ color: "#fffff" }}
              ></HelpOutlineSharpIcon>
            </IconButton>
            <IconButton>
              <BackgroundLetterAvatars name="Suvendu"></BackgroundLetterAvatars>
            </IconButton>
            <IconButton>
              <LogoutIcon
                fontSize="large"
                color="primary"
                sx={{ color: "#fffff" }}
              ></LogoutIcon>
            </IconButton>
          </div>
        </div>
      </SideBar>
      <SideBar height="h-screen" width="w-96" bgColor="bg-csGrey">
        dd
      </SideBar>
      <SideBar height="h-screen" width="w-full" bgColor="bg-csBlack"></SideBar>
    </div>
  );
}

export default Home;
