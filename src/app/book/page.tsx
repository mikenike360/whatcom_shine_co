'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Book() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    package: '',
    homeSize: '',
    frequency: '',
    date: '',
    time: '',
    address: '',
    name: '',
    email: '',
    phone: '',
    specialInstructions: ''
  });

  const packages = [
    {
      id: 'regular',
      name: 'Regular House Cleaning',
      price: 180,
      description: 'Weekly, bi-weekly, or monthly maintenance cleaning',
      features: ['Dust all surfaces and furniture', 'Vacuum and mop all floors', 'Clean and sanitize bathrooms', 'Kitchen cleaning including appliances', 'Empty trash and replace liners', 'Clean mirrors and glass surfaces'],
      duration: '2-3 hours',
      icon: '🏠'
    },
    {
      id: 'deep',
      name: 'Deep Cleaning',
      price: 320,
      description: 'Comprehensive cleaning for spotless results',
      features: ['Everything in Regular plus:', 'Clean inside all appliances', 'Wipe down baseboards and trim', 'Clean light fixtures and ceiling fans', 'Deep clean bathrooms and showers', 'Clean inside cabinets and drawers', 'Wash windows (interior)'],
      duration: '4-5 hours',
      icon: '✨'
    },
    {
      id: 'move',
      name: 'Move-in/Move-out Cleaning',
      price: 400,
      description: 'Complete cleaning for your new home or preparing for new residents',
      features: ['Deep clean all rooms', 'Clean inside all cabinets and closets', 'Clean all appliances inside and out', 'Clean all light fixtures', 'Clean all windows (interior and exterior)', 'Clean garage if applicable', 'Clean all baseboards and trim'],
      duration: '5-6 hours',
      icon: '📦'
    },
    {
      id: 'construction',
      name: 'Post-Construction Cleaning',
      price: 500,
      description: 'Specialized cleaning after construction or renovation',
      features: ['Remove construction dust and debris', 'Clean all surfaces thoroughly', 'Clean all windows and fixtures', 'Vacuum and mop all floors', 'Clean air vents and registers', 'Remove construction residue from surfaces'],
      duration: '6-8 hours',
      icon: '🔨'
    },
    {
      id: 'event',
      name: 'Event Cleaning',
      price: 200,
      description: 'Pre and post-event cleaning for special occasions',
      features: ['Pre-event: Deep clean common areas', 'Post-event: Complete cleanup', 'Kitchen and bathroom sanitization', 'Trash removal and disposal', 'Floor cleaning and maintenance', 'Quick turnaround available'],
      duration: '3-4 hours',
      icon: '🎉'
    },
    {
      id: 'one-time',
      name: 'One-time Cleaning',
      price: 150,
      description: 'Flexible cleaning service for when you need a helping hand',
      features: ['Customizable cleaning checklist', 'Focus on specific areas if needed', 'Same-day service available', 'Flexible scheduling', 'All standard cleaning tasks included'],
      duration: '2-4 hours',
      icon: '🕒'
    }
  ];

  const homeSizes = [
    { id: 'studio', name: 'Studio/1 Bedroom', multiplier: 1.0 },
    { id: 'small', name: '2-3 Bedrooms', multiplier: 1.2 },
    { id: 'medium', name: '4-5 Bedrooms', multiplier: 1.5 },
    { id: 'large', name: '6+ Bedrooms', multiplier: 2.0 }
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const calculatePrice = () => {
    const selectedPackage = packages.find(p => p.id === bookingData.package);
    const selectedSize = homeSizes.find(s => s.id === bookingData.homeSize);
    
    if (!selectedPackage || !selectedSize) return 0;
    
    return Math.round(selectedPackage.price * selectedSize.multiplier);
  };

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with payment processing
    alert('Booking submitted! (Payment integration would be added here)');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your Cleaning Service
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Easy online booking with instant confirmation
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-white py-4 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= step 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Package</span>
            <span>Details</span>
            <span>Schedule</span>
            <span>Payment</span>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            
            {/* Step 1: Package Selection */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Cleaning Package</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                        bookingData.package === pkg.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleInputChange('package', pkg.id)}
                    >
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-3">{pkg.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{pkg.name}</h3>
                          <p className="text-xl font-bold text-blue-600">${pkg.price}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm">{pkg.description}</p>
                      <ul className="space-y-1 text-xs text-gray-600 mb-4">
                        {pkg.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2 text-xs">✓</span>
                            <span className="text-xs">{feature}</span>
                          </li>
                        ))}
                        {pkg.features.length > 4 && (
                          <li className="text-xs text-gray-500">
                            +{pkg.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                      <p className="text-xs text-gray-500">Duration: {pkg.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Home Details */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tell Us About Your Home</h2>
                
                {/* Package Summary with Upcharge Info */}
                {bookingData.package && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Selected Package: {packages.find(p => p.id === bookingData.package)?.name}
                      </h3>
                      <span className="text-2xl font-bold text-blue-600">
                        ${packages.find(p => p.id === bookingData.package)?.price}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p className="mb-2">Base price for studio/1 bedroom homes</p>
                      <p className="font-medium text-gray-800">
                        💡 <strong>Size upcharges:</strong> 2-3 bedrooms (+20%), 4-5 bedrooms (+50%), 6+ bedrooms (+100%)
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Home Size
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {homeSizes.map((size) => {
                        const selectedPackage = packages.find(p => p.id === bookingData.package);
                        const calculatedPrice = selectedPackage ? Math.round(selectedPackage.price * size.multiplier) : 0;
                        const upcharge = selectedPackage ? Math.round(selectedPackage.price * (size.multiplier - 1)) : 0;
                        
                        return (
                          <div
                            key={size.id}
                            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                              bookingData.homeSize === size.id
                                ? 'border-blue-600 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => handleInputChange('homeSize', size.id)}
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium text-gray-900">{size.name}</div>
                                {upcharge > 0 && (
                                  <div className="text-sm text-gray-600">
                                    +${upcharge} upcharge
                                  </div>
                                )}
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-blue-600">${calculatedPrice}</div>
                                {upcharge > 0 && (
                                  <div className="text-xs text-gray-500">
                                    (${selectedPackage?.price} + ${upcharge})
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Frequency
                    </label>
                    <select
                      value={bookingData.frequency}
                      onChange={(e) => handleInputChange('frequency', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select frequency</option>
                      {bookingData.package === 'regular' && (
                        <>
                          <option value="weekly">Weekly</option>
                          <option value="bi-weekly">Bi-weekly</option>
                          <option value="monthly">Monthly</option>
                        </>
                      )}
                      {bookingData.package === 'deep' && (
                        <>
                          <option value="one-time">One-time</option>
                          <option value="quarterly">Quarterly (every 3 months)</option>
                          <option value="semi-annually">Semi-annually (every 6 months)</option>
                        </>
                      )}
                      {(bookingData.package === 'move' || bookingData.package === 'construction' || bookingData.package === 'event') && (
                        <option value="one-time">One-time service</option>
                      )}
                      {bookingData.package === 'one-time' && (
                        <>
                          <option value="one-time">One-time</option>
                          <option value="as-needed">As needed</option>
                        </>
                      )}
                    </select>
                    {bookingData.package && (
                      <p className="text-xs text-gray-500 mt-1">
                        {bookingData.package === 'regular' && 'Regular cleaning is perfect for ongoing maintenance'}
                        {bookingData.package === 'deep' && 'Deep cleaning is recommended quarterly or before special events'}
                        {(bookingData.package === 'move' || bookingData.package === 'construction') && 'These are typically one-time services'}
                        {bookingData.package === 'event' && 'Event cleaning can be scheduled for before and after your event'}
                        {bookingData.package === 'one-time' && 'Perfect for when you need a helping hand around the house'}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Address
                    </label>
                    <input
                      type="text"
                      value={bookingData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Enter your full address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                {/* Price Summary */}
                {bookingData.package && bookingData.homeSize && (
                  <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Estimated Total</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Package:</span>
                        <span>{packages.find(p => p.id === bookingData.package)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Home Size:</span>
                        <span>{homeSizes.find(s => s.id === bookingData.homeSize)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Base Price:</span>
                        <span>${packages.find(p => p.id === bookingData.package)?.price}</span>
                      </div>
                      {(() => {
                        const selectedPackage = packages.find(p => p.id === bookingData.package);
                        const selectedSize = homeSizes.find(s => s.id === bookingData.homeSize);
                        const upcharge = selectedPackage && selectedSize ? Math.round(selectedPackage.price * (selectedSize.multiplier - 1)) : 0;
                        return upcharge > 0 ? (
                          <div className="flex justify-between text-green-700">
                            <span>Size Upcharge:</span>
                            <span>+${upcharge}</span>
                          </div>
                        ) : null;
                      })()}
                      <div className="border-t pt-2 mt-4">
                        <div className="flex justify-between text-xl font-bold text-green-700">
                          <span>Total:</span>
                          <span>${calculatePrice()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Scheduling */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Cleaning</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      value={bookingData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact & Payment */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information & Payment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={bookingData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={bookingData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Instructions
                    </label>
                    <textarea
                      value={bookingData.specialInstructions}
                      onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Any special requests or notes for our team..."
                    />
                  </div>
                </div>

                {/* Price Summary */}
                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Package:</span>
                      <span>{packages.find(p => p.id === bookingData.package)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Home Size:</span>
                      <span>{homeSizes.find(s => s.id === bookingData.homeSize)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frequency:</span>
                      <span className="capitalize">{bookingData.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date & Time:</span>
                      <span>{bookingData.date} at {bookingData.time}</span>
                    </div>
                    <div className="border-t pt-2 mt-4">
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total:</span>
                        <span className="text-blue-600">${calculatePrice()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!bookingData.package || (currentStep === 2 && !bookingData.homeSize) || (currentStep === 3 && (!bookingData.date || !bookingData.time))}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!bookingData.name || !bookingData.email}
                  className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Book & Pay ${calculatePrice()}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Book Online?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Professional cleaning services with premium quality and guaranteed satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Instant Confirmation</h3>
              <p className="text-gray-600">Get immediate booking confirmation and calendar integration</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Safe, encrypted payment processing with multiple options</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Professional-grade equipment and eco-friendly products</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">100% Guarantee</h3>
              <p className="text-gray-600">Satisfaction guaranteed or we'll make it right</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Easy Management</h3>
              <p className="text-gray-600">Reschedule, modify, or cancel bookings anytime online</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Award-Winning</h3>
              <p className="text-gray-600">Top-rated cleaning service in Whatcom County</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Safe for your family and the environment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
