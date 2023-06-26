import React, { useState } from "react";
import data from "./data"


export default function Features() {
    const [information, setInformation] = useState(data)
    const [value, setValue] = useState(0)

    const { image, heading, info } = information[value]

    return (
        <section className="font-body text-center mt-28">
            <h1 className="font-bold text-3xl px-6">Features</h1>
            <p className="text-[#9194a1] mt-6 px-6 md:px-64 lg:px-96">
                Our aim is to make it quick and easy for you to access your favourite websites.
                Your bookmarks sync between your devices so you can access them on the go.
            </p>

            <div className="flex flex-col items-center lg:flex-row justify-center mt-8">
                {information.map((item, index) => {
                    return <div key={index} >
                        <button className={`hover:text-[#fa5757] block ${index === value && 'border-b-4 py-3 border-[#fa5757]'}
                lg:mx-4`}
                            onClick={() => setValue(index)}>{item.name}</button>
                        <hr className="lg:hidden" />
                    </div>
                })}
            </div>
            <hr />
            <div className="lg:flex lg:justify-between mt-10">
                <div className="relative">
                    <img className="z-10 px-6" src={image} />
                    <div className="bg-[#5368df] p-0 h-[35vh] w-[80vw] rounded-r-full -z-10
           absolute left-0 top-6 md:h-[50vh] md:w-[50vw] lg:h-[39vh] lg:w-[27vw] lg:top-28">
                    </div>
                </div>
                <div className="px-6 mt-28 lg:text-left lg:mr-44">
                    <h1 className="font-semibold text-3xl">{heading}</h1>
                    <p className="text-[#9194a1] mt-6 lg:w-[24rem]">{info}</p>
                    <button className="mt-4 px-4 py-2 bg-[#5368df] mr-4 rounded-md text-white">More info</button>
                </div>
            </div>
        </section>
    )
}