import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helpers/helper";

import styles from "./Card.module.css";
import { useCart } from "../context/CartContext";

function Card({ data }) {
  const { id, title, image, price } = data;
  const [state, dispatch] = useCart();
  console.log(state);
  const clickHandler = () => {
    dispatch({ type: "ADD_ITEM", payload: data });
  };
  return (
    <div className={styles.card}>
      <img src={image} alt={title} style={{ width: "150px" }} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails></TbListDetails>
        </Link>
        <div>
          <button onClick={clickHandler}>
            <TbShoppingBagCheck></TbShoppingBagCheck>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
