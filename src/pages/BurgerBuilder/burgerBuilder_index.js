import React, { Component } from "react";
import BurderComp from "../../components/burger/burger_index";
import BuildControls from "../../components/BuildControls/buildcontrols_index";
import Modal from "../../components/Gerenal/modal/index";
import OrderSummery from "../../components/orderSummary";
import URL from "../../axios-orders";
import Spinner from "../../components/spinner/index";
const priceList = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
const names = {
  bacon: "Гахайн мах",
  cheese: "Бяслаг",
  meat: "Үхрийн мах",
  salad: "Салаад",
};
export default class BurderBuilder extends Component {
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

  addInd = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    const newPrice = this.state.totalPrice + priceList[type];
    this.setState({ totalPrice: newPrice });
    this.setState({ ingredients: newIngredients });
  };
  test = () => console.log("Pages/burgerBuilder");
  minusInd = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;
      const newPrice = this.state.totalPrice - priceList[type];
      this.setState({ totalPrice: newPrice });
      this.setState({ ingredients: newIngredients });
    }
  };

  continueOrder = () => {
    this.hideConfirmModal();
    const params = [];
    for (let inc in this.state.ingredients) {
      params.push(inc + "=" + this.state.ingredients[inc]);
    }
    const query = params.join("&");
    this.props.history.push({
      pathname: "/ship",
      search: query,
    });
    /* const order = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice,
      address: {
        name: "Солонго",
        city: "Улаанбаатар",
        street: "16-р хороолол 15тоот",
      },
    };
    this.setState({ loading: true });
    URL.post("orders.json", order)
      .then((response) => {
        console.log("Амжилттай хадгаллаа");
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ loading: false }));*/
  };

  render() {
    const disabled = { ...this.state.ingredients };
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
              names={names}
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
            />
          )}
        </Modal>
        {this.state.loading && <Spinner />}
        <p>Сүүлчийн захиалагч: {this.state.lastCustomerName}</p>
        <BurderComp ingredients={this.state.ingredients} />
        <BuildControls
          show={this.ShowConfirmModal}
          names={names}
          totalPrice={this.state.totalPrice}
          disabled={disabled}
          minusInd={this.minusInd}
          addInd={this.addInd}
        />
      </div>
    );
  }
}
