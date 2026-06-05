import React from 'react'
import ProductCard from './ProductCard'

function ProductListing({ products }) {
  return (
    <div className="product-listings-container">
        <div className="product-listings-grid"> 
            {
                products.length > 0 ?(
                    products.map((product) => (
                        <ProductCard key={product.productId} product={product} />
                    ))
                ):(
                    <p className="products-listing-empty">No products available.</p>
                )
            }
        </div>
    </div>
  )
}

export default ProductListing