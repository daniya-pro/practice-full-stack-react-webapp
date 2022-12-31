import React from "react";
import ReactStars from "react-rating-stars-component";

const Books = (inf) => {
  const { data } = inf;
  const { imageUri, title, writter, ratings, price } = data;
console.log(data)
  return (
    <span className="bg-white w-[24.6%] max-w-[700px]
    min-w-[100px] inline-block p-3 mr-[5px] mybook">
      <img alt="book" className="" src={imageUri} />
   <div className="">   <p className="font-bold text-xs text-ellipsis whitespace-nowrap overflow-hidden">{title}</p></div>
      <p className="text-xs">
        <span className="text-slate-400">by</span>{" "}
        <span className="font-semibold text-slate-500">{writter}</span>
      </p>

      <div>
        <ReactStars 
          size="16px"
          starSpacing="0px"
          value={ratings}
          starRatedColor="#fc3b49"
        
        />
      </div>
      <p>${price}</p>
    </span>
  );
};

export default Books;

/* width: 71px; */
/* height: 41px; */