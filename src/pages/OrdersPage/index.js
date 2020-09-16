import { render } from "@testing-library/react";
import React, { Component } from "react";
import css from "./style.module.css";
import URL from "../../axios-orders";
import Spinner from "../../components/spinner/index";
import Order from "../../components/Order";
class OrderPage extends Component {
  state = {
    orders: [],
    loading: false,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    URL.get("/orders.json")
      .then((response) => {
        let arr = Object.entries(response.data);
        arr = arr.reverse();
        this.setState({ orders: arr });
        console.log(this.state.orders);
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          this.state.orders.map((el, index) => (
            <Order key={index} order={el[1]} />
          ))
        )}
      </div>
    );
  }
}
export default OrderPage;
