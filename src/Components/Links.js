import React from "react";
import home from "../Assests/HomeLinks.png";
import right from "../Assests/NavRight.png";

function Links() {
  return (
    <div className="links mt-[40px] font-inter sm:w-[90%] sm:ml-[10px]">
      <div className="main text-[18px] flex items-center sm:text-[14px]">
        <div className="homeicon w-[30px] h-[30px]">
          <img src={home} alt="" className="w-[30px] h-[30px]" />
        </div>
        <div className="right w-[24px] h-[24px]">
          <img src={right} alt="" className="w-[24px] h-[24px]" />
        </div>
        <div className="first text-quickLinks font-medium ">
            Flashcard
        </div>
        <div className="right w-[24px] h-[24px]">
          <img src={right} alt="" className="w-[24px] h-[24px]" />
        </div>
        <div className="second text-quickLinks font-medium">
            Mathematics
        </div>
        <div className="right w-[24px] h-[24px]">
          <img src={right} alt="" className="w-[24px] h-[24px]" />
        </div>
        <div className="third text-bluetext font-semibold">
            Relation and Function
        </div>
      </div>
    </div>
  );
}

export default Links;
