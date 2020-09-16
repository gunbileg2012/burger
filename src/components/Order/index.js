import React from "react";
import css from "./style.module.css";
const Order = (props) => (
  <div className={css.Order}>
    <p>
      Хаяг:
      {props.order.address.name +
        " | " +
        props.order.address.street +
        " | " +
        props.order.address.city}
    </p>
    <p>
      Орц:
      {" Гахайн мах: " +
        props.order.ingredients.bacon +
        " | " +
        " Бяслага: " +
        props.order.ingredients.cheese +
        " | " +
        " Мах: " +
        props.order.ingredients.meat +
        " Салад: " +
        props.order.ingredients.salad}
    </p>
    <p>
      <b>Үнийн дүн: {props.order.totalPrice}</b>
    </p>
  </div>
);
export default Order;
