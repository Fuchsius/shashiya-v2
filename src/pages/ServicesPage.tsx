import React, { useState } from 'react';
import { FaSoundcloud, FaPaintBrush, FaVideo, FaLock, FaBolt, FaGem } from 'react-icons/fa';
import { services } from '../data/services';
import PackageCard from '../components/UI/PackageCard';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('soundcloud');

  const tabs = [
    { id: 'soundcloud', title: 'SoundCloud Boost', icon: <FaSoundcloud /> },
    { id: 'design', title: 'Graphic Design', icon: <FaPaintBrush /> },
    { id: 'video', title: 'Video Editing', icon: <FaVideo /> },
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional music promotion, stunning design, and engaging video content
            to elevate your music career.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-col sm:flex-row justify-center mb-12 space-y-2 sm:space-y-0 sm:space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === tab.id
                ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Service Content */}
        {activeService && (
          <div className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {activeService.title}
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                {activeService.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeService.packages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl"><FaLock /></span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Safe & Secure</h3>
            <p className="text-gray-400">
              100% safe methods that comply with all platform guidelines
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl"><FaBolt /></span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
            <p className="text-gray-400">
              Most orders start within 24 hours with natural delivery speed
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl"><FaGem /></span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Premium Quality</h3>
            <p className="text-gray-400">
              High-quality services from real users and verified accounts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;