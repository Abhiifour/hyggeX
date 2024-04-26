import React from "react";
import light from "../Assests/light.png";
import speaker from "../Assests/speaker.png";
import next from "../Assests/forward.png";
import prev from "../Assests/prev.png";
import full from "../Assests/fullscreen.png";
import rotate from "../Assests/rotate.png";
import add from "../Assests/add.png";
import logo from "../Assests/circlelogo.png";
import name from "../Assests/tag.png";

function Main() {
  return (
    <div className="main mt-[40px] sm:w-[100%]">
      <div className="top flex justify-start">
        <div className="title text-[32px] font-bold bg-gradient-to-b from-grad1 to-grad2 inline-block text-transparent bg-clip-text font-montserrat sm:text-[22px]">
          Relations and Functions (Mathematics)
        </div>
      </div>

      <div className="content w-[100%] flex flex-col items-center mt-[60px] ">
        <div className="options flex text-[20px] gap-[40px] font-inter sm:text-[15px]">
          <div className="option1 text-bluetext font-bold border-b-[3px] border-bluetext cursor-pointer" >Study</div>
          <div className="option2 text-quickLinks font-medium cursor-pointer">Quiz</div>
          <div className="option3 text-quickLinks font-medium cursor-pointer">Test</div>
          <div className="option4 text-quickLinks font-medium cursor-pointer">Game</div>
          <div className="option5 text-quickLinks font-medium cursor-pointer">Others</div>
        </div>
        <div className="display mt-[30px] flex flex-col items-center py-[30px] w-[712px] h-[390px] rounded-[42px] bg-gradient-to-tr from-display4 via-display2 to-display1 sm:w-[90%] sm:h-[300px]">
          <div className="top w-[90%] flex justify-between">
            <div className="light w-[34px] h-[34px] sm:h-[24px] sm:w-[24px]">
              <img src={light} alt="" className="w-[34px] h-[34px] sm:h-[24px] sm:w-[24px]" />
            </div>
            <div className="speaker w-[34px] h-[34px] sm:h-[24px] sm:w-[24px]">
              <img src={speaker} alt="" className="w-[34px] h-[34px] sm:h-[24px] sm:w-[24px]" />
            </div>
          </div>

          <div className="text text-[38px] font-bold text-whitetext mt-[100px] font-lato sm:text-[26px] sm:mt-[80px]">
            9 + 6 + 7x - 2x - 3
          </div>
        </div>

        <div className="controls flex w-[600px] gap-[140px] items-center mt-[30px] sm:w-[90%] sm:gap-[30px] sm:justify-center">
          <div className="rotate w-[30px] h-[28px] sm:w-[20px] sm:h-[18px]">
            <img src={rotate} alt="" className=" w-[30px] h-[28px] sm:w-[20px] sm:h-[18px]" />
          </div>
          <div className="center flex items-center gap-[40px] sm:gap-[10px] ">
            <div className="prev w-[60px] h-[60px] sm:w-[40px] sm:h-[40px]">
              <img src={prev} alt="" className="w-[60px] h-[60px] sm:w-[40px] sm:h-[40px]" />
            </div>
            <div className="number font-bold text-[24px] font-inter sm:text-[18px]">01/10</div>
            <div className="next w-[60px] h-[60px] sm:w-[40px] sm:h-[40px]">
              <img src={next} alt="" className="w-[60px] h-[60px] sm:w-[40px] sm:h-[40px]" />
            </div>
          </div>
          <div className="fullscreen w-[30px] h-[28px] sm:w-[20px] sm:h-[18px]">
            <img src={full} alt="" className="w-[30px] h-[28px] sm:w-[20px] sm:h-[18px]" />
          </div>
        </div>
      </div>

      <div className="banner w-[100%] flex justify-between  mt-[100px] sm:w-[90%] sm:m-auto sm:mt-[80px]">
        <div className="left w-[217px] flex justify-between sm:w-[40%]">
          <div className="circle w-[80px] h-[80px] sm:w-[40px] sm:h-[40px] rounded-full flex justify-center items-center shadow-shadowcolor shadow-blur shadow-[-2px_-2px_20px_1px_rgba(0,0,0,0.1),_2px_2px_30px_1px_rgba(45,78,255,0.15)]">
            <div className="logo w-[44px] h-[34px] sm:w-[24px] sm:h-[14px]">
              <img src={logo} alt="" className="w-[44px] h-[34px] sm:w-[24px] sm:h-[14px]" />
            </div>
          </div>
          <div className="name">
            <div className="img-wrapper w-[115px] h-[60px] sm:w-[80px] sm:h-[40px]">
              <img src={name} alt="" className="w-[115px] h-[60px] sm:w-[80px] sm:h-[40px]" />
            </div>
          </div>
        </div>
        <div className="right flex items-center gap-[8px]">
          <div className="create-icon w-[60px] h-[60px] cursor-pointer sm:w-[40px] sm:h-[40px]">
            <img src={add} alt="" className="w-[60px] h-[60px] sm:w-[40px] sm:h-[40px]" />
          </div>
          <div className="text font-bold text-[28px] sm:text-[16px] bg-gradient-to-b from-grad1 to-grad2 inline-block text-transparent bg-clip-text font-inter ">
            Create Flashcard
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
