"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const API_URL = 'https://sahu-final.onrender.com';

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_URL}/api/products`);
        const data = await res.json();
        if (data && data.data) {
          setProducts(data.data);
          setError(null);
        } else {
          setError('Invalid data format received');
        }
      } catch (err) {
        setError('Unable to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="container py-16 text-center">Loading products...</div>;
  }
  if (error) {
    return <div className="container py-16 text-center text-red-500">{error}</div>;
  }

  return (
    <section className="container py-8">
      <p className="text-primary text-center mb-2 tracking-wider">Products</p>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-8">Our Products</h2>
      <div className="flex flex-col gap-12">
        {products.map((product, idx) => (
          <div
            key={product._id}
            className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Product Image */}
            <div className="flex justify-center">
              <Link href={`/products/${product._id}`}>
                <Image
                  src={product.image?.startsWith('http') ? product.image : `https://sahu-final.onrender.com${product.image}`}
                  alt={product.title}
                  width={350}
                  height={250}
                  className="rounded-lg shadow-md object-contain bg-[#e6ffe6] cursor-pointer"
                  style={{ minWidth: 300, minHeight: 200 }}
                />
              </Link>
            </div>
            {/* Product Details */}
            <div>
              <h3 className="text-2xl font-bold mb-1">{product.title || 'Product Title'}</h3>
              <p className="text-sm mb-2 text-gray-700">
                {product.description || 'Product discription should be added here. Some brief of the products for the quick overview of the product.'}
              </p>
              <div className="flex gap-2 flex-wrap">
                <a
                  href="https://wa.me/919928398987?text=I%20have%20enquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 rounded bg-green-500 text-white text-sm shadow hover:bg-green-600 transition"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+919928398987"
                  className="px-4 py-1 rounded bg-primary text-white text-sm shadow hover:bg-primary/80 transition"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 