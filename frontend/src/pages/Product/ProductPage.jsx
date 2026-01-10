import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    Star, Heart, ShoppingBag, Minus, Plus, Share2,
    CheckCircle, Shield, Truck
} from 'lucide-react';
import BestSellers from '../../components/features/products/BestSellers';
import './ProductPage.css';

const sidebarCategories = [
    'Accessories', 'Accessories for iPad', 'Accessories for Tablet',
    'Air Conditional', 'Bags', 'Bathrooms', 'Bedrooms', 'Blender'
];

// Mock Product Data
const MOCK_PRODUCT = {
    id: 1,
    title: 'Modern Minimalist Fabric Sofa',
    price: 850.00,
    oldPrice: 1200.00,
    rating: 4.8,
    reviews: 124,
    availability: 'In Stock',
    sku: 'BE45VGRT',
    description: 'Elevate your living space with this Modern Minimalist Fabric Sofa. Designed for both comfort and aesthetic appeal, it features high-density foam cushions and a durable solid wood frame. The premium upholstery is soft to the touch yet resistant to wear, making it perfect for everyday use.',
    features: [
        'Premium Linen Upholstery',
        'Solid Wood Frame',
        'High-Resilience Foam',
        'Easy-Clean Surface'
    ],
    // Updated with real images
    images: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', // Main Sofa
        'https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=600&q=80', // Sofa detail
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80', // Sofa in room
        'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80'  // Sofa texture/close
    ],
    colors: ['#333333', '#795548', '#1976D2', '#388E3C'],
    sizes: ['Double', 'Queen', 'King']
};

const RELATED_PRODUCTS = [
    { id: 101, name: 'Stylish Coffee Table', price: 150.00, img: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=300&q=80' },
    { id: 102, name: 'Geometric Rug', price: 85.00, img: 'https://images.unsplash.com/photo-1575910795159-450b07b32230?w=300&q=80' },
    { id: 103, name: 'Floor Lamp', price: 120.00, img: 'https://images.unsplash.com/photo-1507473888900-52ea75561061?w=300&q=80' },
    { id: 104, name: 'Accent Pillow Set', price: 45.00, img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=300&q=80' },
];

const ProductPage = () => {
    const { id } = useParams();
    const [mainImage, setMainImage] = useState(MOCK_PRODUCT.images[0]);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState('Queen');

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
        setMainImage(MOCK_PRODUCT.images[0]);
    }, [id]);

    const handleQuantityChange = (type) => {
        if (type === 'inc') setQuantity(prev => prev + 1);
        if (type === 'dec' && quantity > 1) setQuantity(prev => prev - 1);
    };

    return (
        <div className="product-page-container container">
            {/* Breadcrumb */}
            <div className="breadcrumb">
                <Link to="/" style={{ color: '#666', textDecoration: 'none' }}>HOME</Link> /
                <Link to="/shop" style={{ color: '#666', textDecoration: 'none' }}> FURNITURE</Link> /
                <span className="current" style={{ color: '#333', fontWeight: '800', marginLeft: '5px' }}>
                    {MOCK_PRODUCT.title.toUpperCase()}
                </span>
            </div>

            <div className="product-layout">
                {/* Sidebar - Reused Logic */}
                <aside className="product-sidebar">
                    <div className="sidebar-section">
                        <h3 className="sidebar-title">CATEGORIES</h3>
                        <ul className="sidebar-cat-list">
                            {sidebarCategories.map((cat, idx) => {
                                const slug = cat.toLowerCase().replace(/\s+/g, '-');
                                return (
                                    <li key={idx} className="sidebar-cat-item">
                                        <Link to={`/category/${slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                                            {cat}
                                        </Link>
                                    </li>
                                );
                            })}
                            <li className="sidebar-cat-item see-more">
                                <Link to="/shop" style={{ textDecoration: 'none', color: 'inherit' }}>See More +</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-section best-sellers-widget">
                        <h3 className="sidebar-title">TRENDING NOW</h3>
                        <BestSellers />
                    </div>
                </aside>

                {/* Main Content */}
                <main className="product-main">

                    {/* Top Section */}
                    <div className="product-top-section">
                        {/* Gallery */}
                        <div className="product-gallery">
                            <div className="main-image-wrapper">
                                <img src={mainImage} alt="Main Product" />
                            </div>
                            <div className="thumbnail-list">
                                {MOCK_PRODUCT.images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`thumbnail-item ${mainImage === img ? 'active' : ''}`}
                                        onClick={() => setMainImage(img)}
                                    >
                                        <img src={img} alt={`Thumb ${idx}`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Details Panel */}
                        <div className="product-info-panel">
                            <h1 className="product-title">{MOCK_PRODUCT.title}</h1>

                            <div className="product-meta-row">
                                <div className="rating-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill={i < Math.floor(MOCK_PRODUCT.rating) ? "#FFC107" : "none"} color="#FFC107" />
                                    ))}
                                    <span style={{ marginLeft: '5px', fontWeight: '600', color: '#333' }}>{MOCK_PRODUCT.rating}</span>
                                </div>
                                <span className="review-count">({MOCK_PRODUCT.reviews} Reviews)</span>
                                <span className="stock-status">
                                    <CheckCircle size={14} style={{ marginRight: '4px', display: 'inline' }} />
                                    {MOCK_PRODUCT.availability}
                                </span>
                            </div>

                            <div className="product-price-section">
                                <span className="current-price">${MOCK_PRODUCT.price.toFixed(2)}</span>
                                <span className="original-price">${MOCK_PRODUCT.oldPrice.toFixed(2)}</span>
                                <span className="discount-tag">SAVE 30%</span>
                            </div>

                            <p className="product-description-short">
                                {MOCK_PRODUCT.description}
                            </p>

                            <div className="product-options">
                                <div className="option-group">
                                    <span className="option-label">Color</span>
                                    <div className="color-options">
                                        {MOCK_PRODUCT.colors.map((c, i) => (
                                            <div
                                                key={i}
                                                className={`color-circle ${selectedColor === i ? 'active' : ''}`}
                                                style={{ backgroundColor: c }}
                                                onClick={() => setSelectedColor(i)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="option-group">
                                    <span className="option-label">Size</span>
                                    <div className="size-options">
                                        {MOCK_PRODUCT.sizes.map((s) => (
                                            <div
                                                key={s}
                                                className={`size-box ${selectedSize === s ? 'active' : ''}`}
                                                onClick={() => setSelectedSize(s)}
                                            >
                                                {s}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="action-buttons">
                                <div className="quantity-wrapper">
                                    <button className="qty-btn" onClick={() => handleQuantityChange('dec')}><Minus size={16} /></button>
                                    <input type="text" className="qty-input" value={quantity} readOnly />
                                    <button className="qty-btn" onClick={() => handleQuantityChange('inc')}><Plus size={16} /></button>
                                </div>
                                <button className="add-cart-btn">
                                    <ShoppingBag size={20} />
                                    Add To Cart
                                </button>
                                <button className="wishlist-btn">
                                    <Heart size={20} />
                                </button>
                            </div>

                            <div style={{ marginTop: '20px', display: 'flex', gap: '20px', fontSize: '0.85rem', color: '#666' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Shield size={16} /> 3 Year Warranty</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Truck size={16} /> Free Shipping</span>
                            </div>
                        </div>
                    </div>

                    {/* Tabs Section */}
                    <div className="product-bottom-section">
                        <div className="feature-tabs">
                            {['description', 'additional info', 'reviews'].map(tab => (
                                <button
                                    key={tab}
                                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                    style={{ textTransform: 'capitalize' }}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="tab-content">
                            {activeTab === 'description' && (
                                <div>
                                    <p style={{ marginBottom: '15px' }}>{MOCK_PRODUCT.description}</p>
                                    <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '10px' }}>Key Features</h4>
                                    <ul style={{ listStyle: 'circle', paddingLeft: '20px' }}>
                                        {MOCK_PRODUCT.features.map((f, i) => <li key={i} style={{ marginBottom: '5px' }}>{f}</li>)}
                                    </ul>
                                </div>
                            )}
                            {activeTab === 'reviews' && (
                                <div className="reviews-list">
                                    <div className="review-item">
                                        <div className="review-header">
                                            <span className="reviewer-name">John Doe</span>
                                            <span className="review-date">2 days ago</span>
                                        </div>
                                        <div className="rating-stars" style={{ marginBottom: '10px' }}>
                                            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#FFC107" color="#FFC107" />)}
                                        </div>
                                        <p>Great product! Exactly as described. Delivery was super fast.</p>
                                    </div>
                                    <div className="review-item">
                                        <div className="review-header">
                                            <span className="reviewer-name">Sarah Smith</span>
                                            <span className="review-date">1 week ago</span>
                                        </div>
                                        <div className="rating-stars" style={{ marginBottom: '10px' }}>
                                            {[...Array(4)].map((_, i) => <Star key={i} size={12} fill="#FFC107" color="#FFC107" />)}
                                        </div>
                                        <p>Quality is good, but the color is slightly darker than the picture.</p>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'additional info' && <p>No additional information available for this product.</p>}
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="related-products-section">
                        <h3 className="section-title">RELATED PRODUCTS</h3>
                        <div className="product-grid">
                            {RELATED_PRODUCTS.map(prod => (
                                <Link to={`/product/${prod.id}`} key={prod.id} style={{ textDecoration: 'none' }}>
                                    <div className="product-card-large" style={{ width: '220px' }}>
                                        <div className="product-img-wrapper">
                                            <img src={prod.img} alt={prod.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                                        </div>
                                        <div className="product-details">
                                            <h3 className="product-name" style={{ fontSize: '0.95rem' }}>{prod.name}</h3>
                                            <div className="price-box">
                                                <span className="current-price" style={{ fontSize: '1rem' }}>${prod.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default ProductPage;
