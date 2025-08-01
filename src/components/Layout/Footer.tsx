import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Mail, Shield, Clock, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-2 rounded-lg">
                <Headphones className="h-6 w-6 text-black" />
              </div>
              <span className="text-xl font-bold text-white">Sound Cloud Boost</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional music promotion services to boost your SoundCloud presence,
              create stunning visuals, and produce engaging video content.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="h-4 w-4 text-yellow-400" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Clock className="h-4 w-4 text-yellow-400" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>support@soundcloudboost.com</span>
              </div>
              <p className="text-gray-400 text-sm">
                24/7 Customer Support
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Fuchsius. All rights reserved. <a href="https://fuchsius.com" className=" hover:text-white text-fuchsia-600">Fuchsius</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;