import React from "react";
import BuildControl from "../BuildControl/buildcontol_index";
import styles from "./style.module.css";
const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <p>Бургерийн үнэ: {props.totalPrice}₮</p>
      {Object.keys(props.names).map((e, index) => {
        return (
          <BuildControl
            key={index}
            disabled={props.disabled}
            minusInd={props.minusInd}
            addInd={props.addInd}
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
export default BuildControls;
