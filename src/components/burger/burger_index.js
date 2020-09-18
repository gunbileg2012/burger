import React from "react";
import BurgerIngredient from "../burgerIngredient/burgerIngredient_index";
import styles from "./style.module.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/action/BurgerAction";
const Burger = (props) => {
  let items = Object.entries(props.ingredients);
  let content = [];
  items.map((el, index) => {
    for (let i = 0; i < el[1]; i++) {
      content.push(<BurgerIngredient key={index + ":" + i} type={el[0]} />);
    }
  });
  if (content.length === 0)
    content = <p>Хачиртай талхныхаа орцыг сонгоно уу.....</p>;
  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
const mapStateTpPorps = (state) => {
  return {
    ingredients: state.ingredients,
  };
};
const mapDispathchProps = (dispatch) => {
  return {};
};
export default connect(mapStateTpPorps, mapDispathchProps)(withRouter(Burger));
