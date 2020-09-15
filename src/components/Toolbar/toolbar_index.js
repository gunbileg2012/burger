import React from "react";
import styles from "./toolbar.module.css";
import Logo from "../Logo/index";
import Menu from "../Menu";
import HamBurgerMenu from "../HamBurgerMenu";
const Toolbar = (props) => {
  console.log("Toolbar");
  return (
    <header className={styles.Toolbar}>
      <div>
        <HamBurgerMenu toggleSideBar={props.toggleSideBar} />
      </div>
      <div>
        <Logo />
      </div>
      <nav className={styles.hideMobile}>
        <Menu />
      </nav>
    </header>
  );
};
export default Toolbar;
