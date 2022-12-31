import res from "express/lib/response.js";
import Book from "../models/index.js";
import { booksSchema } from "../utils/schema/book.js";
export const createBook = async (req, res) => {
  try {

    const { error, value } = booksSchema.validate(req.body || {})

    if (error) throw error





    let savedData = new Book(value);
    await savedData.save();
    console.log(error, value, "error and val", req.body)


    res.send(savedData);
  } catch (e) {
    res.status(400).send(e);
    console.log(e)
  }
};
 export const getBook  =  async(req,res)=>{
 const books= await Book.find()
 res.send(books)

 
 console.log(books) ;
return books
}

export const getBestBook  =  async(req,res)=>{
  const books= await Book.find({bestsellers:true})
  res.send(books)
 
  
  console.log(books) ;
 return books
 }
 

export const getNewBook= async(req,res)=>{
  const books= await Book.find({new:true,bestsellers:false})
  res.send(books)
 
  
  console.log(books) ;
 return books}
// Book.deleteMany({ title: "hello,"}).then(function(){
//   console.log("Data deleted");
// console.log("new book",AllBooks,"5!"); // Success
// }).catch(function(error){
//   console.log(error); // Failure
// });
//console.log("766645866545557798767655",AllBooks,"dd!");
//const AllBooks = await Book.find();
 