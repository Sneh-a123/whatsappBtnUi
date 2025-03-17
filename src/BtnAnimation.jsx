import { useState } from "react";

const BtnAnimation = ({ onSelectAnimate }) => {
    const Animation = [
        { name: "off", className: "", style: {} },
      
        { 
          name: "Bounce", 
          className: "animate-bounce", 
          style: { animation: "bounce 1s infinite" } 
        },
      
        { 
          name: "Glow", 
          className: "animate-glow", 
          style: { 
            boxShadow: "0px 0px 10px 3px #4fa166",
            transition: "box-shadow 0.3s ease-in-out"
          } 
        },
      
        { 
          name: "Shake", 
          className: "animate-shake", 
          style: { 
            animation: "shake 0.5s infinite", 
            transformOrigin: "left center right center" 
          } 
        },
      
        { 
          name: "Notification Dot", 
          className: "relative",
          style: { 
            position: "relative"
          }, 
          dotStyle: { 
            content: "''",
            position: "absolute",
            top: "5px",
            right: "130px",
            width: "10px",
            height: "10px",
            backgroundColor: "red",
            borderRadius: "50%"
          } 
        },
      
        { 
          name: "Floating", 
          className: "animate-floating", 
          style: { 
            animation: "floating 2s ease-in-out infinite" 
          } 
        },
      
        { 
          name: "Heart Beat", 
          className: "animate-heartbeat", 
          style: { 
            animation: "heartbeat 1.5s infinite ease-in-out" 
          } 
        }
      ];

  
  const [selectedAnimate, setSelectedAnimate] = useState(Animation[0]);

  const handleSelection = (option) => {
    setSelectedAnimate(option);
    onSelectAnimate(option);
  };

  return (
    <div className="box-border mt-8 text-[#222525] flex-col space-y-4 md:flex-col lg:flex-row">
      <label className="text-black text-lg font-bold block mb-4">
        Button Style
      </label>
      <div className="min-w-[200px] space-y-0 grid grid-cols-1 md:grid-cols-3 gap-4">
        {Animation.map((option, index) => (
          <div key={index} className="flex items-center bg-gray-200 py-3 px-5 rounded-full">
            <input
              name="animate"
              value={option.name} pass kiya
              checked={selectedAnimate.name === option.name} 
              onChange={() => handleSelection(option)} 
              className="font-roboto font-light bg-white border border-gray-300 h-4 w-4 cursor-pointer"
              type="radio"
            />
            <span className="ml-2 font-roboto font-semibold text-[#222525]">
              {option.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BtnAnimation;
