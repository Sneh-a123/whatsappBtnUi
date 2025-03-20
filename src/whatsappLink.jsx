import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";


function whatsappLink() {
    let [count, setCount] = useState(0);
  
    const [buttonColor, setButtonColor] = useState("#16BE45");
        const [ctaText, setCtaText] = useState("WhatsApp Us");
        const [colorScheme, setColorScheme] = useState("light");
        const [marginBottom, setMarginBottom] = useState("20");
        const [marginLeft, setMarginLeft] = useState("20");
        const [marginRight, setMarginRight] = useState("20");
        const [cornerRadius, setCornerRadius] = useState("40");
        const [zIndex, setZIndex] = useState("999999");
        const [btnPosition , setBtnPosition] = useState("right");
        const [mobileNumber, setMobileNumber] = useState("");
        const [message , setMessage] = useState("Hello");
        const [messagrPrint, setMessagePrint] = useState("Your requested changes have been implemented in the code. You can now copy it.");
    
        const [buttonColorChange, setButtonColorChange] = useState(buttonColor);
        const [ctaTextChange, setCtaTextChange] = useState(ctaText);
        const [colorSchemeChange, setColorSchemeChange] = useState(colorScheme);
        const [marginBottomChange, setMarginBottomChange] = useState(marginBottom);
        const [marginLeftChange, setMarginLeftChange] = useState(marginLeft);
        const [marginRightChange, setMarginRightChange] = useState(marginRight);
        const [cornerRadiusChange, setCornerRadiusChange] = useState(cornerRadius);
        const [zIndexChange, setZIndexChange] = useState(zIndex);
        const [btnPositionChange, setBtnPositionChange] = useState(btnPosition);
        const [mobileNumberChange, setMobileNumberChange] = useState(mobileNumber);
        const [messageChange, setMessageChange] = useState(message);
        const [error, setError] = useState("");
        const [showCode, setShowCode] = useState(false); 

        const qrRef = useRef(null);


        const handleButtonClick = () => {
            setButtonColorChange(buttonColor); 
            setCtaTextChange(ctaText);
            setColorSchemeChange(colorScheme);
            setMarginBottomChange(marginBottom);
            setMarginLeftChange(marginLeft);
            setMarginRightChange(marginRight);
            setCornerRadiusChange(cornerRadius);
            setZIndexChange(zIndex);
            setBtnPositionChange(btnPosition);
            setMobileNumberChange(mobileNumber);
            setMessageChange(message);
            setCount(count+1);
            if (!mobileNumber.trim()) {
                setError(" Phone number is required!");
                return;
            }
            
            if(count>=1){
                setMessagePrint(`Your changes have been updated again [${count}] times`);
            }
            else{
                setMessagePrint("Your requested changes have been implemented in the code. You can now copy it.")
            }
            setError("");
            setShowCode(true);
        };
        
        const downloadQRCode = () => {
            if (qrRef.current) {
                html2canvas(qrRef.current).then((canvas) => {
                    const link = document.createElement("a");
                    link.href = canvas.toDataURL("image/png");
                    link.download = "qrcode.png";
                    link.click();
                });
            }
        };
    

        const copyToClipboard = () => {
            const chatLink = `https://wa.me/${mobileNumber}?text=${encodeURIComponent(message)}`;
        
            navigator.clipboard.writeText(chatLink)
                .then(() => alert("Code copied to clipboard! ✅"))
                .catch((err) => console.error("Failed to copy:", err));
        };

    return (
        <>  
            {/* WhatsApp Button Preview */}
            <h1 className="my-[25px] text-[#000] text-[20px] font-bold font-sf-pro box-border text-left">
            Create your WhatsApp Chat Link
                </h1>
                

                <div className="box-border block font-sf-pro text-left text-[16px] font-[500] leading-[24px] flex-wrap">
                


                {/* Third Row */}
                <div className=" flex flex-col mt-[32px] text-left text-[#222525] space-y-[14px]">
                    <label className="mb-[6px] text-[#000] text-[16px] font-sf-pro box-border font-[700] block leading-[24px]">
                        Your Phone Number
                    </label>
                    <p className="font-[Montserrat] font-[400] text-[15px] text-[#828282] leading-[18px] max-w-[100%]">
                    Include country code with + symbol. Eg. if country code is +91 and WhatsApp number is 1234567890, then type 911234567890 below.
                    </p>
                    <input 
                        type="number"
                        value={mobileNumber}
                        placeholder="your phone number"
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-[168px] font-roboto font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border" required
                    />

                    
                </div>
                <span>{error && <p className="text-red-500 text-[14px]">{error}</p>}</span>
                <div className=" flex flex-col mt-[32px] text-left text-[#222525] space-y-[14px]">
                    <label className="mb-[6px] text-[#000] text-[16px] font-sf-pro box-border font-[700] block leading-[24px]">
                        Welcome Message (optional)
                    </label>

                    <p className="font-[Montserrat] font-[400] text-[15px] text-[#828282] leading-[18px] max-w-[100%]">
                        Automatically include this text when a user clicks on your chat link, making it easier to start a conversation.
                    </p>

                    <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="font-[Montserrat] font-[400] text-[15px] text-[#828282] leading-[18px] border border-[#d9d9d9] 
                                bg-[#fff] h-[81px] py-[9px] px-[12px] box-border w-full min-w-[280px] sm:w-[250px] md:w-[300px] 
                                lg:w-[350px]"
                    >
                    </textarea>
                </div> 

                
                <div className="box-border block font-sf-pro text-left text-[16px] font-[500] leading-[24px] flex-wrap">
                <button 
                    className="py-[9px] px-[15px] bg-[#16563A] hover:bg-[#54b68b] transition-all text-[#fff] font-roboto text-[14px] mt-[32px] border-none shadow-md rounded-[4px] cursor-pointer"
                    onClick={handleButtonClick}  
                >
                    Generate WhatsApp Chat Link + QR Code
                </button>

                
                {showCode && (
                    <div className="block mt-[32px] text-[16px] font-[500] leading-[24px] text-left text-[#222525] space-y-[14px] box-border">
                        <p className="text-[14px] text-center text-[#d0eed2] mt-[40px] box-border mb-[24px] font-[500] block leading-[24px] bg-gray-600 p-3">
                            {messagrPrint}
                        </p>
                        
                        <div className=" flex flex-col mt-[32px] text-left text-[#222525] space-y-[14px]">
                    <label className="mb-[6px] text-[#000] text-[16px] font-sf-pro box-border font-[700] block leading-[24px]">
                    Your WhatsApp Click-To-Chat Link
                    </label>
                    <input 
                        type="text"
                        value={`https://wa.me/${mobileNumber}?text=${encodeURIComponent(message)}`} readOnly
                        className="w-[100%] font-roboto font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border"
                    />
                    
                    </div> 

                


                        <div className="flex justify-between items-center">
                        <button className="mt-[16px] w-[165px] h-[32px] bg-[#fff] border-1 border-[#d9d9d9] box-border shadow-2xl rounded-[4px] text-[rgb(0 0 0 / 65%)] font-[roboto] mr-[16px] text-[14px] flex items-center justify-evenly cursor-pointer overflow-visible"
                        onClick={copyToClipboard}
                        >
                            <i className="fa-solid fa-copy overflow-hidden box-border inline-block "></i>
                            Copy to clipboard
                        </button>
                        <button className="mt-[16px] w-[165px] h-[32px] bg-[#16563A] border-1 border-[#d9d9d9] box-border shadow-2xl rounded-[4px] text-[#fff] font-[roboto] mr-[16px] text-[14px] flex items-center justify-evenly cursor-pointer overflow-visible" onClick={() => window.open(`https://wa.me/${mobileNumber}?text=${encodeURIComponent(message)}`, "_blank")}>
                        <i className="fa-brands fa-whatsapp"></i>
                            Open to Whatsapp</button> 
                        </div>

                        <div className=" flex flex-col mt-[32px] text-left text-[#222525] space-y-[14px]">
                    <label className="mb-[6px] text-[#000] text-[16px] font-sf-pro box-border font-[700] block leading-[24px]">
                    Your WhatsApp QR Code
                    </label>
                    <div ref={qrRef}>
                                <QRCodeCanvas value={`https://wa.me/${mobileNumber}?text=${encodeURIComponent(message)}`} size={200} />
                    </div>
                            <button onClick={downloadQRCode} className="bg-[#16563A] text-white p-2 mt-4">
                                Download QR Code
                            </button>
                    </div> 

                    </div>
                    
                    
                )}
            </div>
            </div>

            
        </>
    );
}

export default whatsappLink;
