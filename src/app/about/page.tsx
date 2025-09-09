import Link from "next/link";

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 10 years in the cleaning industry, Sarah founded Whatcom Cleaning Co. to provide reliable, professional cleaning services to her community.",
      image: "👩‍💼"
    },
    {
      name: "Mike Chen",
      role: "Operations Manager",
      bio: "Mike ensures every cleaning job meets our high standards. He oversees our team and maintains our quality control processes.",
      image: "👨‍💼"
    },
    {
      name: "Lisa Rodriguez",
      role: "Lead Cleaner",
      bio: "Lisa brings 8 years of experience and attention to detail that our customers love. She trains new team members and handles our most demanding jobs.",
      image: "👩‍🔧"
    },
    {
      name: "David Thompson",
      role: "Customer Relations",
      bio: "David is your first point of contact and ensures every customer has a positive experience from initial quote to service completion.",
      image: "👨‍💻"
    }
  ];

  const values = [
    {
      title: "Reliability",
      description: "We show up on time, every time, with consistent quality service you can count on.",
      icon: "⏰"
    },
    {
      title: "Trust",
      description: "Our team is background-checked, insured, and bonded. Your home and belongings are safe with us.",
      icon: "🛡️"
    },
    {
      title: "Excellence",
      description: "We don't just clean - we exceed expectations with attention to detail and professional standards.",
      icon: "⭐"
    },
    {
      title: "Eco-Friendly",
      description: "We use environmentally safe products that protect your family and the planet.",
      icon: "🌿"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Whatcom Shine Co.
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Your trusted local cleaning professionals
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2018, Whatcom Shine Co. began with a simple mission: to provide 
                  reliable, professional cleaning services that families in Whatcom County could 
                  trust. What started as a small team of dedicated cleaners has grown into 
                  the area's most trusted residential cleaning service.
                </p>
                <p>
                  We understand that inviting someone into your home requires trust. That's why 
                  we've built our business on the foundation of reliability, professionalism, 
                  and exceptional service. Every member of our team is background-checked, 
                  fully insured, and committed to treating your home with the same care we'd 
                  want for our own.
                </p>
                <p>
                  Today, we're proud to serve hundreds of families throughout Whatcom County, 
                  from Bellingham to the Canadian border. Our commitment to quality and 
                  customer satisfaction has earned us a reputation as the cleaning company 
                  you can count on.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Serving Whatcom County</h3>
              <p className="text-gray-600">
                Since 2018, we've been proud to call Whatcom County home and serve our 
                community with professional cleaning services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The professionals who make it all possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Whatcom Shine Co.?
            </h2>
            <p className="text-xl text-blue-100">
              We're more than just a cleaning service - we're your cleaning partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Award-Winning Service</h3>
              <p className="text-blue-100">
                Recognized as the top-rated cleaning service in Whatcom County for three consecutive years.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">💯</div>
              <h3 className="text-xl font-semibold mb-3">100% Satisfaction</h3>
              <p className="text-blue-100">
                We guarantee your satisfaction or we'll make it right - no questions asked.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Local & Trusted</h3>
              <p className="text-blue-100">
                We're your neighbors, committed to serving our community with integrity and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of satisfied customers who trust us with their homes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/services"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
