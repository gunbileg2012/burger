import React from "react";
import Button from "../../components/Gerenal/Button";
const OrderSummery = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон орцууд</p>
      <ul>
        {Object.keys(props.ingredients).map((el, index) => (
          <li key={index}>
            {props.names[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>
        <b>Захиалгын нийт дүн: {props.price} ₮</b>
      </p>
      <Button clicked={props.hideFunc} text="Татгалхзах" />
      <Button clicked={props.continue} text="Үргэлжлүүлэх" />
    </div>
  );
};
export default OrderSummery;
