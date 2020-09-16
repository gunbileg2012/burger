import React from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";
const Menu = () => (
  <div>
    <ul className={css.Menu}>
      <MenuItem exact url="/">
        Шинэ захиалга
      </MenuItem>
      <MenuItem url="/order">Захиалга</MenuItem>
    </ul>
  </div>
);
export default Menu;
