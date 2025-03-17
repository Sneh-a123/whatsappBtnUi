import React, { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="top-[0px] z-[100] w-full flex justify-between items-center bg-[#EDFBE2] p-4 md:p-6 relative">
                <div className="text-4xl font-bold text-[#16563A]">Wappi</div>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex w-[70%] justify-center">
                    <ul className="flex space-x-6 text-[#7A7A7A] text-[20px]">
                        <li className="cursor-pointer hover:text-[#16563A]">Blog</li>
                        <li className="cursor-pointer hover:text-[#16563A]">Pricing</li>
                        <li className="cursor-pointer hover:text-[#16563A]">Careers</li>
                        <li className="cursor-pointer hover:text-[#16563A]">Partner With Us</li>
                    </ul>
                </div>
                
                {/* Call Us Button */}
                <div className="hidden md:block">
                    <button className="bg-[#16563A] text-white px-4 py-2 rounded-md">CALL US</button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-[#EDFBE2] shadow-md p-4">
                    <ul className="flex flex-col space-y-4 text-[#7A7A7A]">
                        <li className="cursor-pointer hover:text-[#16563A]">Blog</li>
                        <li className="cursor-pointer hover:text-[#16563A]">Pricing</li>
                        <li className="cursor-pointer hover:text-[#16563A]">Careers</li>
                        <li className="cursor-pointer hover:text-[#16563A]">Partner With Us</li>
                    </ul>
                    <button className="mt-4 w-full bg-[#16563A] text-white py-2 rounded-md">CALL US</button>
                </div>
            )}
        </>
    );
}

export default Header;