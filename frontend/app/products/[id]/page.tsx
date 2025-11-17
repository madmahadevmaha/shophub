'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart, Star, Truck, Shield, ArrowLeft, Plus, Minus } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - will be replaced with API call
  const product = {
    id: params.id,
    name: 'Wireless Bluetooth Headphones Premium',
    price: 79.99,
    originalPrice: 129.99,
    rating: 5,
    reviews: 234,
    inStock: true,
    description: 'Experience premium sound quality with our wireless Bluetooth headphones. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design. Perfect for music lovers, travelers, and professionals.',
    features: [
      'Active Noise Cancellation (ANC)',
      '30-hour battery life',
      'Bluetooth 5.0 connectivity',
      'Premium leather ear cushions',
      'Foldable design with carrying case',
      'Built-in microphone for calls',
    ],
    specifications: {
      'Brand': 'AudioPro',
      'Model': 'AP-WH1000',
      'Color': 'Black',
      'Weight': '250g',
      'Bluetooth Version': '5.0',
      'Battery Life': '30 hours',
      'Charging Time': '2 hours',
      'Warranty': '1 year',
    },
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=800&fit=crop',
    ],
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'Smart Watch Series 5',
      price: 299.99,
      originalPrice: 399.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      rating: 4,
      reviews: 189,
      inStock: true,
    },
    {
      id: 4,
      name: 'Portable Bluetooth Speaker',
      price: 49.99,
      originalPrice: 79.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
      rating: 4,
      reviews: 312,
      inStock: true,
    },
    {
      id: 6,
      name: 'Wireless Mouse',
      price: 29.99,
      originalPrice: 49.99,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
      rating: 5,
      reviews: 421,
      inStock: true,
    },
    {
      id: 8,
      name: 'Mechanical Keyboard RGB',
      price: 119.99,
      originalPrice: 159.99,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
      rating: 5,
      reviews: 289,
      inStock: true,
    },
  ];

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/products" className="text-purple-600 hover:text-purple-700 flex items-center gap-2">
            <ArrowLeft size={20} />
            Back to Products
          </Link>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="relative aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-purple-600' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl font-bold text-purple-600">${product.price.toFixed(2)}</span>
                  <span className="text-2xl text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Save {discount}%
                  </span>
                </div>
                <p className="text-green-600 font-medium">In Stock - Ships within 24 hours</p>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6">{product.description}</p>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Quantity:</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-6">
                <button className="flex-1 bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center gap-2">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 p-4 rounded-lg transition">
                  <Heart size={24} />
                </button>
              </div>

              {/* Features */}
              <div className="border-t pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Truck className="text-purple-600" size={20} />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="text-green-600" size={20} />
                    <span>1 Year Warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-8">
            <div className="border-b mb-6">
              <div className="flex gap-8">
                <button className="pb-4 border-b-2 border-purple-600 font-semibold text-purple-600">
                  Features
                </button>
                <button className="pb-4 text-gray-600 hover:text-gray-800">
                  Specifications
                </button>
                <button className="pb-4 text-gray-600 hover:text-gray-800">
                  Reviews
                </button>
              </div>
            </div>

            {/* Features List */}
            <div className="grid md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="bg-purple-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

