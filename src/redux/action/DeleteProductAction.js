import * as actionTypes from "../actionTypes";

const DeleteProductAction = (id) => {
  return {
    type: actionTypes.DELETE_FROM_CART,
    payload: id,
  };
};

export default DeleteProductAction;
