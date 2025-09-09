import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Regular House Cleaning",
      icon: "🏠",
      description: "Keep your home consistently clean with our regular cleaning service",
      features: [
        "Dust all surfaces and furniture",
        "Vacuum and mop all floors",
        "Clean and sanitize bathrooms",
        "Kitchen cleaning including appliances",
        "Empty trash and replace liners",
        "Clean mirrors and glass surfaces"
      ],
      frequency: "Weekly, Bi-weekly, or Monthly",
      price: "Starting at $120"
    },
    {
      title: "Deep Cleaning",
      icon: "✨",
      description: "Comprehensive cleaning for a spotless home",
      features: [
        "Everything in regular cleaning plus:",
        "Clean inside all appliances",
        "Wipe down baseboards and trim",
        "Clean light fixtures and ceiling fans",
        "Deep clean bathrooms and showers",
        "Clean inside cabinets and drawers",
        "Wash windows (interior)"
      ],
      frequency: "One-time or as needed",
      price: "Starting at $200"
    },
    {
      title: "Move-in/Move-out Cleaning",
      icon: "📦",
      description: "Complete cleaning for your new home or preparing for new residents",
      features: [
        "Deep clean all rooms",
        "Clean inside all cabinets and closets",
        "Clean all appliances inside and out",
        "Clean all light fixtures",
        "Clean all windows (interior and exterior)",
        "Clean garage if applicable",
        "Clean all baseboards and trim"
      ],
      frequency: "One-time service",
      price: "Starting at $250"
    },
    {
      title: "Post-Construction Cleaning",
      icon: "🔨",
      description: "Specialized cleaning after construction or renovation",
      features: [
        "Remove construction dust and debris",
        "Clean all surfaces thoroughly",
        "Clean all windows and fixtures",
        "Vacuum and mop all floors",
        "Clean air vents and registers",
        "Remove construction residue from surfaces"
      ],
      frequency: "One-time service",
      price: "Starting at $300"
    },
    {
      title: "Event Cleaning",
      icon: "🎉",
      description: "Pre and post-event cleaning for special occasions",
      features: [
        "Pre-event: Deep clean common areas",
        "Post-event: Complete cleanup",
        "Kitchen and bathroom sanitization",
        "Trash removal and disposal",
        "Floor cleaning and maintenance",
        "Quick turnaround available"
      ],
      frequency: "As needed",
      price: "Starting at $200"
    },
    {
      title: "One-time Cleaning",
      icon: "🕒",
      description: "Flexible cleaning service for when you need a helping hand",
      features: [
        "Customizable cleaning checklist",
        "Focus on specific areas if needed",
        "Same-day service available",
        "Flexible scheduling",
        "All standard cleaning tasks included"
      ],
      frequency: "As needed",
      price: "Starting at $150"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Professional residential cleaning tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-600">Frequency: {service.frequency}</p>
                    <p className="text-lg font-semibold text-blue-600">{service.price}</p>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="/book"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
                    >
                      Book Now
                    </Link>
                    <Link
                      href="/contact"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What Makes Us Different
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">🛡️</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fully Insured & Bonded</h3>
                    <p className="text-gray-600">Complete protection for your peace of mind</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">🌿</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Eco-Friendly Products</h3>
                    <p className="text-gray-600">Safe for your family and the environment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">⭐</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">100% Satisfaction Guarantee</h3>
                    <p className="text-gray-600">We'll make it right or we'll refund your money</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">🔑</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Trusted & Reliable</h3>
                    <p className="text-gray-600">Background-checked, professional cleaners</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Service Areas
              </h2>
              <p className="text-gray-600 mb-6">
                We proudly serve all of Whatcom County, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <div>• Bellingham</div>
                <div>• Ferndale</div>
                <div>• Lynden</div>
                <div>• Blaine</div>
                <div>• Everson</div>
                <div>• Nooksack</div>
                <div>• Sumas</div>
                <div>• Deming</div>
                <div>• Acme</div>
                <div>• Maple Falls</div>
                <div>• Glacier</div>
                <div>• And more!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Cleaning Service?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free, no-obligation quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors shadow-lg"
            >
              🚀 Book Online Now
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              href="tel:+1360555CLEAN"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call (360) 555-CLEAN
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
