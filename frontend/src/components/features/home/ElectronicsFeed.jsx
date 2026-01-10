import React from 'react';
import { Star } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Sit Volup Tatem',
        price: 65.00,
        oldPrice: 70.00,
        rating: 5,
        badge: '7%',
        image: 'https://images.unsplash.com/photo-1542491567-c2a41249b674?w=300&q=80' // 360 Camera style
    },
    {
        id: 2,
        name: 'Sit Aspernatur Aut Odit',
        price: 65.00,
        oldPrice: 70.00,
        rating: 5,
        badge: '7%',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80' // Smart Watch
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
        name: 'Quia Dolor Sit',
        price: 80.00,
        oldPrice: 83.00,
        rating: 5,
        badge: '4%',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80' // Headphones
    }
];

const ElectronicsFeed = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-0 mb-6">
                <div className="bg-orange-600 text-white px-6 py-3 font-bold uppercase text-sm inline-block">
                    Electronics
                </div>
                <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-500 mt-2 md:mt-0 pb-2 md:pb-0">
                    <span className="text-orange-500 cursor-pointer">Top 10 Items</span>
                    <span className="hover:text-orange-500 cursor-pointer">Accessories For Ipad</span>
                    <span className="hover:text-orange-500 cursor-pointer">Accessories For Tablet</span>
                    <span className="hover:text-orange-500 cursor-pointer">Air Conditional</span>
                    <span className="hover:text-orange-500 cursor-pointer">Blender</span>
                    <span className="hover:text-orange-500 cursor-pointer">Tablets</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* Large Banner Card - Fixed as first item */}
                <div className="lg:col-span-1 relative h-80 lg:h-auto rounded overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80"
                        alt="Electronics Banner"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-blue-900/40"></div>
                    {/* Decorative Elements mimicking the image */}
                    <div className="absolute top-8 left-0 right-0 text-center text-white p-4">
                        <div className="w-32 h-32 mx-auto rounded-full bg-pink-500 text-white flex flex-col items-center justify-center p-2 mb-4 shadow-lg animate-pulse">
                            <span className="text-xs font-bold uppercase mb-1">Best Price</span>
                            <span className="text-4xl font-extrabold italic">50<span className="text-xl">%</span></span>
                        </div>
                        <button className="text-white text-sm font-semibold hover:underline mt-2">Shop Now</button>
                    </div>
                </div>

                {/* Products Grid */}
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
                            {product.oldPrice && (
                                <span className="text-gray-400 text-xs line-through">
                                    ${product.oldPrice.toFixed(2)}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ElectronicsFeed;
