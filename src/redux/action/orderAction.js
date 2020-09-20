import URL from "../../axios-orders";

export const loadOrders = (userId) => {
  return function (dispatch, getState) {
    dispatch(loadOrdersStart());
    const token = getState().signUpReducer.token;
    URL.get(`/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then((response) => {
        dispatch(loadOrdersSuccess(Object.entries(response.data)));
      })
      .catch((error) => dispatch(loadOrdersError(error)));
  };
};

export const loadOrdersStart = () => {
  return {
    type: "LOAD_ORDERS_START",
  };
};

export const loadOrdersSuccess = (loadedOrders) => {
  return {
    type: "LOAD_ORDERS_SUCCESS",
    orders: loadedOrders,
  };
};

export const loadOrdersError = (loadedError) => {
  return {
    type: "LOAD_ORDERS_ERROR",
    error: loadedError,
  };
};

// Захиалга хадгалах хэсэг

export const saveOrder = (newOrder) => {
  return function (dispatch, getState) {
    dispatch(saveOrderStart());
    const token = getState().signUpReducer.token;
    URL.post("orders.json?auth=" + token, newOrder)
      .then((response) => {
        dispatch(saveOrderSuccess());
      })
      .catch((error) => dispatch(saveOrderError(error)));
  };
};

export const saveOrderStart = () => {
  return {
    type: "SAVE_ORDER_START",
  };
};

export const saveOrderSuccess = () => {
  return {
    type: "SAVE_ORDER_SUCCESS",
  };
};

export const saveOrderError = () => {
  return {
    type: "SAVE_ORDER_ERROR",
  };
};
