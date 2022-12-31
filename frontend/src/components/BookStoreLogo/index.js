 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faWindowMinimize } from "@fortawesome/free-regular-svg-icons";
 const Bookstorelogo = () => {

    return (  
 <div className="pt-[15px] pb-[15px] pr-14 text-white flex flex-row">
  <div className="pt-[2px] pr-[6px]">
   <FontAwesomeIcon icon={faWindowMinimize} className="block h-[1px] w-4 border-b-4 border-white border-solid rounded-[100px]"/>
   <FontAwesomeIcon icon={faWindowMinimize} className="block h-[1px] w-4 border-b-4 border-white border-solid rounded-[100px] ml-1"/>
   <FontAwesomeIcon icon={faWindowMinimize} className="block h-[1px] w-4 border-b-4 border-white border-solid rounded-[100px]" />
</div><div><p className="font-extrabold text-[small]">BOOKSTORE</p></div></div>    );
  };
  export default Bookstorelogo;
  
  
  //flex: 0 0 80%