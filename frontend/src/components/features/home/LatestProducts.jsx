import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Ut Labore Et Do2',
        price: 70.00,
        oldPrice: 79.00,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=150&q=80' // Bag/Backpack
    },
    {
        id: 2,
        name: 'Nisi Ut Aliqu',
        price: 60.00,
        oldPrice: 70.00,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=150&q=80' // Bag/Purse
    },
    {
        id: 3,
        name: 'Ut Labore Et Do',
        price: 70.00,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&q=80' // Bag/Backpack
    },
    {
        id: 4,
        name: 'Dolor Sit Amet',
        price: 85.00,
        oldPrice: 95.00,
        rating: 4,
        image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=150&q=80' // Another Bag
    }
];

const LatestProducts = () => {
    return (
        <div className="bg-white rounded-lg p-0">
            <div className="border-b border-gray-200 pb-3 mb-4">
                <h3 className="text-lg font-bold text-gray-800 uppercase relative inline-block">
                    Latest Products
                    <span className="absolute bottom-[-13px] left-0 w-full h-[2px] bg-sky-500"></span>
                </h3>
            </div>

            <div className="space-y-6">
                {products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="flex gap-4 group cursor-pointer" style={{ textDecoration: 'none' }}>
                        <div className="w-20 h-20 flex-shrink-0 bg-gray-50 rounded overflow-hidden border border-gray-100">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        <div className="flex-1 flex flex-col justify-center">
                            <div className="flex mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={12}
                                        className={`${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
                                    />
                                ))}
                            </div>
                            <h4 className="text-sm font-medium text-gray-700 hover:text-sky-500 transition-colors mb-1 truncate">
                                {product.name}
                            </h4>
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500 font-bold text-sm">
                                    ${product.price.toFixed(2)}
                                </span>
                                {product.oldPrice && (
                                    <span className="text-gray-400 text-xs line-through">
                                        ${product.oldPrice.toFixed(2)}
                                    </span>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LatestProducts;
