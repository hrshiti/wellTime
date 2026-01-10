import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Odit Aut Fugit',
        price: 68.00,
        oldPrice: 80.00,
        sold: 11,
        total: 20,
        badge: '15%',
        badgeColor: 'bg-yellow-400',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=300&q=80' // Orange Pillow
    },
    {
        id: 2,
        name: 'Totam Rem Aperiam',
        price: 250.00,
        sold: 10,
        total: 50,
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&q=80' // Jeans/Pants
    },
    {
        id: 3,
        name: 'Totam Rem Aperiam',
        price: 250.00,
        sold: 10,
        total: 50,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80' // White Tshirt
    },
    {
        id: 4,
        name: 'Sed Quia Non Eius',
        price: 60.00,
        sold: 10,
        total: 100,
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&q=80' // Laptop
    },
    {
        id: 5,
        name: 'Qui Dolorem Ipsum',
        price: 90.00,
        oldPrice: 100.00,
        sold: 9,
        total: 12,
        badge: '10%',
        badgeColor: 'bg-yellow-400',
        image: 'https://images.unsplash.com/photo-1527443224154-c4e3942d3acf?w=300&q=80' // Monitor
    },
    {
        id: 6,
        name: 'Nemo Enim Ipsam',
        price: 95.00,
        oldPrice: 100.00,
        sold: 9,
        total: 20,
        badge: '5%',
        badgeColor: 'bg-yellow-400',
        image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=300&q=80' // TV
    }
];

const FlashSale = () => {
    return (
        <div className="bg-white rounded-lg pt-0">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-6">
                <h3 className="text-lg font-bold text-gray-800 uppercase relative">
                    Flash Sale
                    <span className="absolute bottom-[-13px] left-0 w-full h-[2px] bg-orange-500"></span>
                </h3>
                <a href="#" className="flex items-center text-xs font-semibold text-gray-500 hover:text-orange-500 transition-colors">
                    See All <ChevronRight size={14} />
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="group relative">
                        {product.badge && (
                            <div className={`absolute top-0 right-0 ${product.badgeColor} text-xs font-bold px-2 py-3 rounded-full z-10 w-10 h-10 flex items-center justify-center`}>
                                {product.badge}
                            </div>
                        )}

                        <div className="w-full h-40 flex items-center justify-center mb-4 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        <div className="text-center">
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <h4 className="text-sm font-semibold text-gray-800 mb-1 truncate hover:text-orange-500 cursor-pointer">
                                {product.name}
                            </h4>

                            <div className="flex items-center justify-center gap-2 mb-3">
                                <span className="text-orange-500 font-bold">
                                    ${product.price.toFixed(2)}
                                </span>
                                {product.oldPrice && (
                                    <span className="text-gray-400 text-xs line-through">
                                        ${product.oldPrice.toFixed(2)}
                                    </span>
                                )}
                            </div>

                            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1 relative overflow-hidden">
                                <div
                                    className="bg-orange-400 h-2.5 rounded-full"
                                    style={{ width: `${(product.sold / product.total) * 100}%` }}
                                ></div>
                            </div>
                            <div className="text-xs text-gray-500">
                                Sold: <span className="font-bold text-gray-700">{product.sold}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlashSale;
