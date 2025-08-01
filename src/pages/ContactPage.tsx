import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Phone, MapPin, Clock } from 'lucide-react';
import { FaLock, FaBolt, FaBullseye } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions about our services? Need help with your order?
            We're here to help you boost your music career.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>

            {submitStatus === 'success' && (
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
                <p className="text-yellow-400 text-sm">
                  Thank you for your message! We'll get back to you within 24 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-4 px-6 rounded-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-yellow-400/25 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email Support</h3>
                    <p className="text-gray-400">support@soundcloudboost.com</p>
                    <p className="text-yellow-400 text-sm">Response within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Live Chat</h3>
                    <p className="text-gray-400">Chat with our team</p>
                    <p className="text-yellow-400 text-sm">Available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Business Hours</h3>
                    <p className="text-gray-400">Monday - Friday: 9 AM - 6 PM EST</p>
                    <p className="text-yellow-400 text-sm">Emergency support 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-1">How quickly do orders start?</h4>
                  <p className="text-gray-400 text-sm">Most orders begin within 24-48 hours of payment confirmation.</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Are your services safe?</h4>
                  <p className="text-gray-400 text-sm">Yes, all our methods are 100% safe and comply with platform guidelines.</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Do you offer refunds?</h4>
                  <p className="text-gray-400 text-sm">We offer a money-back guarantee if you're not satisfied with our service.</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-gray-800 rounded-lg p-4">
                  <FaLock className="text-2xl mb-2 text-yellow-400 mx-auto" />
                  <div className="text-xs text-gray-400">Secure</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-lg p-4">
                  <FaBolt className="text-2xl mb-2 text-yellow-400 mx-auto" />
                  <div className="text-xs text-gray-400">Fast Response</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-lg p-4">
                  <FaBullseye className="text-2xl mb-2 text-yellow-400 mx-auto" />
                  <div className="text-xs text-gray-400">Expert Help</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;