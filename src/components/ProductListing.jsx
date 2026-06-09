import React from 'react'
import ProductCard from './ProductCard'

function ProductListing({ products }) {
  return (
    <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12"> 
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