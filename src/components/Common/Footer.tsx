import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* SlateX Column */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">SlateX</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Serve up seamless service with SlateX POS—your all‑in‑one companion for menus, orders, and payments, complete with offline sync, cloud backups, and 24/7 support. Ready to wow your guests and grow your business? Let’s get started today
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mb-8">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
            
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2025 Slatex, Inc. All rights reserved.
            </p>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Restaurants POS System
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Kitchen Display
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Payment Processing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Reporting App
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Web Ordering
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Branded Mobile App
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Loyalty & Promotion
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Gift Card
                </a>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6">Industries</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Quick-Service Restaurants (QSR)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Casual Dining
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Full Services Restaurant
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Fast Casual Restaurant
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Food Trucks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Pizzeria
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Café & Bakery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Bars & Pubs
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Hardware
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Licenses
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;