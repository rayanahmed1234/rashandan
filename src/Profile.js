import React from "react";
import Navbar from "./Navbar";
import profile from "./assets/Profileforapp1.png";

const Profile = ({ OnRouteChange }) => {
  return (
    <div className="h-[636px] font-sans bg-[#f4ebce]">
      <Navbar OnRouteChange={OnRouteChange} />
      <div
        className="flex items-center justify-center
			mt-[10%] flex-wrap"
      >
        <div className="flex flex-col items-center mr-14">
          <img src={profile} className="w-44 mb-3" alt="" />
          <div className="text-[2em] font-[700] text-[#183c28]">
            App User 001
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-4 text-[1.35em] font-[500]">
          <div className="border-b border-[#ababab] pb-4">Gender</div>
          <div className="border-b border-[#ababab] pb-4">Male</div>
          <div className="border-b border-[#ababab] pb-4">Email</div>
          <div className="border-b border-[#ababab] pb-4">
            AppUser001@rashandan.com
          </div>
          <div>Contact</div>
          <div>xxxx-xxxxxxx</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
