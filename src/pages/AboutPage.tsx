import React from 'react';
import { Users, Target, Shield, Award, TrendingUp, Heart, Zap, Gem, Palette, HandMetal } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '10,000+' },
    { icon: TrendingUp, label: 'Plays Delivered', value: '50M+' },
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Shield, label: 'Success Rate', value: '99.9%' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We use only safe, compliant methods that protect your account and reputation.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Our focus is on delivering real, measurable results that boost your music career.'
    },
    {
      icon: Heart,
      title: 'Artist Focused',
      description: 'We understand the music industry and tailor our services to artist needs.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'Premium service quality backed by our money-back guarantee.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Former music industry executive with 10+ years of experience in digital marketing.'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Head of Growth',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Digital marketing specialist who has helped thousands of artists grow their presence.'
    },
    {
      name: 'Emily Chen',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Award-winning designer creating stunning visuals for top recording artists.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Sound Cloud Boost
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            We're passionate about helping independent artists succeed in the music industry.
            Since 2019, we've been providing safe, effective promotion services that deliver real results.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                Sound Cloud Boost was founded in 2019 by a team of music industry professionals
                who recognized the challenges independent artists face in getting their music heard.
              </p>
              <p>
                We saw talented artists struggling to break through the noise, despite creating
                amazing music. That's when we decided to bridge the gap between great music and
                the audience it deserves.
              </p>
              <p>
                Today, we've helped over 10,000 artists boost their presence across platforms,
                delivered over 50 million plays, and created thousands of stunning visual assets
                that help artists stand out in the crowded music landscape.
              </p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 mb-6">
              To democratize music promotion by providing affordable, effective, and safe services
              that help independent artists reach their full potential.
            </p>
            <h3 className="text-xl font-semibold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400">
              A music industry where talent is the only barrier to success, not budget or connections.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-400">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400">
              The passionate professionals behind Sound Cloud Boost
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-yellow-400 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-yellow-400/10 to-purple-600/10 rounded-2xl p-12 border border-gray-800">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Sound Cloud Boost?</h2>
            <p className="text-xl text-gray-400">
              We're not just another promotion service - we're your partners in success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Target className="h-10 w-10 text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Targeted Growth</h3>
              <p className="text-gray-400 text-sm">
                We don't just deliver numbers - we help you reach the right audience that will genuinely engage with your music.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Shield className="h-10 w-10 text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">100% Safe</h3>
              <p className="text-gray-400 text-sm">
                All our methods are completely safe and comply with platform guidelines. Your account security is our priority.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Zap className="h-10 w-10 text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Fast Results</h3>
              <p className="text-gray-400 text-sm">
                Most orders start within 24 hours, but we deliver gradually for natural, organic-looking growth.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Gem className="h-10 w-10 text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-400 text-sm">
                We work only with real users and verified accounts to ensure the highest quality engagement.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Palette className="h-10 w-10 text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Creative Excellence</h3>
              <p className="text-gray-400 text-sm">
                Our design and video services are created by industry professionals who understand music branding.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <HandMetal className="h-10 w-10 text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Full Support</h3>
              <p className="text-gray-400 text-sm">
                Our team is here to support you every step of the way, from order to delivery and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;