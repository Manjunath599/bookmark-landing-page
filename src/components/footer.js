import React from "react";


export default function Footer() {
    return (
        <footer className="font-body mt-20 text-center text-white">
            <div className="bg-[#5368df] h-80 w-[100vw]">
                <h3 className=" text-xl font-medium uppercase pt-20">35,000+ already joined</h3>
                <h1 className="text-3xl font-semibold mt-4">Stay up-to-date with what we’re doing</h1>
                <div className="mt-6 flex flex-col items-center justify-center lg:flex-row lg:mt-12">
                    <input className="px-10 py-2 rounded-md " type="email" placeholder="Enter your email address" />
                    <button className="block px-24 py-2 bg-[#fa5757] rounded-md mt-4 hover:bg-white 
        hover:text-[#fa5757] lg:mt-0 lg:px-12  lg:mx-6 ">Contact us</button>
                </div>
            </div>
            <div className="bg-[#252b46] h-80 w-[100vw] flex flex-col 
        items-center justify-center lg:flex-row lg:justify-evenly ">
                <img className="bg-white" src="./images/logo-bookmark.svg" />
                <ul className="uppercase mt-10 lg:flex lg:items-center lg:mr-60">
                    <li className="hover:text-[#fa5757] cursor-pointer">Features</li>
                    <li className="my-4 lg:mx-8 hover:text-[#fa5757] cursor-pointer">Pricing</li>
                    <li className="hover:text-[#fa5757] cursor-pointer">Contact</li>
                </ul>
                <div className="mt-12" >
                    <img className="inline mx-6 hover:bg-[#fa5757]" src="./images/icon-facebook.svg" />
                    <img className="inline mx-6 hover:bg-[#fa5757]" src="./images/icon-twitter.svg" />
                </div>
            </div>

        </footer>
    )
}