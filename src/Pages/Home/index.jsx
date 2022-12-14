import React, { useEffect, useState } from "react";
import "./Home.css";
import Buttons from "../../components/Buttons";

const Home = () => {
  const [products, setProducts] = useState([]);
  const compDm = true;
  useEffect(() => {
    const getForSliderProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (compDm) {
        setProducts(await response.clone().json());

        // console.log(products[1].category);
      }
      return () => {
        compDm = false;
      };
    };
    getForSliderProduct();
  }, []);

  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="container mt-5">
        {products.map((p, i) => {
          if (i % 4 === 0) {
            return (
              <>
                <div
                  className={
                    index === i
                      ? "slide-container active-slide"
                      : " slide-container passive-slide"
                  }
                >
                  <img src={p.image} height={400} />
                  <div className="about-product">
                    <p className="text-uppercase lead">{p.category}</p>
                    <hr />

                    <h1 className="text-uppercase">{p.title}</h1>
                    <h2 className="my-3">${p.price}</h2>
                    <p className="lead my-2">
                      {p.description.substring(0, 200)}...
                    </p>
                  </div>
                </div>

                <Buttons
                  nextSlide={() => {
                    if (index < 16 && index >= 0) {
                      setIndex(index + 4);
                    }
                  }}
                  prevSlide={() => {
                    if (index <= 16 && index > 0) {
                      setIndex(index - 4);
                    }
                  }}
                />
              </>
            );
          }
        })}
      </div>
    </>
  );
};
export default Home;
