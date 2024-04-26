import React,{useState} from 'react'
import open from "../Assests/open.png";

function Queries({question , answer}) {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        
      <div className="faqbox w-[848px] sm:w-[100%] sm:h-[48px] h-[58px]  bg-gradient-to-r from-borderGrad via-borderGrad2 to-borderGrad2  pl-[1px] pr-[0.8px] pt-[0.8px] pb-[1px] rounded-[12px] font-inter">
        <div className="content w-full h-full bg-white rounded-[12px] text-[16px] font-semibold flex justify-between items-center px-[24px] text-start sm:px-[12px] sm:py-[6px]">
         {question}
          <div className="img-wrapper w-[24px] h-[24px] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <img src={open} alt="" className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
      {
        isOpen && <div className="vary w-[848px] h-[100px] px-[24px] border-[1px] border-t-0 sm:w-[100%] text-[16px]">
        The Future of Learning!

      </div>
      }
    </div>
  )
}

export default Queries