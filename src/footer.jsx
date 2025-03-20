import React from "react";
import Flag from "./assets/flag.svg";
import Facebook from "./assets/facebook.png";
import Twitter from "./assets/twitter.png";
import Youtube from "./assets/youtube.png";

function Footer() {
    return (
        <footer className="z-[50] w-full bg-[#39591F] text-white py-6 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-center relative">
            {/* Copyright Section */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0 text-sm md:text-base">
                &copy; 2025 KV TechMedia
            </div>

            {/* Made in India Section */}
            <div className="w-full md:w-1/3 flex items-center justify-center gap-2 text-sm md:text-base mb-4 md:mb-0">
                <span>Proudly made in</span>
                <img src={Flag} alt="India Flag" className="w-5 h-5 md:w-6 md:h-6" />
                <span>India, with ❣️</span>
            </div>

            {/* Social Media Links */}
            <div className="w-full md:w-1/3 flex justify-center gap-6">
                <a href="#" className="hover:opacity-80 transition-transform transform hover:scale-110">
                    <img src={Facebook} alt="Facebook" className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="#" className="hover:opacity-80 transition-transform transform hover:scale-110">
                    <img src={Twitter} alt="Twitter" className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="#" className="hover:opacity-80 transition-transform transform hover:scale-110">
                    <img src={Youtube} alt="YouTube" className="w-5 h-5 md:w-6 md:h-6" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
