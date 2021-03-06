import React, { Component } from "react";
import axios from "axios";
import "./index.css";

function MainPage() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(function() {
    axios
      .get(
        "https://03ffb87a-bc02-49f8-afa1-188450beb764.mock.pstmn.io/products"
      )
      .then(function(result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function(error) {
        console.error("에러발생 :", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/webudding.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner3.png" />
        </div>
        <h1>판매 상품</h1>
        <div id="product-list">
          {products.map(function(product, index) {
            return (
              <div className="product-card">
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                </div>
                <span className="product-price">{product.price}원</span>
                <div className="product-seller">
                  <img
                    className="product-avatar"
                    src="images/icons/avatar.png"
                  />
                  <span>{product.seller}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
