'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // TODO: Connect to cart state

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          🎉 Free Shipping on Orders Over $50! Limited Time Offer
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-purple-600">
            ShopHub
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center gap-6">
            {/* User Account */}
            <Link href="/auth/login" className="hidden md:flex items-center gap-2 hover:text-purple-600">
              <User size={24} />
              <span className="text-sm">Account</span>
            </Link>

            {/* Shopping Cart */}
            <Link href="/cart" className="relative hover:text-purple-600">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden hover:text-purple-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8 mt-4 pt-4 border-t">
          <Link href="/products" className="hover:text-purple-600 font-medium">
            All Products
          </Link>
          <Link href="/products?category=electronics" className="hover:text-purple-600">
            Electronics
          </Link>
          <Link href="/products?category=fashion" className="hover:text-purple-600">
            Fashion
          </Link>
          <Link href="/products?category=home" className="hover:text-purple-600">
            Home & Living
          </Link>
          <Link href="/products?category=sports" className="hover:text-purple-600">
            Sports
          </Link>
          <Link href="/products?category=beauty" className="hover:text-purple-600">
            Beauty
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/auth/login" className="flex items-center gap-2 py-2 hover:text-purple-600">
              <User size={20} />
              <span>My Account</span>
            </Link>
            <Link href="/products" className="py-2 hover:text-purple-600 font-medium">
              All Products
            </Link>
            <Link href="/products?category=electronics" className="py-2 hover:text-purple-600">
              Electronics
            </Link>
            <Link href="/products?category=fashion" className="py-2 hover:text-purple-600">
              Fashion
            </Link>
            <Link href="/products?category=home" className="py-2 hover:text-purple-600">
              Home & Living
            </Link>
            <Link href="/products?category=sports" className="py-2 hover:text-purple-600">
              Sports
            </Link>
            <Link href="/products?category=beauty" className="py-2 hover:text-purple-600">
              Beauty
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

