import React from "react";
import logo from "../Assests/hyggex.png";

function Navbar() {
  return (
    <div className="nav flex justify-between w-[100%] mt-[25px] font-inter sm:w-[100%] sm:flex-col sm:gap-[20px] sm:ml-[10px]">
      <div className="logo w-[190] h-[40px] sm:w-[140px] sm:h-[30px]">
        <img src={logo} alt="" className=" w-[190] h-[40px] sm:w-[140px] sm:h-[30px]" />
      </div>
      <div className="links flex w-[525px] text-[18px] gap-[40px] items-center sm:w-[95%] sm:text-[14px] sm:justify-center sm:gap-[20px] ">
        <div className="l1 text-textColor cursor-pointer">Home</div>
        <div className="l2 text-textColor cursor-pointer">Flashcard</div>
        <div className="l3 text-textColor cursor-pointer">Contact</div>
        <div className="l4 text-textColor cursor-pointer">FAQ</div>
        <div className=" cursor-pointer login-btn bg-gradient-to-b from-grad1 to-grad2 w-[128px] h-[48px] rounded-[32px] text-[18px] text-white flex items-center justify-center sm:text-[14px] sm:w-[100px] sm:h-[30px] ">
          Login
        </div>
      </div>
    </div>
  );
}

export default Navbar;
