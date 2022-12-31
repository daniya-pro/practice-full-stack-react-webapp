
import React, { useEffect, useState } from "react";

import Books from "../Books/books.js"; 
const BookData = () => {

  
  
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
return bookDetails.map(d=><Books data={d} />)
};

export default BookData;
 