import React from 'react';
import { Link } from 'react-router-dom';
import { Package } from '../../types';
import { Star, Clock, Shield } from 'lucide-react';

interface PackageCardProps {
  package: Package;
  showCategory?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg, showCategory = false }) => {
  const getCategoryPath = (category: string) => {
    switch (category) {
      case 'soundcloud': return 'soundcloud-boost';
      case 'design': return 'graphic-design';
      case 'video': return 'video-editing';
      default: return category;
    }
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group relative overflow-hidden">
      {pkg.popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
          <Star className="h-3 w-3 inline mr-1" />
          POPULAR
        </div>
      )}

      <div className="mb-4">
        {showCategory && (
          <span className="text-yellow-400 text-sm font-medium mb-2 block">
            {pkg.category === 'soundcloud' ? 'SoundCloud Boost' : 
             pkg.category === 'design' ? 'Graphic Design' : 'Video Editing'}
          </span>
        )}
        <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
        <p className="text-gray-400 text-sm">{pkg.description}</p>
      </div>

      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-2xl font-bold text-white">${pkg.price}</span>
          {pkg.originalPrice && (
            <span className="text-lg text-gray-500 line-through">${pkg.originalPrice}</span>
          )}
        </div>
        <div className="flex items-center text-gray-400 text-sm">
          <Clock className="h-4 w-4 mr-1" />
          <span>{pkg.duration}</span>
        </div>
      </div>

      <ul className="space-y-2 mb-6">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300 text-sm">
            <Shield className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to={`/services/${getCategoryPath(pkg.category)}/${pkg.id}`}
        className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 px-4 rounded-lg text-center hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-400/25"
      >
        Get Started
      </Link>
    </div>
  );
};

export default PackageCard;