import React from "react";
import SearchBar from "./SearchBar";
import calendar from "./assets/calendar-icon.png";

const HeadItemList = ({
  iconclick,
  SearchChange,
  onfocus,
  onblur,
  onfocussearch,
  onblursearch,
  type,
}) => {
  // const placeholder=document.getElementById('date').value
  return (
    <div
      className="
		flex items-center justify-between flex-wrap
		ml-[4vw] mt-[15px]"
    >
      <div className="flex items-center justify-around">
        <div className="invisible w-[65px]"></div>
        <h1
          className="
			text-[#183c28] text-[33px] font-[700]
			ml-[1vw] mr-[3vw]"
        >
          Grocery To-Do
        </h1>
        {/*<div className="bg-white p-[5.5px] pl-2 rounded-tl-lg rounded-bl-lg">
			<img
			src={calendar}
			alt=""
			className="w-5 m-0 pl-"/>
			</div>*/}
        {/*<input
			// placeholder={placeholder}
			className="w-[7em] font-sans p-1 rounded-tr-lg rounded-br-lg"
			type={type}
			onFocus={onfocus}
			onBlur={onblur}
			id="date"
			/>*/}
      </div>
      <SearchBar
        iconclick={iconclick}
        SearchChange={SearchChange}
        onfocus={onfocussearch}
        onblur={onblursearch}
      />
    </div>
  );
};

export default HeadItemList;
