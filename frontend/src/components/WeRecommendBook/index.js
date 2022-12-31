import React, { useState } from "react";
import './index.css'
import ReactStars from "react-rating-stars-component";

const auther = React.createContext("hello-world")



//do id for fetch first! and then do context--- too lazy to do today lol ;-; oki byeeee!

const RecomendedBook = ({ data }) => {
  const [isloading, setloading] = useState(true)



  const { imageUri, title, writter, rating, description, price } = data;
  console.log(data)
  return (

    <div>

      <div className="flex p-6 bg-white"><br />

        <div className=
{isloading?"block":"hidden"}> 
          
  <p className="animate-spin w-[39px] bg-[#30385c] h-[38px] border-white border-dotted border-[17px] ease-in-out inline-block rounded-[100%]">
    

    
</p>
        <p>loading image...</p>
        
        
        </div>

        <img src={imageUri} onLoad={() => { setloading(false) }} className={!isloading ? "h-[50%] w-[50%] max-w-[300px] min-w-[100px] max-h-[300px] object-contain shadow-ui " : "hidden"} />
        <div className="ml-5">
          <h1 className="text-[3vw]">{title} </h1>
          <p className="text-slate-400 font-semibold">
            by
            <span className="text-[2vw] text-[#fc3b49]"> {writter}</span>
          </p>
          <div>
            <ReactStars
              value={rating}
              activeColor="#fc3b49"
              starSpacing="2px"
              size={12}
            /></div>
          <div><p className="text-slate-400 text-[2vw]">{description}</p>

            <p className="font-semibold">${price}</p>
          </div>
        </div></div>
    </div>
  );
};

//               onChange={ratingChanged}

// const ratingChanged = (newRating) => {

//   console.log(newRating);



// };

export default RecomendedBook;