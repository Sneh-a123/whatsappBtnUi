import React from "react";
import Flag from "./assets/flag.svg";
import Facebook from "./assets/facebook.png";
import Twitter from "./assets/twitter.png";
import Youtube from "./assets/youtube.png";

function footer() {
    return (
        <>
            <div className="z-[50] w-full bg-[#39591F] text-white py-4 px-6 flex flex-col md:flex-row items-center justify-between text-center relative">
                <div className="w-full md:w-1/3 mb-2 md:mb-0">Copyright © 2025 KV TechMedia</div>
                <div className="w-full md:w-1/3 flex items-center justify-center gap-2 mb-2 md:mb-0">
                    <span>Proudly made in</span>
                    <img src={Flag} alt="India Flag" className="w-6 h-6" />
                    <span>India, with ❣️</span>
                </div>
                <div className="w-full md:w-1/3 flex justify-center gap-4">
                    <a href="#" className="hover:opacity-80 transition"><img src={Facebook} alt="Facebook" className="w-6 h-6" /></a>
                    <a href="#" className="hover:opacity-80 transition"><img src={Twitter} alt="Twitter" className="w-6 h-6" /></a>
                    <a href="#" className="hover:opacity-80 transition"><img src={Youtube} alt="YouTube" className="w-6 h-6" /></a>
                </div>
            </div>
        </>
    );
}

export default footer;
