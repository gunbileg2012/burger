import React, { Component } from "react";
import css from "./style.module.css";
import Spinner from "../../components/spinner/index";
import URL from "../../axios-orders";
import { connect } from "react-redux";
class ContactData extends Component {
  state = {
    name: null,
    city: null,
    street: null,
    loading: false,
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

  sendOrder = () => {
    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      address: {
        name: this.state.name,
        city: this.state.city,
        street: this.state.street,
      },
    };
    this.setState({ loading: true });
    URL.post("orders.json", order)
      .then((response) => {
        console.log("Амжилттай хадгаллаа");
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ loading: false }));
    console.log(this.props);
  };
  render() {
    console.log(this.props);
    return (
      <div className={css.ContactData}>
        {this.state.loading ? (
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
  return { totalPrice: state.totalPrice, ingredients: state.ingredients };
};
const mapDispathchProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispathchProps)(ContactData);
