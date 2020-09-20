import React, { Component } from "react";
import css from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/action/loginAction";
import Spinner from "../../components/spinner/index";
import { Redirect } from "react-router-dom";
class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    token: null,
    userId: null,
    logginIn: null,
  };
  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  changePass = (event) => {
    this.setState({ password: event.target.value });
  };
  login = () => {
    this.props.SignInUser(this.state.email, this.state.password);
  };
  render() {
    return (
      <div className={css.LoginForm}>
        {this.props.userId && <Redirect to="/order" />}
        <input
          type="text"
          placeholder="И-мэйл хаяг"
          onChange={this.changeEmail}
        />
        <input
          type="password"
          placeholder="Нууц үг"
          onChange={this.changePass}
        />
        {this.props.loading && <Spinner />}
        <button onClick={this.login}>Нэвтрэх</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.signUpReducer.loading,
    fireBaseerror: state.signUpReducer.fireBaseerror,
    userId: state.signUpReducer.userId,
    token: state.signUpReducer.token,
    logginIn: state.signUpReducer.logginIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    SignInUser: (email, password) =>
      dispatch(actions.SignInUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
