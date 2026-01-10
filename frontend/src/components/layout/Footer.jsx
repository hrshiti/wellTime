import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import Newsletter from './Newsletter';
import Logo from '../common/Logo';

const Footer = () => {
    return (
        <footer className="footer-section">
            <Newsletter />

            <div className="bg-[#f8f8f8] pt-16 pb-12 border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 font-sans">

                        {/* Brand Column */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Logo />
                            </div>

                            <ul className="space-y-4 text-sm text-gray-500">
                                <li className="flex gap-3">
                                    <MapPin size={16} className="flex-shrink-0 mt-1 text-gray-800" />
                                    <span className="leading-relaxed">No 40 Baria Street 133/2 Newyork City, NY, United States</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <Mail size={16} className="flex-shrink-0 text-gray-800" />
                                    <span>Contact@Example.Com</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <Phone size={16} className="flex-shrink-0 text-gray-800" />
                                    <span>(888) 1234 56789</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <Clock size={16} className="flex-shrink-0 text-gray-800" />
                                    <span>Mon - Sun / 9:00AM</span>
                                </li>
                            </ul>
                        </div>

                        {/* Link Columns */}
                        {['OUR SERVICES', 'INFORMATION', 'OUR SERVICES', 'INFORMATION'].map((title, idx) => (
                            <div key={idx} className="lg:col-span-1">
                                <h4 className="font-bold text-gray-800 uppercase mb-6 relative inline-block text-sm">
                                    {title}
                                    <span className="absolute bottom-[-10px] left-0 w-8 h-[2px] bg-orange-500"></span>
                                </h4>
                                <ul className="space-y-4 text-sm text-gray-500">
                                    <li><a href="#" className="hover:text-orange-500 transition-colors">About Store</a></li>
                                    <li><a href="#" className="hover:text-orange-500 transition-colors">New Collection</a></li>
                                    <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
                                    <li><a href="#" className="hover:text-orange-500 transition-colors">Latest News</a></li>
                                    <li><a href="#" className="hover:text-orange-500 transition-colors">Our Sitemap</a></li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-white py-8">
                <div className="container mx-auto px-4 flex flex-col items-center space-y-8">
                    {/* Payment/Security Badges */}
                    <div className="flex flex-wrap justify-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all">
                        {/* Using placeholders for specific security badges */}
                        <img src="https://placehold.co/120x50/314e8c/ffffff?text=Accredited" alt="Accredited Business" className="h-10 object-contain" />
                        <img src="https://placehold.co/120x50/009688/ffffff?text=Trustwave" alt="Trustwave" className="h-10 object-contain" />
                        <img src="https://placehold.co/120x50/ffc107/000000?text=Norton" alt="Norton" className="h-10 object-contain" />
                        <img src="https://placehold.co/120x50/4caf50/ffffff?text=TRUSTe" alt="TRUSTe" className="h-10 object-contain" />
                    </div>

                    {/* Bottom Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-[11px] font-bold text-gray-600 uppercase tracking-wide">
                        <a href="#" className="hover:text-orange-500">About Store</a>
                        <a href="#" className="hover:text-orange-500">New Collection</a>
                        <a href="#" className="hover:text-orange-500">Contact Us</a>
                        <a href="#" className="hover:text-orange-500">Latest News</a>
                        <a href="#" className="hover:text-orange-500">Our Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
