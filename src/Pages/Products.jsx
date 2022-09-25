import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const compDm = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      const response = await fetch("https://fakestoreapi.com/products");
      if (compDm) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        // console.log(filter);
      }
      return () => {
        compDm = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading....</>;
  };

  const productFilter = (cat) => {
    const updateList = data.filter((e) => e.category === cat);

    setFilter(updateList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark mx-2"
            y
            onClick={() => setFilter(data)}
          >
            All
          </button>

          <button
            className="btn btn-outline-dark mx-2"
            onClick={() => {
              productFilter("women's clothing");
            }}
          >
            Women
          </button>
          <button
            className="btn btn-outline-dark mx-2"
            onClick={() => {
              productFilter("men's clothing");
            }}
          >
            Men
          </button>
          <button
            className="btn btn-outline-dark mx-2"
            onClick={() => {
              productFilter("jewelery");
            }}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark mx-2"
            onClick={() => {
              productFilter("electronics");
            }}
          >
            Electronic
          </button>
        </div>
        <hr />
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-3 ">
              <div className="card h-100 text-center p-4" key={product.id}>
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.title}
                  height="300px"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <NavLink
                    to={`product/${product.id}`}
                    className="btn btn-primary"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
