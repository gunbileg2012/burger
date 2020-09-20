import { Switch } from "react-router-dom";

const initialState = {
  orders: [],
  loading: false,
  error: null,
  // save Order
  newOrder: {
    loading: false,
    finished: false,
    error: null,
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ORDERS_START":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_ORDERS_SUCCESS":
      return {
        ...state,
        orders: action.orders,
        loading: false,
        finished: true,
      };
    case "LOAD_ORDERS_ERROR":
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case "SAVE_ORDER_START":
      return {
        ...state,
        newOrder: {
          loading: true,
        },
      };
    case "SAVE_ORDER_SUCCESS":
      return {
        ...state,
        newOrder: {
          loading: false,
          finished: true,
        },
      };
    case "SAVE_ORDER_ERROR":
      return {
        ...state,
        newOrder: {
          loading: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
};
export default reducer;
