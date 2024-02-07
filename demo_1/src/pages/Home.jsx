import React from 'react'
import ProductList from '../components/ProductList'

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-auto">
        <h1>Home</h1>
        <ProductList></ProductList>
      </div>
    </div>
  )
}

export default Home