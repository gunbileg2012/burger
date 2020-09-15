import React from "react";
import styles from "./style.module.css";
const BurgerIngredient = (props) => {
  if (props.type === "bread-top")
    return (
      <div className={styles.breadtop}>
        <div className={styles.seed}></div>
        <div className={`${styles.seed}, ${styles.second}`}></div>
        <div className={`${styles.seed}, ${styles.third}`}></div>
        <div className={`${styles.seed}, ${styles.fourth}`}></div>
      </div>
    );

  if (props.type === "meat") return <div className={styles.meat}></div>;
  if (props.type === "cheese") return <div className={styles.cheese}></div>;
  if (props.type === "bacon") return <div className={styles.bacon}></div>;
  if (props.type === "salad") return <div className={styles.salad}></div>;
  if (props.type === "bread-bottom")
    return <div className={styles.breadbottom}></div>;
  return <div>.....</div>;
};
export default BurgerIngredient;
