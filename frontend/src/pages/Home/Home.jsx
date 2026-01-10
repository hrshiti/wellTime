import React from 'react';
import CategorySidebar from '../../components/features/home/CategorySidebar';
import HeroBanner from '../../components/features/home/HeroBanner';
import BestSellers from '../../components/features/products/BestSellers';
import PromoGrid from '../../components/features/home/PromoGrid';
import LatestProducts from '../../components/features/home/LatestProducts';
import FlashSale from '../../components/features/home/FlashSale';
import PromoBanners from '../../components/features/home/PromoBanners';
import ServiceFeatures from '../../components/features/home/ServiceFeatures';
import BundleProduct from '../../components/features/home/BundleProduct';
import ElectronicsFeed from '../../components/features/home/ElectronicsFeed';
import FurnitureFeed from '../../components/features/home/FurnitureFeed';
import TestimonialWidget from '../../components/features/home/TestimonialWidget';
import SidebarBanner from '../../components/features/home/SidebarBanner';
import MiddleBanners from '../../components/features/home/MiddleBanners';
import ProductTabs from '../../components/features/home/ProductTabs';
import BrandLogos from '../../components/features/home/BrandLogos';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">

            <div className="container">
                <div className="home-layout">
                    {/* Left: Sidebar */}
                    <aside className="layout-sidebar">
                        <CategorySidebar />
                    </aside>

                    {/* Middle: Hero Banner */}
                    <main className="layout-main">
                        <HeroBanner />
                    </main>

                    {/* Right: Best Sellers */}
                    <aside className="layout-bestsellers">
                        <BestSellers />
                    </aside>
                </div>
            </div>

            {/* Promos Section */}
            <div className="container">
                <PromoGrid />
            </div>

            {/* New Sections: Latest Products & Flash Sale */}
            <div className="container mx-auto px-4 mt-12 mb-12 space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        <LatestProducts />
                    </div>
                    <div className="lg:col-span-3">
                        <FlashSale />
                    </div>
                </div>
                <PromoBanners />
            </div>

            {/* New Category Feeds with Sidebar */}
            <div className="container mx-auto px-4 mt-12 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left Sidebar */}
                    <aside className="lg:col-span-1 space-y-8 hidden lg:block">
                        <ServiceFeatures />
                        <BundleProduct />
                    </aside>

                    {/* Main Feeds */}
                    <main className="lg:col-span-3 space-y-12">
                        <ElectronicsFeed />
                        <FurnitureFeed />
                    </main>
                </div>
            </div>

            {/* New Brands & Testimonials Section */}
            <div className="container mx-auto px-4 mt-8 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left Sidebar */}
                    <aside className="lg:col-span-1 space-y-8 hidden lg:block">
                        <TestimonialWidget />
                        <SidebarBanner />
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-3 space-y-8">
                        <MiddleBanners />
                        <ProductTabs />
                        <BrandLogos />
                    </main>
                </div>
            </div>

        </div>
    );
};

export default Home;
