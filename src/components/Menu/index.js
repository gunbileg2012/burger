import React, { Fragment } from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";
import { connect } from "react-redux";
const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      {props.userId ? (
        <Fragment>
          <MenuItem exact url="/">
            Шинэ захиалга
          </MenuItem>
          <MenuItem url="/order">Захиалга</MenuItem>
          <MenuItem url="/logout">Гарах</MenuItem>
        </Fragment>
      ) : (
        <Fragment>
          <MenuItem url="/login">Нэвтрэх</MenuItem>
          <MenuItem url="/signUp">Бүртгүүлэх</MenuItem>
        </Fragment>
      )}
    </ul>
  </div>
);
const mapStateToProps = (state) => {
  return {
    userId: state.signUpReducer.userId,
  };
};
export default connect(mapStateToProps, null)(Menu);
