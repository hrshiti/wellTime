import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialWidget = () => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
            <div className="relative w-24 h-24 mx-auto mb-4">
                <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80"
                    alt="Johny Walker"
                    className="w-full h-full object-cover rounded-full border-2 border-gray-100 p-1"
                />
            </div>

            <h4 className="font-bold text-gray-800 text-lg mb-4">Johny Walker</h4>

            <div className="relative text-gray-500 text-sm leading-relaxed mb-6 px-2">
                <Quote size={20} className="absolute top-[-10px] left-0 text-gray-300 transform -scale-x-100" />
                Kate Moss. Sexy Stuart Weitzman boots. Enough said. It is a long established fact that a reader will be distracted by the readable content of...
                <Quote size={20} className="absolute bottom-[-5px] right-0 text-gray-300" />
            </div>

            <div className="flex justify-center gap-2">
                <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
                <span className="w-2 h-1 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-1 bg-gray-300 rounded-full"></span>
            </div>
        </div>
    );
};

export default TestimonialWidget;
