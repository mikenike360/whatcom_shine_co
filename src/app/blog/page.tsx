'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'tips', name: 'Cleaning Tips', count: 5 },
    { id: 'eco-friendly', name: 'Eco-Friendly', count: 3 },
    { id: 'seasonal', name: 'Seasonal', count: 2 },
    { id: 'organization', name: 'Organization', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Spring Cleaning Tips for a Fresh Home",
      excerpt: "Spring is the perfect time to deep clean your home and start fresh. Here are our top 10 tips to make your spring cleaning efficient and effective.",
      category: 'tips',
      date: '2024-03-15',
      readTime: '5 min read',
      image: '🌸',
      featured: true
    },
    {
      id: 2,
      title: "Eco-Friendly Cleaning Products That Actually Work",
      excerpt: "Discover the best natural and eco-friendly cleaning products that are safe for your family and the environment while being highly effective.",
      category: 'eco-friendly',
      date: '2024-03-10',
      readTime: '7 min read',
      image: '🌿',
      featured: true
    },
    {
      id: 3,
      title: "How to Organize Your Kitchen for Maximum Efficiency",
      excerpt: "Transform your kitchen into an organized, efficient space with these proven organization tips and storage solutions.",
      category: 'organization',
      date: '2024-03-05',
      readTime: '6 min read',
      image: '🏠',
      featured: false
    },
    {
      id: 4,
      title: "Winter Cleaning: Preparing Your Home for Cold Weather",
      excerpt: "Get your home ready for winter with these essential cleaning and maintenance tasks to keep your space cozy and clean.",
      category: 'seasonal',
      date: '2024-02-28',
      readTime: '4 min read',
      image: '❄️',
      featured: false
    },
    {
      id: 5,
      title: "The Ultimate Bathroom Cleaning Checklist",
      excerpt: "Follow this comprehensive bathroom cleaning checklist to ensure every surface is spotless and sanitized.",
      category: 'tips',
      date: '2024-02-20',
      readTime: '8 min read',
      image: '🚿',
      featured: false
    },
    {
      id: 6,
      title: "Natural Ways to Remove Stubborn Stains",
      excerpt: "Learn how to tackle tough stains using natural ingredients you probably already have in your kitchen.",
      category: 'eco-friendly',
      date: '2024-02-15',
      readTime: '6 min read',
      image: '🧽',
      featured: false
    },
    {
      id: 7,
      title: "Creating a Cleaning Schedule That Actually Works",
      excerpt: "Stop feeling overwhelmed by housework. Create a realistic cleaning schedule that fits your lifestyle and keeps your home consistently clean.",
      category: 'tips',
      date: '2024-02-10',
      readTime: '5 min read',
      image: '📅',
      featured: false
    },
    {
      id: 8,
      title: "Holiday Cleaning: Preparing for Guests",
      excerpt: "Get your home guest-ready for the holidays with these quick and effective cleaning tips for entertaining.",
      category: 'seasonal',
      date: '2024-02-05',
      readTime: '4 min read',
      image: '🎄',
      featured: false
    },
    {
      id: 9,
      title: "Closet Organization: Maximizing Your Storage Space",
      excerpt: "Transform your cluttered closet into an organized, functional space with these smart storage solutions and organization tips.",
      category: 'organization',
      date: '2024-01-30',
      readTime: '7 min read',
      image: '👗',
      featured: false
    },
    {
      id: 10,
      title: "DIY All-Purpose Cleaner Recipes",
      excerpt: "Make your own effective, eco-friendly cleaning solutions at home with these simple DIY recipes.",
      category: 'eco-friendly',
      date: '2024-01-25',
      readTime: '6 min read',
      image: '🧴',
      featured: false
    },
    {
      id: 11,
      title: "Deep Cleaning Your Appliances: A Complete Guide",
      excerpt: "Learn how to properly clean and maintain all your major appliances to keep them running efficiently and looking like new.",
      category: 'tips',
      date: '2024-01-20',
      readTime: '9 min read',
      image: '🔧',
      featured: false
    },
    {
      id: 12,
      title: "The Psychology of a Clean Home: Why It Matters",
      excerpt: "Discover the mental health benefits of maintaining a clean, organized home and how it can improve your overall well-being.",
      category: 'tips',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '🧠',
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Cleaning <span className="gradient-text">Tips & Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Expert advice to keep your home spotless and organized
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Articles
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift animate-fade-in-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{post.image}</span>
                    <div>
                      <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
                        {post.category.replace('-', ' ')}
                      </span>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift animate-fade-in-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{post.image}</span>
                    <div>
                      <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
                        {post.category.replace('-', ' ')}
                      </span>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Cleaning Tips
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Get weekly cleaning tips, seasonal guides, and exclusive offers delivered to your inbox
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-green-100 mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
