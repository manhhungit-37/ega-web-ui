import React from 'react';
import data from "db.json";

function Products() {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="products">
      {data.products.length > 0 && data.products.map(item => (
          <div key={item.id} className="products-item">
            <img src={item.img} alt={item.title} />
            <h4 className="product-title">{item.title}</h4>
            <div className="product-price line-height-24">{numberWithCommas(item.price)} đ</div>
            <div className="product-dots">
              <div className="products-pink"></div>
              <div className="products-blue"></div>
              <div className="products-yellow"></div>
              <div className="products-white"></div>
            </div>
            <button className="buy-now">Mua ngay</button>
          </div>
      ))}
    </div>
  )
}

export default Products
