import React, { useState, useEffect } from 'react';
import './HeroBanner.css';
import heroImg from '../../../assets/images/hero-products.png';

const slides = [
    {
        id: 1,
        titleSmall: "SPECIAL OFFER",
        titleLarge: "SALE",
        subtitle: "UPTO 70% OFF",
        btnText: "SHOP NOW",
        image: heroImg
    },
    {
        id: 2,
        titleSmall: "NEW ARRIVALS",
        titleLarge: "GADGETS",
        subtitle: "STARTING $99",
        btnText: "EXPLORE",
        image: heroImg // Can use different image if available, using same for now to ensure load
    },
    {
        id: 3,
        titleSmall: "LIMITED TIME",
        titleLarge: "FASHION",
        subtitle: "FLAT 50% OFF",
        btnText: "GRAB IT",
        image: heroImg
    }
];

const HeroBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000); // Change every 4 seconds
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentSlide];

    return (
        <div className="hero-banner fade-in-animation">
            <div className="banner-content key-animation">
                <h3 className="banner-title-small">{slide.titleSmall}</h3>
                <h1 className="banner-title-large">{slide.titleLarge}</h1>
                <h2 className="banner-subtitle">{slide.subtitle}</h2>

                <button className="banner-btn" style={{
                    backgroundColor: 'white',
                    color: '#F0592A',
                    border: 'none',
                    padding: '12px 30px',
                    borderRadius: '30px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    marginTop: '20px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}>
                    {slide.btnText}
                </button>
            </div>

            <div className="banner-image-container item-animation">
                <img src={slide.image} alt={slide.titleLarge} className="banner-products" />
            </div>

            <div className="slider-dots">
                {slides.map((_, idx) => (
                    <span
                        key={idx}
                        className={`dot ${currentSlide === idx ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(idx)}
                    ></span>
                ))}
            </div>
        </div>
    );
};


export default HeroBanner;
