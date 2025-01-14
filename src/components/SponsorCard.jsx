import React from "react";



const SponsorCard = () => {
    return (
      <div className="relative max-w-sm  rounded-2xl shadow-lg justify-center items-center">
        <img src = "/sponsorbg2.jpg" alt = "sponsor"/>
        <div className="absolute inset-0 flex-col justify-center items-center p-auto my-auto mt-5 mx-auto max-w-xs" >
        <img src = "/logo192.png" alt = "sponsor" className="m-auto"/>
            <div className="text-center">
                <h1 className="text-3xl font-serif font-bold text-gray-300">Sponsor</h1>
                <p className="p-3 text-gray-300 font-serif ">Info about sponsor Lorem ipsum dolor sit amet </p>
            </div>
        </div>
      </div>
    );
  };


export default SponsorCard;
