import React from 'react';
import {
    Shirt,
    Armchair,
    HeartPulse,
    User,
    Baby,
    Briefcase,
    Watch,
    ShoppingBag,
    Smartphone,
    PlusCircle
} from 'lucide-react';
import './CategorySidebar.css';

const categories = [
    { name: 'Fashion', icon: Shirt },
    { name: 'Furniture', icon: Armchair },
    { name: 'Health & Beauty', icon: HeartPulse },
    { name: "Men's collection", icon: User },
    { name: "Kid's collection", icon: Baby },
    { name: 'Jackets collection', icon: Briefcase },
    { name: 'Accessories', icon: Watch },
    { name: 'Bags', icon: ShoppingBag },
    { name: 'Electronics', icon: Smartphone },
];

import { Link } from 'react-router-dom';

const CategorySidebar = () => {
    return (
        <div className="category-sidebar">
            <ul className="category-list">
                {categories.map((cat, index) => {
                    // Create a slug for the URL
                    const slug = cat.name.toLowerCase().replace(/['&]/g, '').replace(/\s+/g, '-');
                    return (
                        <li key={index} className="category-item">
                            <Link to={`/category/${slug}`} className="category-link" style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', color: 'inherit', textDecoration: 'none' }}>
                                <cat.icon size={18} color="#666" />
                                <span className="cat-text">{cat.name}</span>
                            </Link>
                        </li>
                    );
                })}
                <li className="category-item">
                    <Link to="/category/all" style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', textDecoration: 'none' }}>
                        <PlusCircle size={18} color="#F0592A" />
                        <span className="cat-text see-more" style={{ color: '#F0592A' }}>See More</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CategorySidebar;
