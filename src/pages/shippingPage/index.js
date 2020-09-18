import React, { Component } from "react";
import css from "./style.module.css";
import Burger from "../../components/burger/burger_index";
import Button from "../../components/Gerenal/Button";
import { Route } from "react-router-dom";
import ContactData from "../../components/ContactData";
import { connect } from "react-redux";
class ShippingPage extends Component {
  canelOrder = () => {
    this.props.history.goBack();
  };
  showContactData = () => {
    this.props.history.replace("/ship/contact");
  };
  render() {
    return (
      <div className={css.ShippingPage}>
        <p>
          {this.props.totalPrice}₮ Таны захиалга амттай байх болно гэж найдаж
          байна
        </p>
        <Burger />
        <Button clicked={this.canelOrder} text="Буцах" />
        <Button
          clicked={this.showContactData}
          text="Хүргэлтийн мэдээлэл оруулах"
        />

        <Route path="/ship/contact">
          <ContactData />
        </Route>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { totalPrice: state.totalPrice, ingredients: state.ingredients };
};
const mapDispathchProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispathchProps)(ShippingPage);
