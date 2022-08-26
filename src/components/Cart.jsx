import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteProductAction from "../redux/action/DeleteProductAction";
export default function Cart() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <div className="container mt-5">
      <h4>My Orders:</h4>
      <br />
      {products.map((product) => (
        <div className="card w-75 my-4">
          <div className="card-body">
            <img src={product.pro_img} style={{ height: "8rem" }} />
            <h3>{product.pro_cate}</h3>
            <br />

            <h5 className="card-title">{product.pro_title}</h5>
            <p className="card-text">{product.pro_desc}</p>

            <a
              href="#"
              className="btn btn-primary"
              onClick={() => {
                console.log(product.id);
                dispatch(DeleteProductAction(product.id));
              }}
            >
              Delete
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
