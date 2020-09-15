import React from "react";
import styles from "./style.module.css";
const BuildControls = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.label}>{props.mn}</div>
      <button className={styles.Less} onClick={() => props.addInd(props.type)}>
        Нэмэх
      </button>
      <button
        className={styles.more}
        onClick={() => props.minusInd(props.type)}
        disabled={props.disabled[props.type]}
      >
        Хасах
      </button>
    </div>
  );
};
export default BuildControls;
