import React from 'react'
import SideBar from "./../SideBar";
import BackgroundLetterAvatars from "../BackgroundLetterAvatars";

function WorkspaceMembers() {
    return (
        <SideBar height="h-screen" width="w-full" bgColor="bg-csBlack">
            <div className="mt-4 mx-10">
                <div className="flex justify-between">
                    <div className="text-csWhite text-xl">Workspace Members</div>
                    <div className="flex space-x-3">
                        <input
                            className="block p-1 pl-4 w-56 text-sm text-csWhite rounded-md bg-csGrey"
                            type="email"
                            placeholder="email"
                        />
                        <button className="bg-csTeal w-28 h-8 rounded-md text-csWhite hover:bg-opacity-80">
                            Invite
                        </button>
                    </div>
                </div>
                <div className="text-csWhite text-sm mt-7">1 Members</div>
                <div className="mt-5 ">
                    <div className="flex items-center p-4 bg-csGrey rounded-md">
                        <BackgroundLetterAvatars name="Suvendu"></BackgroundLetterAvatars>
                        <div className="ml-3 text-csWhite">
                            Hap-i@users.noreply.github.com
                        </div>
                        <div className="text-csWhite ml-5">(owner)</div>
                    </div>
                </div>
            </div>
        </SideBar>
    )
}

export default WorkspaceMembers