import React, { Component } from "react";
import BurderComp from "../../components/burger/burger_index";
import BuildControls from "../../components/BuildControls/buildcontrols_index";
import Modal from "../../components/Gerenal/modal/index";
import OrderSummery from "../../components/orderSummary";
import URL from "../../axios-orders";
import Spinner from "../../components/spinner/index";
import { connect } from "react-redux";
import * as actions from "../../redux/action/BurgerAction";
const priceList = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
class BurderBuilder extends Component {
  state = {
    confirmOrder: false,
    loading: false,
  };
  componentDidMount = () => {
    this.setState({ loading: true });
    URL.get("/orders.json")
      .then((response) => {
        let arr = Object.entries(response.data);
        arr = arr.reverse();
        arr.forEach((el) => {});
        const lastOrder = arr[arr.length - 1];
        this.setState({
          totalPrice: lastOrder[1].totalPrice,
          ingredients: lastOrder[1].ingredients,
          lastCustomerName: lastOrder[1].address.name,
        });
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ loading: false }));
  };

  ShowConfirmModal = () => this.setState({ confirmOrder: true });

  hideConfirmModal = () => this.setState({ confirmOrder: false });
  s;

  continueOrder = () => {
    this.hideConfirmModal();
    /* const params = [];
    for (let inc in this.props.ingredients) {
      params.push(inc + "=" + this.props.ingredients[inc]);
    }
    params.push("totalPrice=" + this.props.totalPrice);
    const query = params.join("&");*/
    this.props.history.push({
      pathname: "/ship",
    });
  };
  render() {
    const disabled = { ...this.props.ingredients };
    for (let key in disabled) {
      disabled[key] = disabled[key] <= 0;
    }
    return (
      <div>
        <Modal show={this.state.confirmOrder}>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummery
              hideFunc={this.hideConfirmModal}
              continue={this.continueOrder}
              names={this.props.names}
            />
          )}
        </Modal>
        {this.state.loading && <Spinner />}
        <p>Сүүлчийн захиалагч: {this.state.lastCustomerName}</p>
        <BurderComp ingredients={this.props.ingredients} />
        <BuildControls show={this.ShowConfirmModal} disabled={disabled} />
      </div>
    );
  }
}
const mapStateTpPorps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    names: state.names,
  };
};
const mapDispathchProps = (dispatch) => {
  return {
    addIngredientsName: (name) => dispatch(actions.addIngredientsName(name)),
    minIngredientsName: (name) => dispatch(actions.minIngredientsName(name)),
  };
};
export default connect(mapStateTpPorps, mapDispathchProps)(BurderBuilder);
