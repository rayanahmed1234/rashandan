import React from "react";

const Itemdropdown = ({ items, setItem }) => {
  return (
    <div className="bg-[#FFFFFF]">
      <h1
        className="cursor-pointer hover:text-blue-600"
        onClick={() => setItem(items)}
      >
        {items}
      </h1>
    </div>
  );
};

export default Itemdropdown;
