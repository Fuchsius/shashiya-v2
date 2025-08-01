import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'soundcloud',
    title: 'SoundCloud Boost',
    description: 'Boost your SoundCloud presence with real plays, likes, and followers',
    icon: '🎵',
    packages: [
      {
        id: 'sc-plays-1k',
        title: '1,000 SoundCloud Plays',
        category: 'soundcloud',
        price: 4.99,
        originalPrice: 9.99,
        features: [
          '1,000 High-Quality Plays',
          '24-48 Hour Delivery',
          'Real Active Users',
          'Safe & Secure',
          'No Password Required'
        ],
        duration: '24-48 hours',
        popular: true,
        description: 'Boost your track with 1,000 high-quality SoundCloud plays from real users.'
      },
      {
        id: 'sc-plays-5k',
        title: '5,000 SoundCloud Plays',
        category: 'soundcloud',
        price: 19.99,
        originalPrice: 39.99,
        features: [
          '5,000 High-Quality Plays',
          '24-72 Hour Delivery',
          'Real Active Users',
          'Safe & Secure',
          'No Password Required',
          'Gradual Delivery'
        ],
        duration: '24-72 hours',
        description: 'Get 5,000 high-quality SoundCloud plays to significantly boost your track visibility.'
      },
      {
        id: 'sc-likes-500',
        title: '500 SoundCloud Likes',
        category: 'soundcloud',
        price: 7.99,
        features: [
          '500 Real Likes',
          '12-24 Hour Delivery',
          'Organic Growth',
          'Safe & Secure',
          'No Password Required'
        ],
        duration: '12-24 hours',
        description: 'Increase engagement with 500 genuine SoundCloud likes from real users.'
      },
      {
        id: 'sc-followers-100',
        title: '100 SoundCloud Followers',
        category: 'soundcloud',
        price: 12.99,
        features: [
          '100 Real Followers',
          '24-48 Hour Delivery',
          'Active Profiles',
          'Safe & Secure',
          'No Password Required'
        ],
        duration: '24-48 hours',
        description: 'Grow your fanbase with 100 real SoundCloud followers who actively engage.'
      }
    ]
  },
  {
    id: 'design',
    title: 'Graphic Design',
    description: 'Professional artwork and visual content for your music brand',
    icon: '🎨',
    packages: [
      {
        id: 'cover-art',
        title: 'Album Cover Design',
        category: 'design',
        price: 29.99,
        features: [
          'Custom Album Artwork',
          '3000x3000px High Resolution',
          '3 Revision Rounds',
          '24-48 Hour Delivery',
          'Source Files Included'
        ],
        duration: '24-48 hours',
        popular: true,
        description: 'Get a professional, eye-catching album cover designed specifically for your music.'
      },
      {
        id: 'logo-design',
        title: 'Artist Logo Design',
        category: 'design',
        price: 39.99,
        features: [
          'Custom Logo Design',
          'Vector & PNG Formats',
          '5 Revision Rounds',
          '48-72 Hour Delivery',
          'Brand Guidelines'
        ],
        duration: '48-72 hours',
        description: 'Create a memorable brand identity with a custom logo designed for your music career.'
      },
      {
        id: 'social-pack',
        title: 'Social Media Pack',
        category: 'design',
        price: 49.99,
        features: [
          '10 Social Media Posts',
          'Instagram Story Templates',
          'Facebook Cover Design',
          '3-5 Day Delivery',
          'Editable Templates'
        ],
        duration: '3-5 days',
        description: 'Complete social media package with custom posts and templates for all platforms.'
      }
    ]
  },
  {
    id: 'video',
    title: 'Video Editing',
    description: 'Professional video content to showcase your music',
    icon: '🎥',
    packages: [
      {
        id: 'lyric-video',
        title: 'Lyric Video',
        category: 'video',
        price: 79.99,
        features: [
          'Custom Lyric Video',
          'HD 1080p Quality',
          'Motion Graphics',
          '3-5 Day Delivery',
          '2 Revision Rounds'
        ],
        duration: '3-5 days',
        popular: true,
        description: 'Engaging lyric video with custom animations and visual effects for your track.'
      },
      {
        id: 'visualizer',
        title: 'Audio Visualizer',
        category: 'video',
        price: 59.99,
        features: [
          'Custom Audio Visualizer',
          'HD 1080p Quality',
          'Spectrum Analysis',
          '24-48 Hour Delivery',
          'Multiple Styles Available'
        ],
        duration: '24-48 hours',
        description: 'Dynamic audio visualizer that brings your music to life with stunning visual effects.'
      },
      {
        id: 'promo-video',
        title: 'Promotional Video',
        category: 'video',
        price: 149.99,
        features: [
          'Custom Promo Video',
          'HD 1080p Quality',
          'Professional Editing',
          '5-7 Day Delivery',
          '3 Revision Rounds',
          'Music Integration'
        ],
        duration: '5-7 days',
        description: 'Professional promotional video to showcase your music and build your brand presence.'
      }
    ]
  }
];

export const featuredPackages = [
  'sc-plays-1k',
  'cover-art',
  'lyric-video',
  'sc-plays-5k'
];