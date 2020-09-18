const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    bacon: 0,
    meat: 0,
  },
  totalPrice: 0,
  confirmOrder: false,
  names: {
    bacon: "Гахайн мах",
    cheese: "Бяслаг",
    meat: "Үхрийн мах",
    salad: "Салаад",
  },
};
const priceList = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
const reducer = (state = initialState, action) => {
  if (action.type === "addIngredients") {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.name]: state.ingredients[action.name] + 1,
      },
      totalPrice: state.totalPrice + priceList[action.name],
      confirmOrder: false,
    };
  } else if (action.type === "minIngredients") {
    let newPrice = state.totalPrice - priceList[action.name];
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.name]: state.ingredients[action.name] - 1,
      },
      totalPrice: newPrice,
      confirmOrder: false,
    };
  }
  return state;
};
export default reducer;
