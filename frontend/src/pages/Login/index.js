import React from "react";
import "./index.css";
import fb from "./assets/pics/fb.png";
import twitter from "./assets/pics/twitter.png";
import insta from "./assets/pics/insta.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-regular-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'

const LoginPage = () => {

  return (
    <div className="mdq h-[100vh] w-[inherit] bg-slate-500">
    <div className="center font-mono">
<br/>
    <div className="flex justify-center items-center min-h-[90vh]">
        <form className="rounded bg-white">
          <span className="text-center inline-block w-[63vh]">
         <br />
            <br /> <h1 className="font-extrabold text-2xl">Login</h1>
            <br />
            <div className="text-left pl-5 pr-5">
              <label>Username:</label>
              <br />
         <div className="border-b-2 border-gray-200 flex">
        
     <FontAwesomeIcon icon={faUser} className="text-slate-400 h-4 pt-1 pr-1"/>         <input
                type="text"
                className="w-[100%] focus-visible:outline-none"
                placeholder="Enter Username"
                required
              />

</div>






              
              <br />
            </div>
            <div className="text-left pl-5 pr-5 mb-[10px]">
              <label>Password:</label>
              <br />
              
         <div className="border-b-2 border-gray-200 flex">
        
        <FontAwesomeIcon icon={faLock} className="text-slate-400 h-4 pt-1 pr-1"/>         <input
                   type="text"
                   className="w-[100%] focus-visible:outline-none"
                   placeholder="Enter Password"
                   required
                 />
   
   </div>
            </div>
            <div className="flex justify-between justify-around">
              <div>
                {" "}
                <label className="text-[13px] inline-block text-left">
                  <input type="checkbox" className="h-[10px]" />
                  Remember me
                </label>
              </div>
              <div>
                <a
                  href="#"
                  className="text-[13px] decoration-slate-500 underline"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            
            <br />
        
            <button
              className="border-[#64738b] w-[90%] text-[#64738b] transition-smooth duration-[0.3ms] border-x-2 border-y-2 hover:bg-slate-500 hover-border-slate-500 hover:text-white"
              type="submit"
            >
              Login
            </button>
      
            <br />
            <br />             <br/> 
            <div>
              <p className="text-[13px] mb-3">Or Sign Up Using</p>
              <div className="">
  
                <img className="" src={fb} />
                <img className="mr-3 ml-2" src={twitter} />
                <img className="" src={insta} />
              </div>
            </div>

            <br />
            <br />
         <br/>
      

            <div><p>or using</p>
                        <a href="#" className="underline"> SIGN UP</a></div>
            
       
      <br/>      
          </span>
        </form>
      </div>
    </div>
    </div>
  );
};
export default LoginPage;

/* <div>
<label>Username/Gmail :</label>
<br/><input type="text"/>
</div><div><label>Password:</label><br/>
<input type="text"/>
</div> */

/** */
