import React from "react";
import removeIcon from "./assets/removeIcon.png";

const Item = ({
  sno,
  name,
  category,
  quantity,
  itemremove,
  itemdown,
  check,
  setCheck,
}) => {
  return (
    <div>
      <div
        id="item"
        className="flex justify-start items-center
			font-regular text-[22px]
			text-left text-[#183c28]
			pt-[6px] pb-[5px]"
      >
        {/*<div className="invisible w-[65px]"></div>*/}
        <input
          id="checkbox"
          type="checkbox"
          className="w-4 p-4 mr-[1.5vw] border-radius-1 border-5"
          onChange={(e) => setCheck(e.target.checked)}
          // onClick={itemdown}
          defaultChecked={check}
        />
        <div className="mr-[1.5vw]">{sno}</div>
        <div id="itemname" className={check ? "line-through" : ""}>
          {name}
        </div>
        <div className="ml-[auto] mr-[14vw]"> {quantity} </div>
        <button onClick={itemremove} className="opacity-70 mr-[5vw]">
          <img
            alt="remove-icon"
            src={removeIcon}
            className="w-5 opacity-70 hover:opacity-100"
          />
        </button>
      </div>
      <div className="h-[1px] bg-[#8f6d00] opacity-100 mt-3 mb-3 opacity-40 mr-6"></div>
    </div>

    // <div
    // className="
    // font-regular text-[22px] ml-[1.5vw] pl-[1.5vw]
    // text-left text-[#183c28]">Notes</div>
  );
};

export default Item;
