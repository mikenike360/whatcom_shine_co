'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Whatcom Shine Co."
                width={1000}
                height={300}
                className="h-40 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-teal-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-teal-600 transition-colors">
              Services
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-teal-600 transition-colors">
              Gallery
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-teal-600 transition-colors">
              Blog
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-teal-600 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/book"
              className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none focus:text-teal-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/book"
                className="block px-3 py-2 bg-yellow-500 text-gray-900 rounded-lg mx-3 text-center hover:bg-yellow-600 transition-colors mb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 bg-teal-600 text-white rounded-lg mx-3 text-center hover:bg-teal-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
