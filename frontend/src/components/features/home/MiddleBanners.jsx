import React from 'react';

const MiddleBanners = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Watch Banner */}
            <div className="relative h-48 rounded-lg overflow-hidden bg-[#2a1b1b] group">
                <div className="absolute inset-0 flex justify-between items-center p-8">
                    <img
                        src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80"
                        alt="Smartwatch"
                        className="h-40 w-auto transform -rotate-12 object-contain"
                    />
                    <div className="text-center text-white z-10">
                        <p className="text-[10px] tracking-widest uppercase mb-2">From 14 - 21 January, 2018</p>
                        <h3 className="text-3xl font-light mb-1">Iwatches</h3>
                        <p className="text-xs text-gray-300 italic mb-4">Feels like a whole new watch.</p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold px-6 py-1.5 rounded-full uppercase transition-colors">
                            Shop Now
                        </button>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=400&q=80"
                        alt="Smartwatch 2"
                        className="h-40 w-auto transform rotate-12 object-contain opacity-80"
                    />
                </div>
            </div>

            {/* Decor Banner */}
            <div className="relative h-48 rounded-lg overflow-hidden group">
                <img
                    src="https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?w=600&q=80"
                    alt="Blue House"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-multiply"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full">
                    <h3 className="text-2xl font-bold text-shadow-sm mb-1">A Sky Blue House</h3>
                    <p className="text-sm opacity-90 font-light tracking-wide">Innovation security in your family</p>
                </div>

                <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                    <div className="w-24 h-24 rounded-full bg-orange-500 text-white flex flex-col justify-center items-center shadow-lg animate-bounce-slow border-4 border-white/20">
                        <span className="text-2xl font-bold">60%</span>
                        <span className="text-sm font-serif italic">Decor</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleBanners;
