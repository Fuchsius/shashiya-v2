import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { services } from '../data/services';
import { Shield, Lock, CreditCard } from 'lucide-react';

interface OrderDetails {
  packageId: string;
  quantity: number;
  customerEmail: string;
  totalPrice: number;
}

const CheckoutPage: React.FC = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Find the package
  const pkg = services
    .flatMap(service => service.packages)
    .find(p => p.id === packageId);

  useEffect(() => {
    // Get order details from localStorage
    const storedOrder = localStorage.getItem('orderDetails');
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder));
    } else {
      // Redirect back if no order details
      navigate('/services');
    }
  }, [navigate]);

  if (!pkg || !orderDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  const handlePaymentSuccess = (details: any) => {
    setIsLoading(true);

    // Store successful order details
    const successData = {
      orderId: details.id,
      packageTitle: pkg.title,
      customerEmail: orderDetails.customerEmail,
      totalAmount: orderDetails.totalPrice,
      quantity: orderDetails.quantity,
      paymentStatus: 'completed',
      timestamp: new Date().toISOString()
    };

    localStorage.setItem('successOrder', JSON.stringify(successData));
    localStorage.removeItem('orderDetails');

    // Redirect to success page
    setTimeout(() => {
      navigate('/success');
    }, 1000);
  };

  const handlePaymentError = (error: any) => {
    console.error('Payment failed:', error);
    setError('Payment failed. Please try again.');
    setIsLoading(false);
  };

  const paypalOptions = {
    clientId: "test", // Replace with your actual PayPal client ID
    currency: "USD",
    intent: "capture"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Secure Checkout
          </h1>
          <p className="text-gray-400">Complete your order safely and securely</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-400">Package</span>
                <span className="text-white">{pkg.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Quantity</span>
                <span className="text-white">{orderDetails.quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Unit Price</span>
                <span className="text-white">${pkg.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Email</span>
                <span className="text-white text-sm">{orderDetails.customerEmail}</span>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Total</span>
                  <span className="text-2xl font-bold text-yellow-400">
                    ${orderDetails.totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Package Features */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-white font-medium mb-3">What's Included:</h3>
              <ul className="space-y-2">
                {pkg.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-center">
                    <Shield className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-6">Payment Method</h2>

            {/* Security Badges */}
            <div className="flex justify-center space-x-6 mb-6">
              <div className="flex items-center space-x-2 text-gray-400">
                <Lock className="h-5 w-5" />
                <span className="text-sm">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <CreditCard className="h-5 w-5" />
                <span className="text-sm">Safe Payment</span>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {isLoading && (
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
                <p className="text-yellow-400 text-sm">Processing your payment...</p>
              </div>
            )}

            {/* PayPal Buttons */}
            <div className="space-y-4">
              <PayPalScriptProvider options={paypalOptions}>
                <PayPalButtons
                  style={{
                    layout: "vertical",
                    color: "gold",
                    shape: "rect",
                    label: "paypal"
                  }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      intent: "CAPTURE",
                      purchase_units: [{
                        amount: {
                          value: orderDetails.totalPrice.toString(),
                          currency_code: "USD"
                        },
                        description: pkg.title
                      }]
                    });
                  }}
                  onApprove={(data, actions) => {
                    if (actions.order) {
                      return actions.order.capture().then(handlePaymentSuccess);
                    }
                    return Promise.reject('Order capture failed');
                  }}
                  onError={handlePaymentError}
                  disabled={isLoading}
                />
              </PayPalScriptProvider>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                By completing this purchase, you agree to our terms of service.
                Your order will be processed immediately after payment confirmation.
              </p>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => navigate(`/services/soundcloud-boost/${pkg.id}`)}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                ← Back to Package Details
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Lock className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-white font-medium mb-1">Secure Payment</h3>
            <p className="text-gray-400 text-sm">256-bit SSL encryption protects your data</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-white font-medium mb-1">Money-Back Guarantee</h3>
            <p className="text-gray-400 text-sm">100% satisfaction or full refund</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <CreditCard className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-white font-medium mb-1">Instant Processing</h3>
            <p className="text-gray-400 text-sm">Orders start within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;