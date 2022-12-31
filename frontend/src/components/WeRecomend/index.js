import React from "react";
import DummyData from "../WeRecomendDummyData";
const  WeRecommend = ({ props }) => {
  return (
    <div>
      <h1 className="font-medium text-[20px]">We recommend</h1>
   <div><DummyData/> </div>
    </div>
  );
};
export default WeRecommend;
