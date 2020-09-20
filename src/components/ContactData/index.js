import React, { Component } from "react";
import css from "./style.module.css";
import Spinner from "../../components/spinner/index";
import URL from "../../axios-orders";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../redux/action/orderAction";
class ContactData extends Component {
  state = {
    name: null,
    city: null,
    street: null,
  };
  changeName = (e) => {
    this.setState({ name: e.target.value });
  };
  changeStreet = (e) => {
    this.setState({ street: e.target.value });
  };
  changeCity = (e) => {
    this.setState({ city: e.target.value });
  };
  componentDidUpdate() {
    // alert("update");
    if (this.props.finished && !this.props.error)
      this.props.history.replace("/order");
  }
  sendOrder = () => {
    const order = {
      userId: this.props.userId,
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      address: {
        name: this.state.name,
        city: this.state.city,
        street: this.state.street,
      },
    };
    this.props.saveOrder(order);
  };
  render() {
    return (
      <div className={css.ContactData}>
        <div>
          {this.props.error ? (
            `Захиалга хадгалах үед алдаа гарлаа: ${this.props.error}`
          ) : (
            <div></div>
          )}
        </div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div>
            <input
              type="text"
              name="street"
              placeholder="Таны гэрийн хаяг"
              onChange={this.changeStreet}
            />
            <input
              type="text"
              name="city"
              placeholder="Таны хот"
              onChange={this.changeCity}
            />
            <input
              type="text"
              name="name"
              placeholder="Таны нэр"
              onChange={this.changeName}
            />
            <button onClick={this.sendOrder}>Илгээх</button>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    totalPrice: state.burgerReducer.totalPrice,
    loading: state.orderReducer.newOrder.loading,
    finished: state.orderReducer.newOrder.finished,
    error: state.orderReducer.newOrder.error,
    userId: state.signUpReducer.userId,
  };
};
const mapDispathchProps = (dispatch) => {
  return {
    saveOrder: (newOrder) => dispatch(actions.saveOrder(newOrder)),
  };
};
export default connect(
  mapStateToProps,
  mapDispathchProps
)(withRouter(ContactData));
