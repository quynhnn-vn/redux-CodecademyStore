import React, { useEffect } from "react";

import {
  calculatePrice,
  getCurrencySymbol,
} from "../../utilities/utilities.js";
import { addItem } from "../cart/cartSlice";
import { loadData } from "./inventorySlice";

export const Inventory = ({ inventory, currencyFilter, dispatch }) => {
  const onMount = () => {
    dispatch(loadData());
  };
  useEffect(onMount, [dispatch]);

  const onClickHandler = (inventoryItem) => {
    dispatch(addItem(inventoryItem));
  };

  if (inventory.length === 0) {
    return <p> Sorry, no products are currently available... </p>;
  }

  return <ul id="inventory-container">{inventory.map(createInventoryItem)}</ul>;

  function createInventoryItem(inventoryItem) {
    const { name, price, img } = inventoryItem;
    const displayPrice = calculatePrice(price, currencyFilter);
    return (
      <li className="item" key={name}>
        <img src={img} alt={""} />
        <h3>{name}</h3>
        <h3 className="price">
          {getCurrencySymbol(currencyFilter)}
          {displayPrice.toFixed(2)} {currencyFilter}
        </h3>
        <button
          className="add-to-cart-button"
          onClick={() => onClickHandler(inventoryItem)}
        >
          Add to Cart
        </button>
      </li>
    );
  }
};
