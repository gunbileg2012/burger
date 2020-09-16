import React, { Component } from "react";
import css from "./style.module.css";
import Burger from "../../components/burger/burger_index";
import Button from "../../components/Gerenal/Button";
export class ShippingPage extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 0,
    confirmOrder: false,
    lastCustomerName: "N/A",
    loading: false,
  };
  componentDidMount = () => {
    const query = new URLSearchParams(this.props.location.search);
    let ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = param[1];
    }
    this.setState({ ingredients });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <Button clicked={this.goBack} text="Буцах" />
      </div>
    );
  }
}
