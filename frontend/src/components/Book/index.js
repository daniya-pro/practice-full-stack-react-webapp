import React, { useState } from "react";

const Book = ({ data }) => {
  const { imageUri, title, price, writter } = data;

  const [isloading, setloading] = useState(true)
  return (
    <div className="mb-3 flex flex-row">
        <div className=
{isloading?"block":"hidden"}> 
          
  <p className="animate-spin w-[22px] bg-[#30385c] h-[22px] border-white border-dotted border-[1px] ease-in-out inline-block rounded-[100%]">
    

    
</p>
        <p className="text-xs">loading image...</p>
        
        
        </div>
        <img src={imageUri} onLoad={() => { setloading(false) }} className={!isloading ? "inline h-[65px] w-11" : "hidden"} />
      <div className="text-xs font-semibold pl-2 pr-6 flex flex-col">
        <span>{title}</span>
        
  <span>
          <span className="text-slate-500">by </span>
          <span className="text-slate-400">{writter}</span>
        </span>
        <span>${price}</span>
      </div>
    </div>
  );
};
export default Book;
