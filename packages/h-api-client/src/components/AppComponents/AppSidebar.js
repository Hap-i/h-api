import React from "react";
import SideBar from "../SideBar";
import BackgroundLetterAvatars from "./../BackgroundLetterAvatars";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";
import HelpOutlineSharpIcon from "@mui/icons-material/HelpOutlineSharp";
import Tooltip from "@mui/material/Tooltip";
import { AppSidebarData } from "./AppSidebarData";
import { Link, useParams } from "react-router-dom";

function AppSidebar() {
  let param = useParams();
  return (
    <SideBar height="h-screen" width="w-14" bgColor="bg-csBlack">
      <div className="flex flex-col h-full justify-between items-center">
        <div>
          <div>
            <div className="mb-2">ICON</div>
            <hr className="border-csWhite w-8 m-auto" />
          </div>
          <div className="mt-10 pl-2 mb-1">
            <Link to={`/app/${param.id}`}>
              <BackgroundLetterAvatars name="Suvendu"></BackgroundLetterAvatars>
            </Link>
          </div>
          <div>
            {AppSidebarData.map((menu) => (
              <Link to={menu.menu} key={menu.id}>
                <Tooltip title={menu.title} placement="right" arrow>
                  <IconButton>{menu.icon}</IconButton>
                </Tooltip>
              </Link>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <Tooltip title="Toogle Dark Theme" placement="right" arrow>
            <IconButton>
              <DarkModeSharpIcon
                fontSize="large"
                // color="primary"
                sx={{ color: "#00ADB5" }}
              ></DarkModeSharpIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="menu" placement="right" arrow>
            <IconButton>
              <HelpOutlineSharpIcon
                fontSize="large"
                sx={{ color: "#EEEEEE" }}
              ></HelpOutlineSharpIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Suvendu Sahoo" placement="right" arrow>
            <IconButton>
              <BackgroundLetterAvatars name="Suvendu"></BackgroundLetterAvatars>
            </IconButton>
          </Tooltip>
          <Tooltip title="Sign Out" placement="right" arrow>
            <IconButton>
              <LogoutIcon
                fontSize="large"
                sx={{ color: "#EEEEEE" }}
              ></LogoutIcon>
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </SideBar>
  );
}

export default AppSidebar;
