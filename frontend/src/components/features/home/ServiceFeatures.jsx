import React from 'react';
import { Truck, ShieldCheck, Gift, RefreshCw } from 'lucide-react';

const features = [
    {
        id: 1,
        icon: <Truck size={32} className="text-orange-500" />,
        title: 'FREE DELIVERY',
        subtitle: 'On Order Over $49.86'
    },
    {
        id: 2,
        icon: <ShieldCheck size={32} className="text-orange-500" />,
        title: 'ORDER PROTECTION',
        subtitle: 'Secured Information'
    },
    {
        id: 3,
        icon: <Gift size={32} className="text-orange-500" />,
        title: 'PROMOTION GIFT',
        subtitle: 'Special Offers!'
    },
    {
        id: 4,
        icon: <RefreshCw size={32} className="text-orange-500" />,
        title: 'MONEY BACK',
        subtitle: 'Return Over 30 Days'
    }
];

const ServiceFeatures = () => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-0">
            {features.map((feature, index) => (
                <div
                    key={feature.id}
                    className={`flex items-center gap-4 p-6 ${index !== features.length - 1 ? 'border-b border-gray-100' : ''} hover:shadow-sm transition-shadow`}
                >
                    <div className="flex-shrink-0">
                        {feature.icon}
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800 text-sm uppercase">{feature.title}</h4>
                        <p className="text-gray-400 text-xs">{feature.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceFeatures;
