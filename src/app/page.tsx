import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-500 via-cyan-600 to-teal-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8 animate-fade-in-up">
              <Image
                src="/logo.png"
                alt="Whatcom Shine Co."
                width={2000}
                height={600}
                className="h-40 w-auto object-contain animate-float"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <span className="gradient-text">Professional</span> Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-teal-100 animate-fade-in-up max-w-3xl mx-auto" style={{animationDelay: '0.4s'}}>
              Serving Whatcom County with trusted, reliable residential cleaning that exceeds expectations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Link
                href="/book"
                className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 hover-lift shadow-2xl hover-glow"
              >
                <span className="flex items-center justify-center gap-2">
                  🚀 Book Online Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/contact"
                className="glass text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 hover-lift"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-teal-600 hover-lift"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-green-400 opacity-20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-400 opacity-15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-yellow-400 to-teal-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Comprehensive cleaning solutions tailored to your home's unique needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🏠", title: "Regular House Cleaning", desc: "Weekly, bi-weekly, or monthly cleaning to keep your home spotless and comfortable.", color: "from-teal-500 to-cyan-600" },
              { icon: "✨", title: "Deep Cleaning", desc: "Thorough cleaning of every corner, including baseboards, appliances, and hard-to-reach areas.", color: "from-yellow-400 to-yellow-500" },
              { icon: "📦", title: "Move-in/Move-out", desc: "Complete cleaning for your new home or preparing your old one for the next residents.", color: "from-teal-600 to-teal-700" },
              { icon: "🔨", title: "Post-Construction", desc: "Specialized cleaning after construction or renovation projects to remove dust and debris.", color: "from-cyan-500 to-cyan-600" },
              { icon: "🎉", title: "Event Cleaning", desc: "Pre and post-event cleaning to ensure your special occasions are perfect.", color: "from-yellow-500 to-yellow-600" },
              { icon: "🕒", title: "One-time Cleaning", desc: "Flexible cleaning services for when you need a helping hand around the house.", color: "from-teal-400 to-teal-500" }
            ].map((service, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover-lift border border-gray-100 animate-fade-in-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-6">
                  <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-500 rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Bellingham, WA",
                rating: 5,
                review: "Whatcom Shine Co. transformed our home! The team was professional, thorough, and left everything spotless. I've been using them for 6 months and couldn't be happier.",
                service: "Regular House Cleaning",
                image: "👩‍💼"
              },
              {
                name: "Mike Chen",
                location: "Lynden, WA", 
                rating: 5,
                review: "Outstanding service! They cleaned our entire house after our renovation and it looked brand new. The attention to detail was incredible.",
                service: "Post-Construction Cleaning",
                image: "👨‍💼"
              },
              {
                name: "Lisa Rodriguez",
                location: "Ferndale, WA",
                rating: 5,
                review: "I've tried many cleaning services, but Whatcom Shine Co. is by far the best. They're reliable, trustworthy, and do an amazing job every time.",
                service: "Deep Cleaning",
                image: "👩‍🔧"
              },
              {
                name: "David Thompson",
                location: "Blaine, WA",
                rating: 5,
                review: "The online booking system is so convenient! I can schedule, reschedule, and pay all online. The cleaning quality is consistently excellent.",
                service: "Move-in Cleaning",
                image: "👨‍💻"
              },
              {
                name: "Jennifer Lee",
                location: "Everson, WA",
                rating: 5,
                review: "They cleaned our house for a family gathering and it was perfect. Everyone commented on how spotless everything was. Highly recommend!",
                service: "Event Cleaning",
                image: "👩‍🎨"
              },
              {
                name: "Robert Wilson",
                location: "Nooksack, WA",
                rating: 5,
                review: "Professional, punctual, and thorough. They use eco-friendly products which is important to our family. Worth every penny!",
                service: "One-time Cleaning",
                image: "👨‍🔬"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift animate-fade-in-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                
                <div className="text-sm text-blue-600 font-medium">
                  {testimonial.service}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-green-50 text-green-800 px-6 py-3 rounded-full font-semibold">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="mr-2">4.9/5</span>
              <span>Average Rating from 200+ Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Why Choose <span className="gradient-text">Whatcom Shine Co.</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              We're committed to excellence in every cleaning service we provide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🛡️", title: "Insured & Bonded", desc: "Fully insured for your peace of mind", color: "from-teal-500 to-cyan-600" },
              { icon: "⭐", title: "5-Star Service", desc: "Consistently rated excellent by our customers", color: "from-yellow-400 to-yellow-500" },
              { icon: "🌿", title: "Eco-Friendly", desc: "Safe, environmentally conscious cleaning products", color: "from-teal-600 to-teal-700" },
              { icon: "⏰", title: "Flexible Scheduling", desc: "Work around your schedule, not ours", color: "from-cyan-500 to-cyan-600" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group text-center animate-fade-in-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${feature.color} text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-teal-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Booking CTA */}
      <section className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Book Your Cleaning Service <span className="gradient-text">Online</span>
          </h2>
          <p className="text-xl mb-10 text-gray-800 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Skip the phone calls - book, schedule, and pay online in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link
              href="/book"
              className="group bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-teal-700 hover-lift shadow-2xl hover-glow"
            >
              <span className="flex items-center justify-center gap-3">
                🚀 Book Online Now
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              className="border-2 border-gray-900 text-gray-900 px-8 py-5 rounded-2xl font-semibold hover:bg-gray-900 hover:text-white hover-lift"
            >
              📞 Call (360) 555-CLEAN
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-white opacity-10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-12 h-12 bg-yellow-400 opacity-20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Traditional CTA Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-cyan-700 to-teal-800 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Ready to Experience the <span className="gradient-text">Difference</span>?
          </h2>
          <p className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Contact us today for a free, no-obligation quote
          </p>
          <Link
            href="/contact"
            className="group bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 hover-lift shadow-2xl hover-glow inline-block animate-fade-in-up"
            style={{animationDelay: '0.4s'}}
          >
            <span className="flex items-center justify-center gap-3">
              Get Your Free Quote
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
