import React from "react";
import Button from "../../components/Gerenal/Button";
import { connect } from "react-redux";
import * as actions from "../../redux/action/BurgerAction";

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
        <b>Захиалгын нийт дүн: {props.totalPrice} ₮</b>
      </p>
      <Button clicked={props.hideFunc} text="Татгалхзах" />
      <Button clicked={props.continue} text="Үргэлжлүүлэх" />
    </div>
  );
};
const mapStateTpPorps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    names: state.names,
  };
};
const mapDispathchProps = (dispatch) => {
  return {};
};
export default connect(mapStateTpPorps, mapDispathchProps)(OrderSummery);
