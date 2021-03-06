import React from "react";
import Product from './Product'

export default function ProductList({ title, products }) {
  
  return <section className="section">
    <h2 className="section-title">{title}</h2>
    <div className="products-center">

      {products.map(item => {
        // console.log(item.image[0].url)
        return <Product key={item.id} {...item} />
      })}

    </div>

  </section>
}
