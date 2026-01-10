import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LayoutGrid, List, ChevronDown, Star } from 'lucide-react';
import BestSellers from '../../components/features/products/BestSellers';
import './CategoryPage.css';

// Sidebar categories
const sidebarCategories = [
    'Accessories',
    'Accessories for iPad',
    'Accessories for Tablet',
    'Air Conditional',
    'Bags',
    'Bathrooms',
    'Bedrooms',
    'Blender'
];

// Real Product Images Mock Data
const categoryProducts = [
    {
        id: 1,
        name: 'Fashion Trending Top',
        price: 250.00,
        oldPrice: 350.00,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80',
        badge: '48%',
        isHot: false
    },
    {
        id: 2,
        name: 'Smart Gadget Set',
        price: 350.00,
        oldPrice: 500.00,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=300&q=80',
        badge: '',
        isHot: true
    },
    {
        id: 3,
        name: 'Organic Beauty Pack',
        price: 150.00,
        oldPrice: null,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1556228578-8d8448292e07?w=300&q=80',
        badge: '',
        isHot: false
    },
    {
        id: 4,
        name: 'Modern Gray Sofa',
        price: 899.00,
        oldPrice: 1200.00,
        rating: 4,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=80',
        badge: 'SALE',
        isHot: false
    },
    {
        id: 5,
        name: 'Wireless Headphones',
        price: 199.00,
        oldPrice: 250.00,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80',
        badge: 'NEW',
        isHot: true
    },
    {
        id: 6,
        name: 'Stylish Handbag',
        price: 120.00,
        oldPrice: 180.00,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&q=80',
        badge: '33%',
        isHot: false
    },
    {
        id: 7,
        name: 'Smart Watch Series',
        price: 299.00,
        oldPrice: 399.00,
        rating: 4,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80',
        badge: '',
        isHot: false
    },
    {
        id: 8,
        name: 'Designer Sunglasses',
        price: 159.00,
        oldPrice: null,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&q=80',
        badge: 'HOT',
        isHot: true
    }
];

const CategoryPage = () => {
    const { category } = useParams();

    // Format category title (e.g. fashion -> Fashion, health-beauty -> Health Beauty)
    const categoryTitle = category
        ? category.replace(/-/g, ' ')
        : 'Category';

    // In a real app, we would fetch products based on `category` here.
    // For now, we reuse the static real images for all demos.

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on category change
    }, [category]);

    return (
        <div className="category-page-container container">
            <div className="breadcrumb">
                <span>HOME</span> / <span className="current" style={{ textTransform: 'uppercase' }}>{categoryTitle}</span>
            </div>

            <div className="category-layout">
                {/* Left Sidebar */}
                <aside className="sidebar-left">
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
                        <h3 className="sidebar-title">BEST SELLERS</h3>
                        <BestSellers />
                    </div>
                </aside>

                {/* Main Content */}
                <main className="main-content">
                    {/* Banner */}
                    <div className="category-banner">
                        <div className="banner-text">
                            <div className="crown-icon">👑</div>
                            <h2>YOUR MEMBERSHIP REWARDS</h2>
                            <p>Top sellers. Fast order - processing</p>
                            <a href="#" className="banner-link">See More →</a>
                        </div>
                        <div className="banner-img-left">
                            <img src="https://images.unsplash.com/photo-1512424884248-984951478958?w=200&q=80" alt="Phone" />
                        </div>
                        <div className="banner-img-right">
                            <img src="https://images.unsplash.com/photo-1589363388019-383790547d6e?w=200&q=80" alt="Dress" />
                        </div>
                    </div>

                    <h2 className="page-title">{categoryTitle}</h2>

                    {/* Toolbar */}
                    <div className="toolbar">
                        <div className="view-toggles">
                            <button className="toggle-btn active p-2"><LayoutGrid size={20} /></button>
                            <button className="toggle-btn"><List size={20} /></button>
                        </div>

                        <div className="sort-options">
                            <div className="sort-dropdown">
                                <span>Sort by Date</span> <ChevronDown size={14} />
                            </div>
                            <div className="show-dropdown">
                                <span>Show 20</span> <ChevronDown size={14} />
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="product-grid">
                        {categoryProducts.map(product => (
                            <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                                <div className="product-card-large">
                                    <div className="product-img-wrapper">
                                        {product.badge && <span className="discount-badge">{product.badge}</span>}
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <div className="product-details">
                                        <div className="stars">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} fill="#FFC107" color="#FFC107" />
                                            ))}
                                        </div>
                                        <h3 className="product-name">{product.name}</h3>
                                        <div className="price-box">
                                            <span className="current-price">${product.price.toFixed(2)}</span>
                                            {product.oldPrice && <span className="old-price">${product.oldPrice.toFixed(2)}</span>}
                                        </div>
                                        {/* Add buttons or actions if needed */}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CategoryPage;
