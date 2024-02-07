import React from "react";
import { useState, useEffect } from "react";

function useEffectProducts() {
  const [shopProducts, setShopProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
        try{
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setShopProducts(data["products"]);
        }
        catch(error) {
            console.log(error)
        }
    }
    fetchProducts()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-auto">
        <h1 className="text-7xl">Products</h1>
        <div className="container mx-auto">
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

export default useEffectProducts;