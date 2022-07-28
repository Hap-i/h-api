import React from 'react'
import SideBar from "./../SideBar";
import BackgroundLetterAvatars from "../BackgroundLetterAvatars";
import { MiddlebarData } from './MiddlebarData';
import { useDispatch, useSelector } from "react-redux";
import { updateHomeMenu } from '../../redux/slice/homeMenuSlice';

function HomeMiddleBar() {
    const dispatch = useDispatch();

    const handleMenu = (title) => {
        dispatch(updateHomeMenu(title))
    }
    const selectedMenu = useSelector(state => state.homeMenu)

    return (
        <SideBar height="h-screen" width="w-96" bgColor="bg-csGrey">
            <div>
                <div className="flex items-center mt-3 mx-3 p-4 rounded-lg hover:bg-csBlack">
                    <BackgroundLetterAvatars name="Suvendu"></BackgroundLetterAvatars>
                    <div className="text-csWhite ml-3 text-xl">My Workspace</div>
                </div>
                <div className="mt-6">
                    {
                        MiddlebarData.map((menu) => (
                            <div key={menu.id} className={`flex items-center  mt-2 mx-3 p-3 cursor-pointer rounded-lg
                             hover:bg-csBlack ${selectedMenu === menu.title ? 'bg-csBlack' : ''}`}
                                onClick={() => handleMenu(menu.title)}
                            >
                                {menu.icon}
                                <div className="text-csWhite ml-3 text-sm">{menu.title}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </SideBar>
    )
}

export default HomeMiddleBar