import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';

import './App.css';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const products = [
    { id: 1, name: "Wireless Headphones", description: "High-quality wireless headphones with noise cancellation", price: 99.99, image: "https://placehold.co/600x400?text=Wireless+Headphones" },
    { id: 2, name: "Bluetooth Speaker", description: "Portable speaker with premium sound quality", price: 79.99, image: "https://placehold.co/600x400?text=Bluetooth+Speaker" },
    { id: 3, name: "Smartwatch", description: "Track your fitness and notifications on the go", price: 149.99, image: "https://placehold.co/600x400?text=Smartwatch" },
    { id: 4, name: "Laptop Stand", description: "Ergonomic stand to improve your posture and workflow", price: 39.99, image: "https://placehold.co/600x400?text=Laptop+Stand" },
  ];

  const addToCart = (product) => {
    if (!cartItems.find(item => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header storeName="ComponentCorner" cartCount={cartItems.length} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products"
            element={
              <ProductsPage
                products={products}
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetailPage
                products={products}
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
