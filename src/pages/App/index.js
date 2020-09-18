import React, { Component } from "react";
import "./style.css";
import Toolbar from "../../components/Toolbar/toolbar_index";
import BurderBuilder from "../BurgerBuilder/burgerBuilder_index";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrdersPage";
import { Route, Switch } from "react-router-dom";
import Order from "../../components/Order";
import ShippingPage from "../shippingPage";
class App extends Component {
  state = {
    showSideBar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  render() {
    return (
      <div>
        <Toolbar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}
        />
        <SideBar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className="Content">
          <Switch>
            <Route path="/order" component={OrderPage} />
            <Route path="/ship" component={ShippingPage} />
            <Route path="/" component={BurderBuilder} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
