import React from "react";
import Item from "./Item";

const Items = ({ items, itemremove, itemdown, doneitems, check, setCheck }) => {
  const totalitems = items.concat(doneitems);
  const itemstotal = totalitems.map((item, i) => {
    return (
      <Item
        key={i}
        sno={i + 1}
        name={item.name}
        category={item.category}
        quantity={item.quantity}
        itemremove={itemremove}
        itemdown={itemdown}
        check={check}
        setCheck={setCheck}
      />
    );
  });
  return <div className="ml-[5vw] mr-[10vw]">{itemstotal}</div>;
};

export default Items;
