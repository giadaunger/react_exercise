import React from 'react';
import ProductCards from './components/ProductCards';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='h-20 border-b bg-gray-100'>Header</header>
      <div className='flex-auto'>
        <div className='container mx-auto h-screen'>
          <ProductList />
          {/* <ProductCards></ProductCards> */}
        </div>
      </div>
      <footer className='h-20 border-t bg-gray-200'>Footer</footer>
    </div>
  )
}

export default App
