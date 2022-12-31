import React, { useEffect, useState } from "react";
import Book from "../Book";

const NewReleasesBooks = () => {
const  [bookDetails,setBookDetails]=useState([])

useEffect(()=>{
fetch("http://localhost:3002/book-store/getNew")
 .then(result => result.json()
  
 ).then(e=>{




 if(!bookDetails.length)setBookDetails(e)
 

  console.log(e,"new", e)

  
})
               
});
bookDetails.splice(3, bookDetails.length);

return bookDetails.map(d=><Book data={d} />)
}

export default NewReleasesBooks;
