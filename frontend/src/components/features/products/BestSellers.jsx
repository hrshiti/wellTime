import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './BestSellers.css';

const products = [
    {
        id: 1,
        name: 'Odit Aut Fugit',
        price: 68.00,
        oldPrice: 80.00,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=150&q=80' // Orange Pillow
    },
    {
        id: 2,
        name: 'Totam Rem Aperiam',
        price: 250.00,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=150&q=80' // Trousers
    },
    {
        id: 3,
        name: 'Totam Rem Aperiam',
        price: 250.00,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=150&q=80' // Model White Top
    },
    {
        id: 4,
        name: 'Sed Quia Non Eius',
        price: 60.00,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=150&q=80' // Laptop
    }
];

const BestSellers = () => {
    return (
        <div className="bestsellers-container">
            <div className="bestsellers-header">
                <h3 className="bestsellers-title">BEST SELLING</h3>
                <div className="indicator"></div>
            </div>

            <div className="products-list custom-scrollbar">
                {products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="product-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="product-img">
                            <img src={product.image} alt={product.name} />
                        </div>

                        <div className="product-info">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} fill="#FFC107" color="#FFC107" />
                                ))}
                            </div>
                            <h4 className="product-name">{product.name}</h4>
                            <div className="price">
                                <span>${product.price.toFixed(2)}</span>
                                {product.oldPrice && (
                                    <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BestSellers;
