import * as actionTypes from "../actionTypes";
let newID = 45;
const ProductAction = (pro_title, pro_img, pro_desc, pro_cate) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      pro_title,
      pro_img,
      pro_desc,
      pro_cate,
      id: ++newID,
    },
  };
};

export default ProductAction;
