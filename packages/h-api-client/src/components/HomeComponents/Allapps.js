import React from 'react'
import SideBar from "./../SideBar";
import BackgroundLetterAvatars from "../BackgroundLetterAvatars";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";
import CodeIcon from "@mui/icons-material/Code";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
function Allapps() {
    return (
        <SideBar height="h-screen" width="w-full" bgColor="bg-csBlack">
            <div className="mx-10 mt-4">
                <div className="flex justify-between">
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <SearchIcon
                                fontSize="small"
                                sx={{ color: "#EEEEEE" }}
                            ></SearchIcon>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block p-1 pl-10 w-80 text-sm text-csWhite rounded-md bg-csGrey border-csTeal focus:border-csBlack "
                            placeholder="search"
                        />
                    </div>
                    <div>
                        <button className="bg-csTeal w-28 p-1 rounded-md text-csWhite hover:bg-opacity-80">
                            New app
                            <AddIcon className='ml-1'></AddIcon>
                        </button>
                    </div>
                </div>
                <div className="mt-5 text-csWhite text-sm">2 Apps</div>
                <div className="mt-3 bg-csGrey p-4 pr-7 rounded-lg cursor-pointer hover:bg-opacity-80">
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <BackgroundLetterAvatars name="A"></BackgroundLetterAvatars>
                                <div className="text-csWhite ml-3">My App</div>
                            </div>
                            <IconButton>
                                <DeleteIcon
                                    fontSize="small"
                                    sx={{ color: "#EEEEEE" }}
                                ></DeleteIcon>
                            </IconButton>
                        </div>
                        <div className="text-csWhite mt-2 text-sm ">
                            Sample application for E-commerece
                        </div>
                        <div className="flex mt-7 text-csWhite items-center">
                            <AccessTimeIcon
                                fontSize="small"
                                sx={{ color: "#EEEEEE" }}
                            ></AccessTimeIcon>
                            <div className="ml-2 text-xs">Last Build Jul 7</div>
                            <div className="flex items-center ml-7 ">
                                <DoneIcon
                                    fontSize="small"
                                    sx={{ color: "#00FF00" }}
                                ></DoneIcon>
                                <Tooltip title="Generate Code" placement="right" arrow>
                                    <IconButton>
                                        <CodeIcon
                                            fontSize="small"
                                            sx={{ color: "#EEEEEE" }}
                                        ></CodeIcon>
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SideBar>
    )
}

export default Allapps