import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const BundleProduct = () => {
    return (
        <div className="bg-white">
            <div className="border-b border-gray-200 pb-3 mb-6">
                <h3 className="text-lg font-bold text-gray-800 uppercase relative inline-block">
                    Bundle Product
                    <span className="absolute bottom-[-13px] left-0 w-full h-[2px] bg-orange-500"></span>
                </h3>
            </div>

            <Link to="/product/bundle-1" className="flex flex-col items-center" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="relative w-full aspect-square mb-4">
                    {/* Using a placeholder that resembles the green gift set in the image */}
                    <img
                        src="https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=400&q=80"
                        alt="Summer Gift Set"
                        className="w-full h-full object-contain"
                    />
                    {/* Add little thumbnails at the bottom if needed, for now just the main image as per complexity request */}
                </div>

                <div className="flex gap-2 mb-4">
                    <img src="https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=50&q=80" className="w-10 h-10 border border-gray-300 rounded p-1 object-cover" alt="thumb1" />
                    <img src="https://images.unsplash.com/photo-1556228720-1987bad219ec?w=50&q=80" className="w-10 h-10 border border-gray-300 rounded p-1 object-cover" alt="thumb2" />
                </div>

                <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                </div>

                <h4 className="font-medium text-gray-800 text-center mb-1">Summer Gift Set</h4>

                <div className="flex items-center gap-2">
                    <span className="text-orange-500 font-bold">$120.00</span>
                    <span className="text-gray-400 text-sm line-through">$150.00</span>
                </div>
            </Link>
        </div>
    );
};

export default BundleProduct;
