import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Users, Star, TrendingUp, Shield, Clock, CheckCircle } from 'lucide-react';
import PackageCard from '../components/UI/PackageCard';
import { services, featuredPackages } from '../data/services';

const HomePage: React.FC = () => {
  const featuredRef = useRef<HTMLDivElement>(null);

  const scrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Get featured packages
  const featured = services
    .flatMap(service => service.packages)
    .filter(pkg => featuredPackages.includes(pkg.id));

  const stats = [
    { icon: Users, label: 'Artists Boosted', value: '10,000+' },
    { icon: Play, label: 'Plays Delivered', value: '50M+' },
    { icon: Star, label: 'Success Rate', value: '99.9%' },
    { icon: TrendingUp, label: 'Growth Average', value: '300%' },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All our services are 100% safe and comply with platform guidelines'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Most orders start within 24 hours with gradual, natural delivery'
    },
    {
      icon: CheckCircle,
      title: 'High Quality',
      description: 'Real users and premium content from verified accounts only'
    },
    {
      icon: TrendingUp,
      title: 'Guaranteed Results',
      description: 'We guarantee results or your money back - no questions asked'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-600/10 blur-3xl"></div>
          <div className="relative">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Boost Your{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                SoundCloud
              </span>
              <br />
              Presence Today
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional music promotion services, stunning graphic design, and engaging video content
              to take your music career to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToFeatured}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-4 rounded-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-400/25"
              >
                View Packages
              </button>
              <Link
                to="/services"
                className="border border-gray-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
              >
                Browse All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-black" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Sound Cloud Boost?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're trusted by thousands of artists worldwide to deliver real results safely and efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section ref={featuredRef} className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Packages
            </h2>
            <p className="text-xl text-gray-400">
              Our most popular services trusted by thousands of artists
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} showCategory={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Trusted by Artists Worldwide
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rodriguez",
                role: "Hip-Hop Producer",
                content: "Sound Cloud Boost helped me reach 100K plays in just 2 months. The quality is unmatched!",
                rating: 5
              },
              {
                name: "Sarah Chen",
                role: "Electronic Artist",
                content: "Amazing service! The album cover they designed perfectly captured my vision. Highly recommended!",
                rating: 5
              },
              {
                name: "Mike Johnson",
                role: "Indie Musician",
                content: "Fast delivery and real results. My follower count doubled within weeks. Worth every penny!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-yellow-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-yellow-400/10 to-purple-600/10 rounded-2xl p-12 border border-gray-800">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Boost Your Music Career?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful artists who trust Sound Cloud Boost for their promotion needs.
          </p>
          <Link
            to="/services"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-4 rounded-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-400/25"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;