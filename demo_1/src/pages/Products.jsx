import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Products() {
  const [shopProducts, setShopProducts] = useState([]);

  async function handleSearch(event) {
    event.preventDefault();

    try{
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setShopProducts(data["products"]);
    }
    catch(error) {
        console.log(error)
    }
    
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-auto">
        <h1 className="text-7xl">Products</h1>
        <div className="container mx-auto">
          <form onSubmit={handleSearch} className="my-10">
            <button
              type="submit"
              className="px-4 py-2 font-semibold text-white bg-black"
            >
              Fetch products
            </button>
          </form>
          <div className="container grid grid-cols-3 mx-auto">
            {shopProducts.map((product) => {
              return (
                <div className="p-8 border shadow-lg m-4">
                  <div>{product.title}</div>
                  <div>{product.price} $</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;