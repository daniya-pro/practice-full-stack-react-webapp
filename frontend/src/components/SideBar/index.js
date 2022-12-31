import React from "react";
import Bookstorelogo from "../BookStoreLogo";
import NewReleases from "../NewReleases";
import BestSellers from "../BestSellers";

const SideBar = () => {
  return (
    <div className="bg-[#2b3153] flex fixed w-[170px] flex-col">
      <div className="pl-3">
        <Bookstorelogo />
         
      </div>
      <div className="bg-[#30385c] h-[94vh] pl-3">
        <NewReleases /> <BestSellers />
      </div>
    </div>
  );
};
export default SideBar;
