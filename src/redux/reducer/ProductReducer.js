import * as actionTypes from "../actionTypes";

const initialState = {
  products: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case actionTypes.DELETE_FROM_CART:
      return {
        ...state,
        products: state.products.filter((pro) => pro.id !== action.payload),
      };
    default:
      return state;
  }
};

export default ProductReducer;
