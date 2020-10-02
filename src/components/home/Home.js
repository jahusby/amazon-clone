import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images.squarespace-cdn.com/content/5b35dc9b36099b1e5fe89cb6/1596544196754-WLHBYMMLTXTF6NRSDILR/Amazon+-+Ateles.jpg?format=1500w&content-type=image%2Fjpeg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="23131212312"
            title="the lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
