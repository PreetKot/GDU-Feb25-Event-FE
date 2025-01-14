import React from "react";



const SponsorCard = () => {
    return (
      <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
        <img src = "/sponsorbg2.jpg" alt = "sponsor"/>
        <div className="absolute inset-0 flex-col justify-center items-center p-9 mt-5" >
        <img src = "/logo192.png" alt = "sponsor" className="m-auto w-1/3 md:w-full"/>
            <div className="text-center">
                <h1 className="text-3xl font-serif font-bold text-gray-300">Sponsor</h1>
                <p className="p-3 text-gray-300 font-serif ">Info about sponsor Lorem ipsum dolor sit amet </p>
            </div>
        </div>
      </div>
    );
  };


export default SponsorCard;
