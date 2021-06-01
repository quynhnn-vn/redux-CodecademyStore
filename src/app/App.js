import React from "react";

import { Inventory } from "../features/inventory/Inventory";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter";
import { Cart } from "../features/cart/Cart";
import { SearchTerm } from "../features/searchTerm/SearchTerm";

export const App = ({ state, dispatch }) => {
  // Search an item matching by a term
  const getFilteredItems = (items, searchTerm) => {
    return items.filter((items) =>
      items.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  const visibleInventory = getFilteredItems(state.inventory, state.searchTerm);
  
  return (
    <div>
      <div className="header-container">
        <img src="https://cdn.shopify.com/s/files/1/0090/2932/0804/files/6db765239fe590ca96b7b837b399f03138a5f73f_360x_5233b1aa-5b0a-4d51-a2ea-42cf8775045f_300x300.png?v=1557113190" alt=""/>
        <h1>Codecademy Store</h1>
      </div>
      <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Inventory
        inventory={visibleInventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};
