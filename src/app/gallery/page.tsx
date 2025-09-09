'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work', count: 24 },
    { id: 'regular', name: 'Regular Cleaning', count: 8 },
    { id: 'deep', name: 'Deep Cleaning', count: 6 },
    { id: 'move', name: 'Move-in/Move-out', count: 4 },
    { id: 'construction', name: 'Post-Construction', count: 3 },
    { id: 'event', name: 'Event Cleaning', count: 3 }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'regular',
      title: 'Kitchen Deep Clean',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Complete kitchen transformation including appliances, cabinets, and floors'
    },
    {
      id: 2,
      category: 'deep',
      title: 'Living Room Makeover',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Thorough deep cleaning of living room including furniture and baseboards'
    },
    {
      id: 3,
      category: 'move',
      title: 'Move-out Cleaning',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Complete move-out cleaning to prepare home for new residents'
    },
    {
      id: 4,
      category: 'construction',
      title: 'Post-Renovation Clean',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Specialized cleaning after major renovation project'
    },
    {
      id: 5,
      category: 'regular',
      title: 'Bathroom Refresh',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Weekly bathroom maintenance keeping it spotless'
    },
    {
      id: 6,
      category: 'event',
      title: 'Pre-Event Preparation',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Home preparation for special family gathering'
    },
    {
      id: 7,
      category: 'deep',
      title: 'Master Bedroom Deep Clean',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Comprehensive bedroom cleaning including closet organization'
    },
    {
      id: 8,
      category: 'regular',
      title: 'Office Space Cleaning',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Regular office maintenance for home workspace'
    },
    {
      id: 9,
      category: 'move',
      title: 'New Home Move-in',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Complete move-in cleaning for new homeowners'
    },
    {
      id: 10,
      category: 'construction',
      title: 'Kitchen Renovation Clean',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Post-construction cleaning after kitchen remodel'
    },
    {
      id: 11,
      category: 'event',
      title: 'Holiday Party Prep',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Pre-holiday party deep cleaning and preparation'
    },
    {
      id: 12,
      category: 'deep',
      title: 'Basement Transformation',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Complete basement cleaning and organization'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Our <span className="gradient-text">Work Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              See the amazing transformations we create for our customers
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover-lift animate-fade-in-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="relative">
                  {/* Before/After Images */}
                  <div className="grid grid-cols-2 gap-1">
                    <div className="relative h-48 bg-gray-200">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          BEFORE
                        </span>
                      </div>
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="relative h-48 bg-gray-200">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          AFTER
                        </span>
                      </div>
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                      View Full Size
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-medium capitalize">
                      {item.category.replace('-', ' ')} Cleaning
                    </span>
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to See Your Home <span className="gradient-text">Transform</span>?
          </h2>
          <p className="text-xl mb-10 text-green-100 max-w-3xl mx-auto">
            Book your cleaning service today and experience the Whatcom Shine Co. difference
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/book"
              className="group bg-white text-green-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 hover-lift shadow-2xl hover-glow"
            >
              <span className="flex items-center justify-center gap-3">
                🚀 Book Your Cleaning
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-5 rounded-2xl font-semibold hover:bg-white hover:text-green-600 hover-lift"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
