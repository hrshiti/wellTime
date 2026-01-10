import React from 'react';

const SidebarBanner = () => {
    return (
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden group">
            <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80"
                alt="Food Banner"
                className="w-full h-full object-cover object-center brightness-75 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute top-12 left-0 right-0 text-center text-white px-4">
                <p className="font-serif italic text-2xl mb-1 opacity-90">Nazy about</p>
                <h3 className="text-xl font-bold uppercase tracking-wider mb-2">CLEMENGILDS TM</h3>
                <button className="mt-4 text-xs font-bold border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors uppercase">
                    Shop Buy Now
                </button>
            </div>

            <div className="absolute bottom-8 right-4">
                <span className="font-serif italic text-4xl text-white/20 -rotate-12 block">IN SEASON</span>
            </div>
        </div>
    );
};

export default SidebarBanner;
