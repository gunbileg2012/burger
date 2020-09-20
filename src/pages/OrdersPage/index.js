import { render } from "@testing-library/react";
import React, { Component } from "react";
import css from "./style.module.css";
import Spinner from "../../components/spinner/index";
import Order from "../../components/Order";
import { connect } from "react-redux";
import * as actions from "../../redux/action/orderAction";
class OrderPage extends Component {
  state = {
    orders: [],
    loading: false,
  };
  componentDidMount = () => {
    this.props.loadOrders(this.props.userId);
    // this.setState({ loading: true });
    // URL.get("/orders.json")
    //   .then((response) => {
    //     let arr = Object.entries(response.data);
    //     arr = arr.reverse();
    //     this.setState({ orders: arr });
    //   })
    //   .catch((error) => console.log(error))
    //   .finally(() => this.setState({ loading: false }));
  };

  render() {
    return (
      <div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          this.props.orders.map((el, index) => (
            <Order key={index} order={el[1]} />
          ))
        )}
      </div>
    );
  }
}
const mapStateToPorps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    userId: state.signUpReducer.userId,
  };
};
const mapDispathchProps = (dispatch) => {
  return {
    loadOrders: (userId) => dispatch(actions.loadOrders(userId)),
    // minIngredientsName: (name) => dispatch(actions.minIngredientsName(name)),
  };
};
export default connect(mapStateToPorps, mapDispathchProps)(OrderPage);
