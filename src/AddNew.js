import React from "react";
import Itemdropdown from "./Itemdropdown";

const AddNew = ({
  newitem,
  namechange,
  quachange,
  unitchange,
  formshow,
  formclear,
  filterednames,
  currentItem,
  setItem,
}) => {
  const itemstotal = filterednames.map((item) => {
    return <Itemdropdown key={item.id} items={item.name} setItem={setItem} />;
  });

  // console.log("filterednames", filterednames);
  // console.log("addnew", itemstotal);

  return (
    <div>
      {/*<p
	        className="cursor-pointer w-[125px] font-reuglar text-[#183c28] text-[22px] ml-[6.5rem] text-left hover:font-semibold"
	        onClick={formshow}
	        >+ &nbsp; Add new </p>*/}
      <form
        id="#form"
        className="
			flex flex-wrap justify-center gap-x-[8.5rem] mr-[5.25rem] ml-[2rem]"
      >
        <div className="flex flex-col">
          <input
            value={currentItem}
            className="
		          border border-x-0 border-t-0 border-[#b3a370] 
		          bg-transparent
		          font-sans"
            type="text"
            name="name"
            onChange={namechange}
            placeholder="Item name"
          />
          <div className="">{itemstotal}</div>
        </div>
        <select
          className="
	          border border-x-0 border-t-0 border-[#b3a370] 
	          bg-transparent
	          font-sans"
          id="category"
          name="category"
        >
          <option value="other" defaultValue>
            Other
          </option>
          <option value="dairy">Dairy</option>
          <option value="fruits/vegs">Fruits/Veggies</option>
          <option value="snacks">Snacks</option>
          <option value="other">Spices</option>
        </select>
        <div>
          <input
            className="
	          border border-x-0 border-t-0 border-[#b3a370] 
	          bg-transparent
	          font-sans text-center w-[5.4rem]
	          focus:border-pink-500"
            type="number"
            name="name"
            onChange={quachange}
            placeholder="Quantity"
          />
          <select
            className="
	          border border-x-0 border-t-0 border-[#b3a370] 
	          bg-transparent
	          font-sans"
            id="category"
            name="category"
            onChange={unitchange}
          >
            <option value="units" defaultValue>
              Unit
            </option>
            <option value="dozens">Dozen</option>
            <option value="kgs">Kilogram</option>
            <option value="litres">Litre</option>
            <option value="ounces">Ounce</option>
          </select>
        </div>
        <input
          type="button"
          value="Add"
          id="enteritem"
          className="
	          float-right
		      m-0
		      px-5
		      py-1.5
		      bg-[#183c28]
		      text-white
		      font-normal
		      font-sans
		      text-md
		      leading-tight
		      rounded-lg
		      shadow-md
		      transition
		      hover:scale-105"
          onClick={newitem}
        />
      </form>
    </div>
  );
};

export default AddNew;
