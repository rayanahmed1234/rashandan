import React from "react";
import Logo from "./assets/RashanDan logo square.png";
import grocball from "./assets/GroceryBall.png";
import fblogo from "./assets/Facebook-logo-2021.png";
import google from "./assets/google-logo.png";

const Login = ({ OnRouteChange }) => {
  return (
    <div className="font-sans flex h-[636px]">
      <div className="flex flex-col items-center bg-[#183c28] w-[50%]">
        <img
          src={Logo}
          className="self-start m-[10px] w-[65px] h-auto"
          alt=""
        />
        <img
          src={grocball}
          className="w-[64%] mt-6 h-auto animate-[spin_25s_linear_infinite]"
          alt=""
        />
        <h1
          className="
				text-[#f9edc7] text-[33px] font-[600]
				mt-12 text-center"
        >
          Welcome to RASHANDAN!
        </h1>
      </div>
      <div
        className="
		 	flex flex-col items-center
		 	bg-[#f9edc7] w-[50%]"
      >
        <h1
          className="
				text-[#183c28] text-[3.75rem] font-[700]
				mt-5 text-center"
        >
          LOGIN
        </h1>
        <div className="block p-6 w-[60%] max-w-sm">
          <form className="">
            <div className="form-group mb-5">
              <label
                htmlFor="exampleInputEmail1"
                className="
				  	  form-label inline-block
				  	  text-gray-700 font-[600] text-[1.2rem]"
              >
                Username
              </label>
              <input
                type="text"
                className="form-control
				        block
				        w-full
				        px-3
				        py-1.5
				        text-base
				        font-normal
				        text-gray-700
				        bg-white bg-clip-padding
				        border border-solid border-gray-300
				        rounded-lg
				        transition
				        ease-in-out
				        m-0
				        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Enter Username"
              />
            </div>
            <div className="form-group mb-5">
              <label
                htmlFor="exampleInputPassword1"
                className="font-[600] form-label inline-block text-gray-700 text-[1.2rem]"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control block
				        w-full
				        px-3
				        py-1.5
				        text-base
				        font-normal
				        text-gray-700
				        bg-white bg-clip-padding
				        border border-solid border-gray-300
				        rounded-lg
				        transition
				        ease-in-out
				        m-0
				        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword1"
                placeholder="Enter Password"
              />
              <small
                id="emailHelp"
                className="text-right block mr-1 mt-1 text-base text-gray-600"
              >
                Forgot Password?
              </small>
            </div>
            <button
              type="submit"
              className="
				      float-right
				      m-0
				      px-7
				      py-2
				      bg-[#183c28]
				      text-white
				      font-normal
				      font-sans
				      text-lg
				      leading-tight
				      rounded-lg
				      shadow-md
				      transition
				      hover:scale-105"
              onClick={() => OnRouteChange("main")}
            >
              Login
            </button>
          </form>
        </div>
        <div className="text-center mt-3">
          <p className="font-medium text-xl"> Or SignUp with </p>
          <div className="flex justify-around mt-3 mb-4">
            <a href="https://www.google.com" target="_blank">
              <img src={google} className="w-[2.5em] h-auto" alt="" />
            </a>
            <a href="https://www.google.com" target="_blank">
              <img src={fblogo} className="w-[2.25em] h-auto" alt="" />
            </a>
          </div>
          <p className="font-medium text-xl mt-2 mb-4">OR</p>
          <button
            className="
					  px-7
				      py-2
				      bg-[#183c28]
				      text-white
				      font-normal
				      font-sans
				      text-lg
				      leading-tight
				      rounded-lg
				      shadow-md
				      transition
				      hover:scale-105"
            onClick={() => OnRouteChange("signup")}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
