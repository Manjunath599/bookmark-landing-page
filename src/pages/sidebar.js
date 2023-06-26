import React from "react";


export default function Sidebar({ menu, setMenu }) {
    return (
        <section className="font-body bg-[#252b46] text-white h-[100vh] z-10 p-6">
            <div className="flex justify-between px-10">
                <img className=" bg-white mr-" src="./images/logo-bookmark.svg" alt="logo" />
                <img onClick={() => setMenu(!menu)} className="ml-4 cursor-pointer w-6"
                    src="./images/icon-close.svg" alt="close" />
            </div>
            <div>
                <ul className="text-center mt-12 mx-20 md:mx-40">
                    <li className="my-6 cursor-pointer hover:text-[#fa5757]">FEATURES</li>
                    <li><hr /></li>
                    <li className="my-6 cursor-pointer hover:text-[#fa5757]">PRICING</li>
                    <li><hr /></li>
                    <li className="my-6 cursor-pointer hover:text-[#fa5757]">CONTACT</li>
                    <li><hr /></li>
                    <li className="my-6 border-2 py-2 cursor-pointer hover:text-[#fa5757]">LOGIN</li>
                </ul>
            </div>
            <div className="flex items-center justify-center mt-72">
                <img src="./images/icon-facebook.svg" alt="fb" />
                <img className="ml-4" src="./images/icon-twitter.svg" alt="twitter" />
            </div>
        </section>
    )
}