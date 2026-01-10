import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Globe } from 'lucide-react';

const Newsletter = () => {
    return (
        <div className="bg-[#ff6600] py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Left: Follow Us */}
                    <div className="flex items-center gap-4">
                        <h4 className="text-white font-bold uppercase text-sm tracking-wide">Follow Us</h4>
                        <div className="flex gap-1">
                            {/* Social Icons - approximated with squares */}
                            <a href="#" className="w-8 h-8 bg-[#d15402] hover:bg-black/20 flex items-center justify-center text-white transition-colors rounded-sm">
                                <Facebook size={14} fill="white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-[#d15402] hover:bg-black/20 flex items-center justify-center text-white transition-colors rounded-sm">
                                <Twitter size={14} fill="white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-[#d15402] hover:bg-black/20 flex items-center justify-center text-white transition-colors rounded-sm">
                                <Linkedin size={14} fill="white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-[#d15402] hover:bg-black/20 flex items-center justify-center text-white transition-colors rounded-sm">
                                <Instagram size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 bg-[#d15402] hover:bg-black/20 flex items-center justify-center text-white transition-colors rounded-sm">
                                <Globe size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Right: Subscribe Form */}
                    <div className="w-full md:w-auto">
                        <div className="flex w-full md:w-[500px] h-10">
                            <input
                                type="email"
                                placeholder="Enter your mail.."
                                className="flex-1 px-4 text-sm text-gray-600 outline-none placeholder:text-gray-400"
                            />
                            <button className="bg-[#1f1f1f] text-white px-6 text-xs font-bold uppercase hover:bg-black transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
