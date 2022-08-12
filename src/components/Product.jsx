import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  const Loading = () => {
    return <>Loading....</>;
  };

  const ShowProduct = () => {
    return (
      <>
        <hr className="my-5" />
        <div className="col-md-6">
          <img src={product.image} alt={product.title} width="400" />
        </div>
        <div className="col-md-6 mt-2">
          <h4 className="text-uppercase">{product.category}</h4>
          <hr />

          <h1 className="text-uppercase">{product.title}</h1>
          <h2 className="my-5">${product.price}</h2>
          <h4 className="my-5">
            RATING: {product.rating && product.rating.rate}
            <i className="fa fa-star mx-2"></i>
          </h4>
          <p className="lead my-5">{product.description}</p>
          <button type="button" class="btn btn-outline-danger ">
            Add to Cart
          </button>
        </div>

        <hr className="mt-5" />
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </>
  );
};

export default Product;
