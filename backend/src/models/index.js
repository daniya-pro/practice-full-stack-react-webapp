import mongoose from "mongoose";
const Schema = mongoose.Schema;
const bookSchema = new Schema(
  {
    title: { type: String, required: true },
     writter: { type: String, required: true },
    rating: { type: Number, required: true },
    price :{type:Number,required:true},
    new : {type:Boolean ,required:true },
    imageUri : {type:String ,required:true },
    bestsellers : {type:Boolean, required:true },
    description:{type:String, required:true}
  },
  { timestamps: true }
);
 const Book=mongoose.model('book',bookSchema)
 export default Book
