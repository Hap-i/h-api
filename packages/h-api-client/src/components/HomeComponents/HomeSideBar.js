import React from 'react'
import SideBar from "./../SideBar";
import BackgroundLetterAvatars from "../BackgroundLetterAvatars";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";
import HelpOutlineSharpIcon from "@mui/icons-material/HelpOutlineSharp";
import Tooltip from "@mui/material/Tooltip";

function HomeSideBar() {
    return (
        < SideBar height="h-screen" width="w-14" bgColor="bg-csBlack" >
            <div className="flex justify-between flex-col h-full items-center">
                <div>up</div>
                <div className="mb-3">
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
        </SideBar >
    )
}

export default HomeSideBar