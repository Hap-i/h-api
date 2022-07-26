import React from 'react'
import SideBar from "./../SideBar";
import BackgroundLetterAvatars from "../BackgroundLetterAvatars";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
function HomeMiddleBar() {
    return (
        <SideBar height="h-screen" width="w-96" bgColor="bg-csGrey">
            <div>
                <div className="flex items-center mt-3 mx-3 p-4 rounded-lg hover:bg-csBlack">
                    <BackgroundLetterAvatars name="Suvendu"></BackgroundLetterAvatars>
                    <div className="text-csWhite ml-3 text-xl">My Workspace</div>
                </div>
                <div className="mt-6">
                    <div className="flex items-center  mt-2 mx-3 p-3 cursor-pointer rounded-lg bg-csBlack">
                        <WorkspacesIcon
                            color="primary"
                        // sx={{ color: "#EEEEEE" }}
                        ></WorkspacesIcon>
                        <div className="text-csWhite ml-3 text-sm">Workspace</div>
                    </div>
                    <div className="flex items-center  mt-2 mx-3 p-3 cursor-pointer rounded-lg bg-csBlack">
                        <AppsIcon
                            color="primary"
                        // sx={{ color: "#EEEEEE" }}
                        ></AppsIcon>
                        <div className="text-csWhite ml-3 text-sm">Apps</div>
                    </div>
                    <div className="flex items-center  mt-2 mx-3 p-3 cursor-pointer rounded-lg bg-csBlack">
                        <SettingsIcon
                            color="primary"
                        // sx={{ color: "#EEEEEE" }}
                        ></SettingsIcon>
                        <div className="text-csWhite ml-3 text-sm">
                            Workspace Settings
                        </div>
                    </div>
                    <div className="flex items-center  mt-2 mx-3 p-3 cursor-pointer rounded-lg bg-csBlack">
                        <PeopleAltIcon
                            color="primary"
                        // sx={{ color: "#EEEEEE" }}
                        ></PeopleAltIcon>
                        <div className="text-csWhite ml-3 text-sm">Workspace Members</div>
                    </div>
                </div>
            </div>
        </SideBar>
    )
}

export default HomeMiddleBar