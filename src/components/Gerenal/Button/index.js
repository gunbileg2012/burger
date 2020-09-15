import React from "react";
import css from "./style.module.css";
const Button = (props) => (
  <button onClick={props.clicked} className={css.Button}>
    {props.text}
  </button>
);
export default Button;
