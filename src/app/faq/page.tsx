'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "General Questions",
      items: [
        {
          question: "What areas do you serve?",
          answer: "We proudly serve all of Whatcom County, including Bellingham, Lynden, Ferndale, Blaine, Everson, Nooksack, Sumas, Deming, Acme, Maple Falls, Glacier, and surrounding areas."
        },
        {
          question: "Are you insured and bonded?",
          answer: "Yes, we are fully insured and bonded for your peace of mind. All our team members are background-checked and trained professionals."
        },
        {
          question: "What cleaning products do you use?",
          answer: "We use eco-friendly, non-toxic cleaning products that are safe for your family and pets. All products are environmentally conscious and effective."
        },
        {
          question: "Do I need to be home during the cleaning?",
          answer: "No, you don't need to be home. We can work around your schedule and have secure access procedures. Many of our customers provide us with keys or garage codes."
        }
      ]
    },
    {
      title: "Booking & Scheduling",
      items: [
        {
          question: "How do I book a cleaning service?",
          answer: "You can book online through our website, call us at (360) 555-CLEAN, or use our contact form. Online booking is available 24/7 and provides instant confirmation."
        },
        {
          question: "Can I reschedule or cancel my appointment?",
          answer: "Yes, you can reschedule or cancel up to 24 hours before your appointment through your online account or by calling us. Same-day cancellations may incur a fee."
        },
        {
          question: "Do you offer recurring cleaning services?",
          answer: "Absolutely! We offer weekly, bi-weekly, and monthly recurring services. You can set up automatic billing and scheduling for your convenience."
        },
        {
          question: "What if I need to add or skip a cleaning?",
          answer: "You can easily add extra cleanings or skip scheduled ones through your online account or by calling us. We're flexible with your changing needs."
        }
      ]
    },
    {
      title: "Services & Pricing",
      items: [
        {
          question: "What's included in your regular cleaning?",
          answer: "Regular cleaning includes dusting all surfaces, vacuuming and mopping floors, cleaning bathrooms, kitchen cleaning including appliances, emptying trash, and cleaning mirrors and glass surfaces."
        },
        {
          question: "How do you calculate pricing?",
          answer: "Pricing is based on home size, cleaning frequency, and specific services needed. We offer transparent pricing with no hidden fees. You can get an instant quote online."
        },
        {
          question: "Do you provide your own cleaning supplies?",
          answer: "Yes, we bring all necessary cleaning supplies and equipment. You don't need to provide anything unless you have specific product preferences."
        },
        {
          question: "What if I'm not satisfied with the cleaning?",
          answer: "We offer a 100% satisfaction guarantee. If you're not completely satisfied, we'll return within 24 hours to re-clean the areas of concern at no additional charge."
        }
      ]
    },
    {
      title: "Special Services",
      items: [
        {
          question: "Do you offer move-in/move-out cleaning?",
          answer: "Yes, we specialize in move-in and move-out cleaning. This includes deep cleaning of all rooms, appliances, cabinets, windows, and preparing the home for new residents."
        },
        {
          question: "Can you clean after construction or renovation?",
          answer: "Absolutely! We offer specialized post-construction cleaning to remove dust, debris, and construction residue. We have the proper equipment and techniques for these jobs."
        },
        {
          question: "Do you offer event cleaning services?",
          answer: "Yes, we provide pre and post-event cleaning services. We can prepare your home before your event and clean up afterward, ensuring everything is perfect for your special occasion."
        },
        {
          question: "Can you clean specific areas or rooms only?",
          answer: "Yes, we offer flexible cleaning services. You can request specific rooms or areas to be cleaned, and we'll customize our service to meet your needs."
        }
      ]
    },
    {
      title: "Payment & Policies",
      items: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, debit cards, bank transfers, and cash. You can pay online through our secure payment system or in person."
        },
        {
          question: "When is payment due?",
          answer: "Payment is due upon completion of service. For recurring services, we can set up automatic billing. We also accept advance payments for your convenience."
        },
        {
          question: "Do you offer any discounts?",
          answer: "Yes, we offer discounts for new customers, referrals, and long-term contracts. We also have special pricing for seniors and military families."
        },
        {
          question: "What's your cancellation policy?",
          answer: "We require 24 hours notice for cancellations. Same-day cancellations may incur a 50% fee. No-shows will be charged the full service amount."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Everything you need to know about our cleaning services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h2>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 10 + itemIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div 
                      key={itemIndex}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {item.question}
                        </h3>
                        <svg 
                          className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isOpen && (
                        <div className="px-8 pb-6 animate-fade-in-up">
                          <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            We're here to help! Contact us directly for personalized answers to your questions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">(360) 555-CLEAN</p>
              <p className="text-sm text-gray-500">Mon-Fri: 8AM-6PM<br/>Sat: 9AM-4PM</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">info@whatcomshine.com</p>
              <p className="text-sm text-gray-500">We respond within 2 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Available 24/7</p>
              <p className="text-sm text-gray-500">Get instant answers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
