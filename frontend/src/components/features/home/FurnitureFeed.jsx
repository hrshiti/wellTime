import React from 'react';
import { Star } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Sint Occaecati',
        price: 120.00,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&q=80' // Small Table
    },
    {
        id: 2,
        name: 'Tempora Incidunt',
        price: 45.00,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80' // Woman/Model White Shirt
    },
    {
        id: 3,
        name: 'Voluptatem Sequi',
        price: 25.00,
        rating: 5,
        badge: '15%',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=300&q=80' // Orange Pillow
    },
    {
        id: 4,
        name: 'Nesciunt Neque',
        price: 340.00,
        rating: 5,
        badge: '12%',
        image: 'https://images.unsplash.com/photo-1519947486511-4639940be43e?w=300&q=80' // Pink Chair(Actually using sofa/chair)
    }
];

const FurnitureFeed = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-0 mb-6">
                <div className="bg-orange-600 text-white px-6 py-3 font-bold uppercase text-sm inline-block">
                    Furnitures & Decor
                </div>
                <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-500 mt-2 md:mt-0 pb-2 md:pb-0">
                    <span className="text-orange-500 cursor-pointer">Top 10 Items</span>
                    <span className="hover:text-orange-500 cursor-pointer">Bathrooms</span>
                    <span className="hover:text-orange-500 cursor-pointer">Bedrooms</span>
                    <span className="hover:text-orange-500 cursor-pointer">Cookware Set</span>
                    <span className="hover:text-orange-500 cursor-pointer">Decor & Gifts</span>
                </div>
            </div>

            {/* Grid with 5 columns for desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* Products Grid - Takes first 4 slots */}
                {products.map((product) => (
                    <div key={product.id} className="lg:col-span-1 group relative flex flex-col items-center pt-4">
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

                        <h4 className="text-sm font-bold text-gray-800 mb-1 text-center hover:text-orange-500 cursor-pointer">
                            {product.name}
                        </h4>

                        <div className="flex items-center gap-2">
                            <span className="text-orange-500 font-bold text-sm">
                                ${product.price.toFixed(2)}
                            </span>
                        </div>
                    </div>
                ))}

                {/* Large Banner Card - Takes last slot (5th column) */}
                <div className="lg:col-span-1 relative h-80 lg:h-auto rounded overflow-hidden group bg-yellow-600">
                    <img
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
                        alt="Furniture Banner"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center text-white p-4">
                        <div className="w-32 h-32 rounded-full bg-pink-500 border-4 border-white/30 flex flex-col items-center justify-center shadow-xl animate-pulse">
                            <span className="text-[10px] font-bold uppercase leading-tight">Mid Season<br />Sale</span>
                            <span className="text-4xl font-extrabold">66<span className="text-xl">%</span></span>
                        </div>
                        <button className="text-white text-xs font-bold uppercase mt-4 hover:underline">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FurnitureFeed;
