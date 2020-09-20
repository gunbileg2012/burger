import React, { Component } from "react";
import css from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/action/SignUpActions";
import Spinner from "../../components/spinner/index";
import { Redirect } from "react-router-dom";
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
    error: "",
    token: null,
    userId: null,
  };
  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  changePass1 = (event) => {
    this.setState({ password: event.target.value });
  };
  changePass2 = (event) => {
    this.setState({ password2: event.target.value });
  };
  SignUp = () => {
    if (this.state.password !== this.state.password2) {
      return this.setState({ error: "Нууц үг зөв давтаж бичнэ үү" });
    } else {
      this.props.SignUpUser(this.state.email, this.state.password);
    }
  };

  render() {
    return (
      <div className={css.LoginForm}>
        {this.props.userId && <Redirect to="/order" />}
        <input
          type="text"
          onChange={this.changeEmail}
          placeholder="И-мэйл хаяг"
        />
        <input
          type="password"
          placeholder="Нууц үг"
          onChange={this.changePass1}
        />
        <input
          type="password"
          placeholder="Нууц үг давтах"
          onChange={this.changePass2}
        />
        {this.props.loading && <Spinner />}
        {this.props.fireBaseerror && <h1>{this.props.fireBaseerror}</h1>}
        {this.state.error && <h1>{this.state.error}</h1>}
        <button onClick={this.SignUp}>Бүртгүүлэх</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.signUpReducer.loading,
    fireBaseerror: state.signUpReducer.fireBaseerror,
    userId: state.signUpReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    SignUpUser: (email, password) =>
      dispatch(actions.SignUpUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
