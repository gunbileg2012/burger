import { Switch } from "react-router-dom";
const initialState = {
  loading: false,
  fireBaseerror: null,
  token: null,
  userId: null,
  logginIn: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SignUpUserStart":
      return {
        ...state,
        loading: true,
      };
    case "SignUpUserError":
      return {
        ...state,
        loading: false,
        fireBaseerror: action.error.response.data.error.message,
      };
    case "SignUpUserSuccess":
      return {
        ...state,
        loading: false,
        token: action.resultData.idToken,
        userId: action.resultData.localId,
      };
    case "SignInUserStart":
      return {
        ...state,
        loading: true,
      };
    case "SignInUserSuccess":
      return {
        ...state,
        loading: false,
        token: action.resultData.idToken,
        userId: action.resultData.localId,
        logginIn: true,
      };
    case "SignInUserSuccessStorage":
      return {
        ...state,
        loading: false,
        token: action.token,
        userId: action.userId,
        logginIn: true,
      };
    case "SignInUserError":
      return {
        ...state,
        loading: false,
        token: null,
        userId: null,
        logginIn: false,
        fireBaseerror: action.error.response.data.error.message,
      };
    case "Logout":
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      return {
        ...state,
        loading: false,
        token: null,
        userId: null,
        logginIn: false,
        fireBaseerror: null,
      };
    default:
      return state;
  }
};

export default reducer;
