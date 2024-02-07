import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';
import ProductPage from './pages/ProductPage';
import Products from './pages/Products';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/:id" element={<ProductPage />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
