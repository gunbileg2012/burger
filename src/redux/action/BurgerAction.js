export const addIngredientsName = (name) => {
  return {
    type: "addIngredients",
    name,
  };
};
export const minIngredientsName = (name) => {
  return {
    type: "minIngredients",
    name,
  };
};
