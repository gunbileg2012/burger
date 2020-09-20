import React from "react";
import { connect } from "react-redux";
import * as action from "../../redux/action/loginAction";
import { Redirect } from "react-router-dom";

class Logout extends React.Component {
  componentDidMount = () => {
    this.props.logout();
  };
  render() {
    return <Redirect to="/login" />;
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(action.Logout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
