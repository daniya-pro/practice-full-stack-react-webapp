import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const SearchBox = ()=>{

return(
<span className="bg-[white] p-1">
      <FontAwesomeIcon
        icon={faSearch}
        className="text-[gainsboro] bg-white border-[gainsboro] mr-[6px]"
      />

      <input placeholder="Search Books" type="text" /> 
      </span>
)





}
export default SearchBox;