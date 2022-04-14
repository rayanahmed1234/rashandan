import React from "react";
import image1 from "./assets/RashanDan logo square.png";
import settings from "./assets/Settingforapp.png";
import add from "./assets/Addforapp.png";
import history from "./assets/Historyforapp.png";
import profile from "./assets/Profileforapp.png";

const Navbar = ({ OnRouteChange, route }) => {
  if (true) {
    return (
      <div className="flex justify-between items-center bg-[#183c28] h-20">
        <div className="flex justify-start items-center">
          <img src={image1} className="ml-[4vw] w-[65px] h-auto" alt="" />
          <h1 className="ml-[1vw] font-[600] font-sans text-[50px] text-[#f4ebce]">
            RASHANDAN
          </h1>
        </div>
        <div className="flex justify-end">
          <p
            className="cursor-pointer mr-[1.75vw] w-8 h-auto hover:rotate-12"
            onClick={() => OnRouteChange("settings")}
          >
            <img src={settings} alt="" />
          </p>
          <p
            className="cursor-pointer mr-[1.75vw] w-8 h-auto hover:grow-100"
            onClick={() => OnRouteChange("settings")}
          >
            <img src={add} alt="" className="" />
          </p>
          <p
            className="cursor-pointer mr-[1.75vw] w-8 h-auto"
            onClick={() => OnRouteChange("settings")}
          >
            <img src={history} alt="" className="" />
          </p>
          <p
            className="cursor-pointer mr-[2.5vw] w-8 h-auto"
            onClick={() => OnRouteChange("profile")}
          >
            <img src={profile} alt="" className="" />
          </p>
        </div>
      </div>
    );
  }
};

export default Navbar;
