import React from 'react';

// Using simple SVG shapes or text to simulate logos as requested by "exact same" but without external assets.
// I will create simple aesthetic equivalents.

const BrandLogos = () => {
    return (
        <div className="bg-white border border-gray-100 rounded-lg p-8 mt-8">
            <div className="flex flex-wrap justify-between items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">

                {/* GameBox */}
                <div className="flex flex-col items-center group cursor-pointer hover:opacity-100">
                    <div className="w-12 h-12 border-4 border-red-600 rounded-lg transform rotate-45 flex items-center justify-center mb-2 group-hover:bg-red-50">
                        <span className="transform -rotate-45 font-bold text-xl text-black">G</span>
                    </div>
                    <span className="font-bold text-black uppercase tracking-wider text-sm">GameBox</span>
                </div>

                {/* Logo Text Green */}
                <div className="flex flex-col items-center group cursor-pointer hover:opacity-100">
                    <div className="bg-green-600 text-white w-10 h-10 flex items-center justify-center font-bold text-xl rounded-tl-lg mb-1">K</div>
                    <span className="font-bold text-green-600 uppercase text-xs">LOGO TEXT</span>
                </div>

                {/* Logo Text Pink */}
                <div className="flex flex-col items-center group cursor-pointer hover:opacity-100">
                    <div className="relative mb-1">
                        <div className="w-16 h-8 bg-pink-600 rounded-lg relative flex items-center justify-center">
                            <span className="text-white font-bold">H</span>
                        </div>
                    </div>
                    <span className="font-bold text-pink-600 uppercase text-xs tracking-widest">LOGO TEXT</span>
                </div>

                {/* GameBox Again (as per image repetition often seen in mockups, or similar style) */}
                <div className="flex flex-col items-center group cursor-pointer hover:opacity-100">
                    <div className="w-12 h-12 border-4 border-red-600 rounded-lg transform rotate-45 flex items-center justify-center mb-2 group-hover:bg-red-50">
                        <span className="transform -rotate-45 font-bold text-xl text-black">G</span>
                    </div>
                    <span className="font-bold text-black uppercase tracking-wider text-sm">GameBox</span>
                </div>

                {/* Logo Text Green Again */}
                <div className="flex flex-col items-center group cursor-pointer hover:opacity-100">
                    <div className="bg-green-600 text-white w-10 h-10 flex items-center justify-center font-bold text-xl rounded-tl-lg mb-1">K</div>
                    <span className="font-bold text-green-600 uppercase text-xs">LOGO TEXT</span>
                </div>

                {/* Logo Text Pink Again */}
                <div className="flex flex-col items-center group cursor-pointer hover:opacity-100">
                    <div className="relative mb-1">
                        <div className="w-16 h-8 bg-pink-600 rounded-lg relative flex items-center justify-center">
                            <span className="text-white font-bold">H</span>
                        </div>
                    </div>
                    <span className="font-bold text-pink-600 uppercase text-xs tracking-widest">LOGO TEXT</span>
                </div>

                {/* Natural Source */}
                <div className="flex flex-col items-center group cursor-pointer hover:opacity-100">
                    <div className="w-10 h-10 rounded-full border-2 border-blue-400 flex items-center justify-center mb-1">
                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="font-bold text-gray-800 text-xs">NaturalSource</span>
                </div>
            </div>
        </div>
    );
};

export default BrandLogos;
