import React, { useState } from "react";
import Queries from "./Queries";

function Faq() {
  return (
    <div className="faq w-[848px] flex flex-col items-start gap-[40px] mt-[120px] mb-[200px] sm:w-[95%] sm:m-auto sm:mt-[100px] sm:mb-[100px]">
      <div className="title text-[48px] font-inter sm:text-[26px] font-extrabold bg-gradient-to-b from-grad1 to-grad2 inline-block text-transparent bg-clip-text">
        FAQ
      </div>
      <div className="content flex flex-col gap-[30px]">
        <Queries
          question={"Can education flashcards be used for all age groups?"}
        />
        <Queries question={"How do education flashcards work?"} />
        <Queries
          question={"Can education flashcards be used for test preparation?"}
        />
      </div>
    </div>
  );
}

export default Faq;
