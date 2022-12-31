import React, { useEffect, useState } from "react";

import stedman from "./assets/images/ MLStedman.jpeg"
 import Book from "../Book";
 import peter from "./assets/images/peterwohlleben.jpeg"
import ray from "./assets/images/RayBradbury.jpeg"
const BestSellersBooks = () => {
  const [bookDetails,setBookDetails]=useState([])

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
    
    bookDetails.splice(4, bookDetails.length);

console.log(bookDetails)
return bookDetails.map(d=><Book data={d} />)

}

  export default BestSellersBooks;
  