import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="flex flex-col h-[200px] sm:h-[500px] sm:w-full bg-[url('/bannerimgmain.jpg')] bg-center m-2 bg-no-repeat bg-cover rounded-2xl justify-center">
      <div className="sm:flex sm:justify-between sm:py-28 px-12">
        <div className="hidden sm:flex flex-col align-left justify-start gap-2">
          <div className="flex flex-col px-2 gap-4 text-white font-bold">
            {/* <p className="text-2xl">Being Artstic...</p> */}
            <h3 className="sm:text-3xl font-sans font-extrabold uppercase">Welcome to </h3>
          </div>
          <h1 className="text-white sm:text-8xl font-extrabold uppercase ">TriDev</h1>
          <h4 className="text-white sm:text-6xl font-extrabold uppercase ">Art Studio</h4>
          {/* <img src={urlFor('/bannerimgmain')} alt="headphones" className='hero-banner-image'/> */}
        </div>
      <div className="hidden text-white">
        <h5>Description</h5>
        <p>Best Headphones on the market</p>
      </div>
    </div>
    </div >
  );
};

export default HeroBanner;
