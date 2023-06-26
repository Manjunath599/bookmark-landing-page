import React, { useState } from "react";
import Sidebar from "../pages/sidebar";


export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            {openMenu && <Sidebar menu={openMenu} setMenu={setOpenMenu} />}
            <nav className="font-body flex justify-between p-6 md:px-28">
                <div>
                    <img src="./images/logo-bookmark.svg" alt="logo" />
                </div>
                <div className="hidden lg:block">
                    <ul className="flex">
                        <li className="cursor-pointer hover:text-[#fa5757]">FEATURES</li>
                        <li className="cursor-pointer hover:text-[#fa5757] mx-6">PRICING</li>
                        <li className="cursor-pointer hover:text-[#fa5757]">CONTACT</li>
                        <li className="cursor-pointer mx-6 border-2 px-6 py-1 bg-[#fa5757] text-white
                hover:bg-white hover:text-[#fa5757]">LOGIN</li>
                    </ul>
                </div>
                <img onClick={() => setOpenMenu(!openMenu)}
                    className="w-6 cursor-pointer lg:hidden" src="./images/icon-hamburger.svg" alt="menu" />
            </nav>
        </>
    )
}

