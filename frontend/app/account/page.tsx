'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User, Package, Heart, MapPin, CreditCard, Settings, LogOut, ChevronRight } from 'lucide-react';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('orders');

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe&size=200&background=3B82F6&color=fff',
  };

  // Mock orders data
  const orders = [
    {
      id: 'ORD-12345',
      date: '2025-01-15',
      status: 'Delivered',
      total: 679.97,
      items: 3,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop',
    },
    {
      id: 'ORD-12344',
      date: '2025-01-10',
      status: 'In Transit',
      total: 299.99,
      items: 1,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop',
    },
    {
      id: 'ORD-12343',
      date: '2025-01-05',
      status: 'Processing',
      total: 149.98,
      items: 2,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop',
    },
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'Mechanical Keyboard RGB',
      price: 119.99,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&h=200&fit=crop',
      inStock: true,
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=200&h=200&fit=crop',
      inStock: true,
    },
  ];

  const addresses = [
    {
      id: 1,
      type: 'Home',
      name: 'John Doe',
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      isDefault: true,
    },
    {
      id: 2,
      type: 'Work',
      name: 'John Doe',
      address: '456 Business Ave',
      city: 'New York',
      state: 'NY',
      zip: '10002',
      isDefault: false,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-600 bg-green-100';
      case 'In Transit':
        return 'text-purple-600 bg-purple-100';
      case 'Processing':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* User Info */}
              <div className="text-center mb-6 pb-6 border-b">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    fill
                    className="rounded-full"
                  />
                </div>
                <h2 className="font-bold text-lg">{user.name}</h2>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'orders' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <Package size={20} />
                  <span>My Orders</span>
                </button>
                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'wishlist' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <Heart size={20} />
                  <span>Wishlist</span>
                </button>
                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'addresses' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <MapPin size={20} />
                  <span>Addresses</span>
                </button>
                <button
                  onClick={() => setActiveTab('payment')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'payment' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <CreditCard size={20} />
                  <span>Payment Methods</span>
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'profile' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <Settings size={20} />
                  <span>Account Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition">
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">My Orders</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition">
                      <div className="flex items-center gap-4">
                        <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={order.image}
                            alt="Order"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-semibold">Order {order.id}</p>
                              <p className="text-sm text-gray-600">{order.date}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-gray-600">{order.items} items</p>
                              <p className="font-bold text-purple-600">${order.total.toFixed(2)}</p>
                            </div>
                            <Link
                              href={`/account/orders/${order.id}`}
                              className="text-purple-600 hover:text-purple-700 flex items-center gap-1"
                            >
                              View Details
                              <ChevronRight size={16} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition">
                      <div className="flex gap-4">
                        <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{item.name}</h3>
                          <p className="text-purple-600 font-bold mb-3">${item.price.toFixed(2)}</p>
                          <div className="flex gap-2">
                            <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-purple-700">
                              Add to Cart
                            </button>
                            <button className="text-red-500 hover:text-red-700">
                              <Heart size={20} fill="currentColor" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Saved Addresses</h2>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                    Add New Address
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addresses.map((address) => (
                    <div key={address.id} className="border rounded-lg p-4 relative">
                      {address.isDefault && (
                        <span className="absolute top-2 right-2 bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded">
                          Default
                        </span>
                      )}
                      <div className="mb-3">
                        <p className="font-semibold text-lg">{address.type}</p>
                        <p className="text-gray-700">{address.name}</p>
                      </div>
                      <div className="text-sm text-gray-600 mb-4">
                        <p>{address.address}</p>
                        <p>{address.city}, {address.state} {address.zip}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-purple-600 hover:text-purple-700 text-sm">Edit</button>
                        <span className="text-gray-300">|</span>
                        <button className="text-red-600 hover:text-red-700 text-sm">Delete</button>
                        {!address.isDefault && (
                          <>
                            <span className="text-gray-300">|</span>
                            <button className="text-gray-600 hover:text-gray-700 text-sm">Set as Default</button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Payment Methods Tab */}
            {activeTab === 'payment' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Payment Methods</h2>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                    Add New Card
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CreditCard size={32} className="text-purple-600" />
                      <div>
                        <p className="font-semibold">•••• •••• •••• 4242</p>
                        <p className="text-sm text-gray-600">Expires 12/25</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-purple-600 hover:text-purple-700 text-sm">Edit</button>
                      <span className="text-gray-300">|</span>
                      <button className="text-red-600 hover:text-red-700 text-sm">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Profile Settings Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      defaultValue={user.phone}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-xl font-bold mb-4">Change Password</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Current Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700"
                    >
                      Update Password
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

