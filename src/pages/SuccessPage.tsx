import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Mail, Clock, Shield, Home } from 'lucide-react';

interface SuccessOrder {
  orderId: string;
  packageTitle: string;
  customerEmail: string;
  totalAmount: number;
  quantity: number;
  paymentStatus: string;
  timestamp: string;
}

const SuccessPage: React.FC = () => {
  const [orderData, setOrderData] = useState<SuccessOrder | null>(null);

  useEffect(() => {
    const storedOrder = localStorage.getItem('successOrder');
    if (storedOrder) {
      setOrderData(JSON.parse(storedOrder));
    }
  }, []);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">No Order Found</h1>
          <Link
            to="/"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-6 py-3 rounded-lg"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-black" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-gray-400">
            Thank you for choosing Sound Cloud Boost. Your order is being processed.
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Order Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-gray-400 text-sm">Order ID</label>
              <p className="text-white font-mono text-lg">{orderData.orderId}</p>
            </div>
            <div>
              <label className="text-gray-400 text-sm">Package</label>
              <p className="text-white text-lg">{orderData.packageTitle}</p>
            </div>
            <div>
              <label className="text-gray-400 text-sm">Email</label>
              <p className="text-white text-lg">{orderData.customerEmail}</p>
            </div>
            <div>
              <label className="text-gray-400 text-sm">Total Paid</label>
              <p className="text-yellow-400 text-2xl font-bold">${orderData.totalAmount.toFixed(2)}</p>
            </div>
          </div>

          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 text-yellow-400 mb-2">
              <CheckCircle className="h-5 w-5" />
              <span className="font-semibold">Payment Successful</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your payment has been processed successfully. You will receive a confirmation email shortly.
            </p>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">What Happens Next?</h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Order Processing</h3>
                <p className="text-gray-400">
                  Our team will review your order and begin processing within the next few hours.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Service Delivery</h3>
                <p className="text-gray-400">
                  Your promotion will start within 24-48 hours and will be delivered gradually for natural results.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Updates & Support</h3>
                <p className="text-gray-400">
                  We'll keep you updated via email and provide support throughout the process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email Support</h3>
            <p className="text-gray-400 text-sm mb-3">Need help? Contact us anytime</p>
            <a
              href="mailto:support@soundcloudboost.com"
              className="text-yellow-400 hover:text-yellow-300 text-sm"
            >
              support@soundcloudboost.com
            </a>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-white font-semibold mb-2">Delivery Time</h3>
            <p className="text-gray-400 text-sm mb-3">Most orders start within</p>
            <p className="text-yellow-400 font-semibold">24-48 Hours</p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-white font-semibold mb-2">Guarantee</h3>
            <p className="text-gray-400 text-sm mb-3">100% satisfaction or</p>
            <p className="text-yellow-400 font-semibold">Money Back</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <Link
            to="/services"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-4 rounded-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-400/25 mr-4"
          >
            Order More Services
          </Link>
          <Link
            to="/"
            className="inline-block border border-gray-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
          >
            <Home className="h-5 w-5 inline mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Keep this page bookmarked for your records. You can also screenshot this confirmation for future reference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;