import React from 'react'
import SideBar from "./../SideBar";


function WorkspaceSettings() {
    const handleChange = () => {
    }
    return (
        <SideBar height="h-screen" width="w-full" bgColor="bg-csBlack">
            <div className="my-10 mx-8">
                <div className="text-2xl text-csWhite">Workspace Settings</div>
                <div className="mt-5">
                    <div className="text-csWhite text-xs mb-1 ml-1">Workspace Name</div>
                    <input
                        className="block p-2 pl-4 w-80 text-sm text-csWhite rounded-md bg-csGrey"
                        type="text"
                        onChange={handleChange()}
                        placeholder="My Workspace"
                    />
                </div>
                <div className="text-csWhite text-xs mb-1 ml-1 mt-5">WorkspaceId</div>
                <input
                    className="block p-2 pl-4 w-80 text-sm text-csWhite rounded-md bg-csGrey"
                    type="text"
                    value="Csfjksdlkadf123"
                    readOnly
                />
            </div>
        </SideBar>
    )
}

export default WorkspaceSettings