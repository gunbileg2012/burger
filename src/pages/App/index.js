import React, { Component, Fragment } from "react";
import "./style.css";
import Toolbar from "../../components/Toolbar/toolbar_index";
import BurderBuilder from "../BurgerBuilder/burgerBuilder_index";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrdersPage";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "../loginPage";
import SignUp from "../SignUpPage";
import ShippingPage from "../shippingPage";
import { connect } from "react-redux";
import LogoutPage from "../../components/logout";
import * as actions from "../../redux/action/loginAction";
class App extends Component {
  state = {
    showSideBar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSideBar: !prevState.showSideBar };
    });
  };
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");
    if (token) {
      if (expireDate > new Date()) {
        this.props.autoLogin(token, userId);
        this.props.autoLogout(expireDate.getTime() - new Date().getTime());
      } else {
        this.props.Logout();
      }
    }
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
          {this.props.userId ? (
            <Switch>
              <Route path="/order" component={OrderPage} />
              <Route path="/ship" component={ShippingPage} />
              <Route path="/logout" component={LogoutPage} />
              <Route path="/" component={BurderBuilder} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/signUp" component={SignUp} />
              <Redirect to="/login" />
            </Switch>
          )}
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userId: state.signUpReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.SignInUserSuccessStorage(token, userId)),
    Logout: () => dispatch(actions.Logout()),
    autoLogout: (ms) => dispatch(actions.autoLogout(ms)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
