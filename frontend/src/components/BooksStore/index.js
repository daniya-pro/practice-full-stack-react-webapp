import React from "react";
import BookData from "../Bookdata";
import SearchBox from "../Search";
import WeRecommend from "../WeRecomend";
import "./index.css"
const BookStore = () => {
  return (
    <div className="bg-[aliceblue] p-6 pl-[180px]">
<SearchBox/>
      <br/>{" "}
      <WeRecommend/>
      <br/>
<BookData/>
  </div>
  );
};

export default BookStore;
