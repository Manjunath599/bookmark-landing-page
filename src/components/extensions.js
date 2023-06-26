import React from "react";


export default function Extensions() {
  return (
    <section className="text-center p-6 mt-16 font-body">
      <h1 className="font-semibold text-3xl">Download the extension</h1>
      <p className="text-[#9194a1] mt-6 md:px-64 lg:px-96">We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.</p>
      <div className="mt-10 flex items-center justify-center flex-col lg:flex-row">
        <div className="h-96 w-64 bg-white shadow-2xl rounded-lg flex flex-col items-center">
          <img className="mt-14" src="./images/logo-chrome.svg" alt="chrome" />
          <h1 className=" font-medium text-2xl mt-10">Add to Chrome</h1>
          <p className="mt-3 text-[#9194a1]">Minimum version 62</p>
          <img className="mt-8" src="./images/bg-dots.svg" />
          <button className="bg-[#5368df] p-3 px-6 mt-4 text-white rounded-lg
          hover:border-4 hover:text-[#5368df] hover:bg-white">Add & Install Extension</button>
        </div>
        <div className="h-96 w-64 bg-white shadow-2xl rounded-lg flex flex-col items-center my-10 lg:mx-10 lg:mt-28">
          <img className="mt-14" src="./images/logo-firefox.svg" alt="chrome" />
          <h1 className=" font-medium text-2xl mt-10"> Add to Firefox</h1>
          <p className="mt-3 text-[#9194a1]">Minimum version 55</p>
          <img className="mt-8" src="./images/bg-dots.svg" />
          <button className="bg-[#5368df] p-3 px-6 mt-4 text-white rounded-lg
          hover:border-4 hover:text-[#5368df] hover:bg-white">Add & Install Extension</button>
        </div>
        <div className="h-96 w-64 bg-white shadow-2xl rounded-lg flex flex-col items-center lg:mt-36">
          <img className="mt-14" src="./images/logo-opera.svg" alt="chrome" />
          <h1 className=" font-medium text-2xl mt-10">Add to Opera</h1>
          <p className="mt-3 text-[#9194a1]">Minimum version 46</p>
          <img className="mt-8" src="./images/bg-dots.svg" />
          <button className="bg-[#5368df] p-3 px-6 mt-4 text-white rounded-lg
          hover:border-4 hover:text-[#5368df] hover:bg-white">Add & Install Extension</button>
        </div>
      </div>
    </section>
  )
}