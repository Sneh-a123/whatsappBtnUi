import React from "react";
import WhatsappBtn from "./whatsappBtn";
import ChatBox from "./chatBox";

function App() {
  return (
    <>
      {/* Header Section */}
      <div className="pt-[64px] pb-[32px] box-border text-[#222525] text-[16px] font-medium font-sf-pro">
        <div className="z-10 w-full max-w-[1248px] mx-auto px-[24px]">
          <div className="flex flex-col items-center max-w-[720px] mx-auto">
            <h1 className="opacity-100 font-bold text-[#1a1a1a] text-[3.1em] text-center font-[Nunito, sans-serif]">
              Free WhatsApp Chat Button & Widget
            </h1>
            <p className="mt-4 mb-4 text-[16px] font-normal text-center">
              Create a beautiful WhatsApp Live Chat Widget and add it to your website for free using our simple WhatsApp button generator.
            </p>
          </div>
        </div>
      </div>

      {/* Generate WhatsApp Button */}
      <div className="pt-[32px] pb-[96px] text-[#222525] font-[DM Sans, sans-serif] text-[16px] font-medium leading-[24px]">
        <div className="mb-[64px] z-10 w-full max-w-[1248px] mx-auto px-[24px]">
          <div className="grid gap-5 grid-cols-[1fr_2.2fr] items-start gap-y-4">
            {/* Left Side (Heading) */}
            <div className="self-start mt-[40px] w-full max-w-[506px]">
              <h2 className="font-bold mb-[24px] font-[Nunito, sans-serif] text-[40px] leading-[42px]">
                Generate WhatsApp Button
              </h2>
              <p className="text-left mt-[24px] mb-[24px] font-[Montserrat, sans-serif] text-[18px] font-normal leading-[28px]">
                Add WhatsApp Chat to the website in just a few steps. Customize the WhatsApp button on the right and click on the "Generate" button to get the code snippet.
              </p>
            </div>

            {/* Right Side (Form & UI) */}
            <div className="w-full max-w-[720px] box-border">
              <div className="max-w-[857px] w-full py-[32px] px-[60px] bg-white shadow-lg rounded-[8px] font-sf-pro float-right text-[16px] font-medium leading-[24px] text-[#222525]">
                <WhatsappBtn />
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Generate WhatsApp Widget */}
      <div className="pt-[32px] pb-[96px] text-[#222525] font-[DM Sans, sans-serif] text-[16px] font-medium leading-[24px]">
        <div className="mb-[64px] z-10 w-full max-w-[1248px] mx-auto px-[24px]">
          <div className="grid gap-5 grid-cols-[1fr_2.2fr] items-start gap-y-4">
            {/* Left Side (Heading) */}
            <div className="self-start mt-[40px] w-full max-w-[506px]">
              <h2 className="font-bold mb-[24px] font-[Nunito, sans-serif] text-[40px] leading-[42px]">
              Generate WhatsApp Widget
              </h2>
              <p className="text-left mt-[24px] mb-[24px] font-[Montserrat, sans-serif] text-[18px] font-normal leading-[28px]">
              Generate a WhatsApp Widget to add to your website in just a few steps. Customize the widget on the right and click on "Generate" button to get the code snippet.
              </p>
            </div>

            {/* Right Side (Form & UI) */}
            <div className="w-full max-w-[720px] box-border">
              <div className="max-w-[857px] w-full py-[32px] px-[60px] bg-white shadow-lg rounded-[8px] font-sf-pro float-right text-[16px] font-medium leading-[24px] text-[#222525]">
                
                <ChatBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
