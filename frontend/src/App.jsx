import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import CategoryPage from './pages/Category/CategoryPage';
import ProductPage from './pages/Product/ProductPage';
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
