import React from 'react';
import './PromoGrid.css';

const promos = [
    {
        id: 1,
        bgColor: '#f48fb1',
        title: 'KIDS FASHION',
        subtitle: '$49.89',
        caption: 'Shop now',
        image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=300&q=80', // Kids
        light: false
    },
    {
        id: 2,
        bgColor: '#ffab91',
        title: 'CLEAR TREE',
        subtitle: '20%-40%',
        caption: 'SAT - MON',
        image: 'https://images.unsplash.com/photo-1556228578-8d8448292e07?w=300&q=80', // Health/Beauty Bottles
        description: 'HEALTH & BEAUTY',
        light: false
    },
    {
        id: 3,
        bgColor: '#ffcc80',
        title: 'BEST SALE',
        subtitle: 'FURNITURE DESIGN',
        caption: 'SAT - MON',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=80', // Sofa
        description: 'FURNITURE & DECOR',
        light: false
    },
    {
        id: 4,
        bgColor: '#ce93d8',
        title: 'LONG WEEKEND',
        subtitle: '30%-50%',
        caption: 'SAT - MON',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&q=80', // Handbag
        description: 'FASHION & ACCESORIES',
        light: false
    },
    {
        id: 5,
        bgColor: '#81d4fa',
        title: 'BLACK FRIDAY',
        subtitle: 'SALE OFF 30%',
        caption: 'SAT - MON',
        image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=300&q=80', // VR Headset
        description: 'ELECTRONIC',
        light: false
    },
    {
        id: 6,
        bgColor: '#a5d6a7',
        title: 'LONG WEEKEND',
        subtitle: '10%-30%',
        caption: 'SAT - MON',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&q=80', // Tablet/iPad
        description: 'TABLET & ACCESORIES',
        light: false
    }
];

const PromoGrid = () => {
    return (
        <div className="promo-grid">
            {promos.map((promo) => (
                <div
                    key={promo.id}
                    className="promo-card"
                    style={{ backgroundColor: promo.bgColor }}
                >
                    <div className="card-content">
                        {promo.subtitle && (
                            <div className={`card-subtitle ${promo.subtitle.includes('$') ? 'text-yellow' : ''}`}>
                                {promo.subtitle}
                            </div>
                        )}
                        <div className="card-title">
                            {promo.title}
                        </div>
                        {promo.description && (
                            <div className="card-desc">{promo.description}</div>
                        )}
                        <span className="card-caption">{promo.caption}</span>
                    </div>

                    <div className="card-bg-decoration">
                        <img src={promo.image} alt={promo.title} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PromoGrid;
