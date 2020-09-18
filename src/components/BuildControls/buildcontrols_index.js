import React from "react";
import BuildControl from "../BuildControl/buildcontol_index";
import styles from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/action/BurgerAction";
const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <p>Бургерийн үнэ: {props.totalPrice}₮</p>
      {Object.keys(props.names).map((e, index) => {
        return (
          <BuildControl
            key={index}
            disabled={props.disabled}
            minusInd={props.minIngredientsName}
            addInd={props.addIngredientsName}
            type={e}
            mn={props.names[e]}
          />
        );
      })}

      <button onClick={props.show} disabled={props.totalPrice === 0}>
        Захиалах
      </button>
    </div>
  );
};
const mapStateTpPorps = (state) => {
  return {
    totalPrice: state.totalPrice,
    names: state.names,
  };
};
const mapDispathchProps = (dispatch) => {
  return {
    addIngredientsName: (name) => dispatch(actions.addIngredientsName(name)),
    minIngredientsName: (name) => dispatch(actions.minIngredientsName(name)),
  };
};
export default connect(mapStateTpPorps, mapDispathchProps)(BuildControls);
