import React from "react";
import searchicon from "./assets/Search_Icon.png";

const SearchBar = ({ iconclick, SearchChange, onblur, onfocus }) => {
  return (
    <div className="flex">
      <input
        id="searchbar"
        className="mr-[135px] hidden rounded-md p-2 border-1"
        type="search"
        placeholder="Search by item name"
        onChange={SearchChange}
        onFocus={onfocus}
        onBlur={onblur}
      />
      <img
        id="searchicon"
        src={searchicon}
        className="mr-[194px] w-[41px] h-auto rotate-[-11.31deg]"
        alt=""
        onClick={iconclick}
      />
    </div>
  );
};

export default SearchBar;
