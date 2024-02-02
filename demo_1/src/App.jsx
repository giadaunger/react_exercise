import React from 'react';
import ProductCards from './components/ProductCards';

function App() {

  const products = [
    {
      id: 1,
      name: "T-Shirt 1",
      price: 19.99,
      features: ["100% Cotton", "Lightweight", "Unisex"],
      isInStock: true,
      imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
    },
    {
      id: 2,
      name: "T-Shirt 2",
      price: 24.99,
      features: ["Polyester Blend", "Breathable", "Unisex"],
      isInStock: false,
      imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
    },
    {
      id: 3,
      name: "T-Shirt 3",
      price: 69.99,
      features: ["Wool", "Breathable", "Female"],
      isInStock: true,
      imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
    },
    // Add more products as needed
  ];

  return (
    <div className='flex flex-col min-h-screen bg-gray-200'>
      <header className='h-20 border-b'>Header</header>
      <div className='flex-auto'>
        <div className='container mx-auto h-screen'></div>
      </div>
      <footer className='h-20 border-t bg-gray-200'>Footer</footer>
    </div>
  )
}

export default App
