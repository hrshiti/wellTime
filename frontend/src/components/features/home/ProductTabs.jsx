import React, { useState } from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Odit Aut Fugit',
        price: 68.00,
        oldPrice: 80.00,
        rating: 5,
        badge: '15%',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=300&q=80' // Orange Pillow
    },
    {
        id: 2,
        name: 'Totam Rem Aperiam',
        price: 250.00,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80' // White Top
    },
    {
        id: 3,
        name: 'Sed Quia Non Eius',
        price: 60.00,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&q=80' // Laptop
    },
    {
        id: 4,
        name: 'Totam Rem Aperiam',
        price: 250.00,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&q=80' // Pants
    },
    {
        id: 5,
        name: 'Qui Dolorem Ipsum',
        price: 90.00,
        oldPrice: 100.00,
        rating: 5,
        badge: '10%',
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&q=80' // TV
    }
];

const ProductTabs = () => {
    const tabs = ['BEST SELLING', 'TOP RATING', 'FEATURED PRODUCTS'];
    const [activeTab, setActiveTab] = useState('BEST SELLING');

    return (
        <div className="bg-white">
            <div className="flex justify-between items-center border-b border-gray-200 mb-6">
                <div className="flex gap-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3 text-sm font-bold uppercase transition-colors relative ${activeTab === tab
                                ? 'text-orange-500'
                                : 'text-gray-800 hover:text-orange-500'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-orange-500"></span>
                            )}
                        </button>
                    ))}
                </div>
                <button className="flex items-center text-xs font-semibold text-gray-500 hover:text-orange-500">
                    See All <ChevronRight size={14} />
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="group relative flex flex-col items-center" style={{ textDecoration: 'none' }}>
                        {product.badge && (
                            <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center z-10">
                                {product.badge}
                            </div>
                        )}

                        <div className="w-full aspect-square mb-4 flex items-center justify-center overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={12} className={`${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
                            ))}
                        </div>

                        <h4 className="text-sm font-bold text-gray-800 mb-1 text-center truncate w-full hover:text-orange-500 cursor-pointer">
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
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductTabs;
