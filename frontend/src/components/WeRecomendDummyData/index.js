import React, { useState,useEffect } from "react";
import RecomendedBook from "../WeRecommendBook";
import "./index.css"
import Rick from "./assets/images/RickRiordan.jpeg";
import { data } from "autoprefixer";
const DummyData =  () => {
  
  const [bookDetails, setBookDetails]=useState([])
    
// console.log(bookDetails)
// for (let i = 0; i < bookDetails.length; i++) {

//   if (bookDetails[i].bestsellers === false || bookDetails[i].bestsellers === "false") {
//     continue;
//   } else {
//     setrecomended(bookDetails[i]);
//     break;
//   }

// }
useEffect(()=>{
fetch("http://localhost:3002/book-store/getBestSeller")
 .then(result => result.json()
  
 ).then(e=>{




 if(!bookDetails.length)setBookDetails(e)
 

  console.log(e,"ARRR", e)

  
})
  .catch(error => console.log('error', error));
console.log(bookDetails)

 

},[]);

console.log(bookDetails.length
  ?true:false,bookDetails)
 

return(

<div> 

    <br/>

{bookDetails.length ?<RecomendedBook data={bookDetails[0]}/>:<div className="relative"><span className="spin w-[39px] h-[38px] bg-[#30385c] border-white border-dotted border-[9px] ease-in-out inline-block rounded-[100%]"></span> <p className="load">loading...</p></div>
}
</div>
 

)





};


export default DummyData;