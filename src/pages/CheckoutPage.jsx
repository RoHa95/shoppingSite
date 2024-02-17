import React from "react";
import { useCart } from "../context/CartContext";
import BasketCard from "../components/BasketCard";
function CheckoutPage(props) {
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };
  return (
    <div>
      <div>
        {state.selectedItems.map((p) => (
          <BasketCard key={p.id} data={p} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
