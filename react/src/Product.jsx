import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        This is product.
        we can create product here
<Link to="/product/create">Create Product</Link>
 
    </div>
  )
}

export default Product