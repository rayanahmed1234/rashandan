import React from "react";
import Navbar from "./Navbar";
import settings from "./assets/SettingsIcon.png";
import "./Settings.css";

const Settings = ({ OnRouteChange }) => {
  return (
    <div className="h-[636px] font-sans bg-[#f4ebce]">
      <Navbar OnRouteChange={OnRouteChange} />
      <div
        className="flex justify-center flex-col
			mt-[2%] ml-[4%]"
      >
        <div className="flex items-center">
          <img src={settings} className="w-16" alt="" />
          <div className="text-[2em] font-[700] text-[#183c28] ml-3.5">
            Settings
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-4 text-[1.35em] font-[500] ml-20 w-[50%]">
          <div className="border-b border-[#ababab] pb-4">Font-size</div>
          <div className="border-b border-[#ababab] pb-4 text-right">
            Medium
          </div>
          <div className="border-b border-[#ababab] pb-4">Notifications</div>
          <div className="flex items-center justify-end border-b border-[#ababab] pb-4">
            <div>On</div>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round modechanger"></span>
            </label>
          </div>
          <div>Mode</div>
          <div className="text-right">Light</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
