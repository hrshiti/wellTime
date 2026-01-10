import React from 'react';
import { Search, Heart, ShoppingBag, Menu, ChevronDown, Lock, User } from 'lucide-react';
import Logo from '../common/Logo';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-wrapper">
            {/* Top Header */}
            <div className="container top-header">
                <div className="pl-8">
                    <Logo />
                </div>

                <div className="search-bar">
                    <div className="search-category">
                        All Category <ChevronDown size={14} style={{ marginLeft: '5px' }} />
                    </div>
                    <input type="text" className="search-input" placeholder="Search Item..." />
                    <button className="search-btn">
                        <Search size={20} />
                    </button>
                </div>

                <div className="header-actions">
                    <Link to="/wishlist" className="action-item">
                        <Heart size={28} />
                    </Link>
                    <Link to="/cart" className="action-item">
                        <div className="cart-icon-wrapper">
                            <ShoppingBag size={28} />
                            <span className="cart-count">0</span>
                        </div>
                        <div className="cart-text">
                            <span className="cart-label">MY CART</span>
                            <span className="cart-price">$0.00</span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Navbar */}
            <div className="navbar">
                <div className="container navbar-container">
                    <div className="all-categories-wrapper">
                        <div className="all-categories-btn">
                            <Menu size={24} style={{ marginRight: '10px' }} />
                            ALL CATEGORIES
                            <ChevronDown size={20} style={{ marginLeft: 'auto' }} />
                        </div>
                        <div className="all-categories-dropdown">
                            <Link to="/category/fashion" className="cat-dropdown-item">Fashion</Link>
                            <Link to="/category/electronics" className="cat-dropdown-item">Electronics</Link>
                            <Link to="/category/home" className="cat-dropdown-item">Home & Garden</Link>
                            <Link to="/category/sports" className="cat-dropdown-item">Sports</Link>
                            <Link to="/category/beauty" className="cat-dropdown-item">Health & Beauty</Link>
                        </div>
                    </div>

                    <nav className="nav-links">
                        <div className="nav-item-wrapper">
                            <Link to="/" className="nav-link">HOME</Link>
                        </div>

                        <div className="nav-item-wrapper">
                            <Link to="/shop" className="nav-link">
                                SHOP <span className="badge-new">New</span>
                            </Link>
                            <div className="dropdown-menu">
                                <div className="dropdown-column">
                                    <div className="dropdown-list">
                                        <span className="dropdown-item">Shop Grid</span>
                                        <span className="dropdown-item">Shop List</span>
                                        <span className="dropdown-item">Shop Details</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="nav-item-wrapper">
                            <Link to="/features" className="nav-link">
                                FEATURES <span className="badge-hot">Hot!</span>
                            </Link>
                            <div className="dropdown-menu">
                                <div className="dropdown-column">
                                    <div className="dropdown-list">
                                        <span className="dropdown-item">Feature 1</span>
                                        <span className="dropdown-item">Feature 2</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="nav-item-wrapper">
                            <Link to="/blog" className="nav-link">BLOG</Link>
                            <div className="dropdown-menu">
                                <div className="dropdown-column">
                                    <div className="dropdown-list">
                                        <span className="dropdown-item">Blog Standard</span>
                                        <span className="dropdown-item">Blog Grid</span>
                                        <span className="dropdown-item">Blog Details</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="nav-item-wrapper">
                            <Link to="/pages" className="nav-link">PAGES</Link>
                            <div className="dropdown-menu">
                                <div className="dropdown-column">
                                    <div className="dropdown-list">
                                        <span className="dropdown-item">About Us</span>
                                        <span className="dropdown-item">Contact</span>
                                        <span className="dropdown-item">FAQ</span>
                                        <span className="dropdown-item">404 Page</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="nav-item-wrapper">
                            <Link to="/vendor" className="nav-link">VENDOR</Link>
                            {/* Mega Menu for Vendor as shown in image */}
                            <div className="dropdown-menu mega-menu">
                                <div className="dropdown-column">
                                    <div className="dropdown-header">DOKAN</div>
                                    <div className="dropdown-list">
                                        <span className="dropdown-item">Register/Login</span>
                                        <span className="dropdown-item">Store List</span>
                                        <span className="dropdown-item">Dashboard</span>
                                        <span className="dropdown-item">My Order</span>
                                        <span className="dropdown-item">Vendor Store</span>
                                        <span className="dropdown-item">Product Vendor</span>
                                    </div>
                                </div>
                                <div className="dropdown-column">
                                    <div className="dropdown-header">WC VENDOR</div>
                                    <div className="dropdown-list">
                                        <span className="dropdown-item">Register/Login</span>
                                        <span className="dropdown-item">Vendor Dashboard</span>
                                        <span className="dropdown-item">Vendor Store</span>
                                    </div>
                                </div>
                                <div className="dropdown-column">
                                    <div className="dropdown-header">PRODUCT VENDOR</div>
                                    <div className="dropdown-list">
                                        <span className="dropdown-item">Order</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <Link to="/login" className="login-link">
                        <Lock size={18} />
                        Login or Register
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
