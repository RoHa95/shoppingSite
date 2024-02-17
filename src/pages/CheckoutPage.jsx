import React from "react";
import { useCart } from "../context/CartContext";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";

import styles from "./CheckoutPage.module.css";

function CheckoutPage(props) {
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };
  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <p style={{ margin: "10px" }}>Empety!</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((p) => (
          <BasketCard key={p.id} data={p} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
