import React from "react";
import css from "./style.module.css";
import Shadow from "../Shadow/index";
const modal = (props) => {
  return (
    <div>
      <Shadow show={props.show} />
      <div
        onClick={props.hideFunc}
        className={css.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
export default modal;
