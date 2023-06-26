import React from "react";

export default function Hero() {
    return (
        <section className="font-body mt-20 lg:flex lg:flex-row-reverse lg:justify-between p-6">
            <div >
                <img className="z-10" src="./images/illustration-hero.svg" alt="hero" />
                <div className="bg-[#5368df] h-[35vh] w-[80vw] rounded-l-full -z-10
           absolute top-48 right-0 md:h-[50vh] md:w-[50vw] lg:h-[39vh] lg:w-[33vw] lg:top-80">
                </div>
            </div>

            <div className=" text-center mt-20 md:mt-14 lg:text-left lg:pl-28">
                <h1 className="text-4xl font-bold lg:w-[28rem]">A Simple Bookmark Manager</h1>
                <p className="px-14 mt-6 text-[#9194a1] mb-10 lg:px-0 lg:w-[28rem]"> A clean and simple interface to organize your favourite websites. Open a new
                    browser tab and see your sites load instantly. Try it for free.</p>
                <button className="px-3 py-2 bg-[#5368df] mr-4 rounded-md text-white
                hover:text-[#5368df] hover:bg-white hover:border-2">Get it on Chrome</button>
                <button className="px-3 py-2 bg-gray-100 rounded-md shadow-lg
                hover:border-2 hover:text-[#5368df] hover:bg-white">Get it on Firefox</button>
            </div>
        </section>
    )
}