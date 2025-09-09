import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Whatcom Shine Co."
                width={1250}
                height={375}
                className="h-40 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Professional residential cleaning services throughout Whatcom County. 
              We're committed to providing exceptional cleaning solutions for your home.
            </p>
            <div className="text-gray-300">
              <p>📞 (360) 555-CLEAN</p>
              <p>✉️ info@whatcomshine.com</p>
              <p>📍 Serving all of Whatcom County</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-green-400 hover:text-green-300 transition-colors font-semibold">
                  Book Online
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Regular House Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Move-in/Move-out</li>
              <li>Post-Construction</li>
              <li>One-time Cleaning</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Whatcom Shine Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
