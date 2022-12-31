import React from "react";
import BookStore from "../BooksStore";
import SideBar from "../SideBar";

const WebPage=()=>{
return (

  <div className="flex !h-0">
      <SideBar/>      
      <div>
      <BookStore />
      </div>
    </div>
)
}
export default WebPage;