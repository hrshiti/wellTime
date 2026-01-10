import React from 'react';

const PromoBanners = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Banner 1: Headphones */}
            <div className="relative overflow-hidden group h-64 rounded-lg">
                <div className="absolute inset-0 bg-indigo-950">
                    <img
                        src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80"
                        alt="Headphones"
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                    <span className="border-2 border-white rounded-full w-24 h-24 flex items-center justify-center text-white font-bold text-xl uppercase transform -rotate-12 mb-4 bg-white/10 backdrop-blur-sm">
                        Super<br />Deal!
                    </span>
                </div>
            </div>

            {/* Banner 2: Phone */}
            <div className="relative overflow-hidden group h-64 rounded-lg">
                <div className="absolute inset-0 bg-violet-500">
                    <img
                        src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80"
                        alt="Mobile Phone"
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-transparent"></div>
                <div className="absolute top-8 left-0 right-0 text-center text-white">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase mb-1">Galaxy Note 8</p>
                    <h3 className="text-2xl font-bold uppercase drop-shadow-md">Do Bigger Things</h3>
                </div>
                <div className="absolute bottom-10 right-10">
                    <div className="border-2 border-white rounded-full w-20 h-20 flex items-center justify-center text-white font-bold text-lg uppercase transform rotate-12 bg-orange-500 shadow-lg animate-pulse">
                        Super<br />Deal!
                    </div>
                </div>
            </div>

            {/* Banner 3: Fashion */}
            <div className="relative overflow-hidden group h-64 rounded-lg bg-gray-100">
                <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
                    alt="Fashion"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 bg-orange-500 p-3 rounded-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
                </div>
            </div>
        </div>
    );
};

export default PromoBanners;
