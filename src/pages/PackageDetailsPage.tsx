import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import { Star, Clock, Shield, Plus, Minus, Mail } from 'lucide-react';

const PackageDetailsPage: React.FC = () => {
  const { category, packageId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [customerEmail, setCustomerEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Find the package
  const pkg = services
    .flatMap(service => service.packages)
    .find(p => p.id === packageId);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Package Not Found</h1>
          <button
            onClick={() => navigate('/services')}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-6 py-3 rounded-lg"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setCustomerEmail(email);

    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleProceedToCheckout = () => {
    if (!customerEmail) {
      setEmailError('Email is required to proceed');
      return;
    }

    if (!validateEmail(customerEmail)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Store order details in localStorage for checkout
    const orderDetails = {
      packageId: pkg.id,
      quantity,
      customerEmail,
      totalPrice: pkg.price * quantity
    };

    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    navigate(`/checkout/${pkg.id}`);
  };

  const totalPrice = pkg.price * quantity;
  const savings = pkg.originalPrice ? (pkg.originalPrice - pkg.price) * quantity : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Package Details */}
          <div>
            <div className="mb-6">
              <span className="text-yellow-400 text-sm font-medium">
                {pkg.category === 'soundcloud' ? 'SoundCloud Boost' :
                  pkg.category === 'design' ? 'Graphic Design' : 'Video Editing'}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
                {pkg.title}
              </h1>
              <p className="text-lg text-gray-400">{pkg.description}</p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-white">${pkg.price}</span>
                  {pkg.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">${pkg.originalPrice}</span>
                  )}
                  {pkg.popular && (
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      POPULAR
                    </div>
                  )}
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              {savings > 0 && (
                <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-3 mb-4">
                  <p className="text-yellow-400 text-sm font-medium">
                    You save ${savings.toFixed(2)} with this package!
                  </p>
                </div>
              )}
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">What's Included</h3>
              <ul className="space-y-3">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Shield className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
                  <Shield className="text-yellow-400 h-8 w-8 mb-2" />
                  <div className="text-sm text-gray-400">100% Safe</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
                  <Clock className="text-yellow-400 h-8 w-8 mb-2" />
                  <div className="text-sm text-gray-400">Fast Start</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
                  <Star className="text-yellow-400 h-8 w-8 mb-2" />
                  <div className="text-sm text-gray-400">High Quality</div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">Place Your Order</h3>

              {/* Email Input */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail className="h-4 w-4 inline mr-1" />
                  Your Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={customerEmail}
                  onChange={handleEmailChange}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors ${emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-yellow-400'
                    }`}
                />
                {emailError && (
                  <p className="mt-2 text-sm text-red-400">{emailError}</p>
                )}
                <p className="mt-2 text-xs text-gray-500">
                  We'll use this email to send you order updates and delivery confirmation
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4 text-yellow-400" />
                  </button>
                  <span className="text-xl font-semibold text-white px-4">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors"
                  >
                    <Plus className="h-4 w-4 text-yellow-400" />
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Package Price</span>
                  <span className="text-white">${pkg.price} × {quantity}</span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">You Save</span>
                    <span className="text-yellow-400">-${savings.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-gray-700 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-white">Total</span>
                    <span className="text-2xl font-bold text-yellow-400">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleProceedToCheckout}
                disabled={!customerEmail || !!emailError}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-4 px-6 rounded-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-yellow-400/25"
              >
                Proceed to Checkout
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Secure checkout powered by PayPal. Your payment information is protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsPage;