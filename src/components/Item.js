import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function handleAddRemove(){
    setInCart(!inCart)
  }

  const addRemove = inCart ? "Remove From Cart":"Add to Cart"
  const addRemoveClass = inCart ? "in-cart":""

  return (
    <li className={addRemoveClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddRemove}>{addRemove}</button>
    </li>
  );
}

export default Item;
