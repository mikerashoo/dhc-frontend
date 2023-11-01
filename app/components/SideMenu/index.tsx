import MobileSideBar from "./MobileSideMenu";

import React from "react";
import SideMenu from "./SideMenu";

function SideBar() {
    return (
        <div className="h-full">
            <div className="block flex-none h-full md:hidden ">
                <MobileSideBar />
            </div>
            <div className="w-full h-full hidden md:block">
                <SideMenu />
            </div>
        </div>
    );
}

export default SideBar;
