"use client"
import Image from 'next/image';
import { useState } from 'react';

const BACKEND_URL = 'https://sahu-final.onrender.com';

const getFullImageUrl = (imageUrl?: string) => {
  if (!imageUrl) return '';
  if (imageUrl.startsWith('http')) return imageUrl;
  return `${BACKEND_URL}${imageUrl}`;
};

function ProductDetail({ product }: { product: any }) {
  const images = [product.image, ...(product.additionalImages || [])].filter(Boolean);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-background rounded shadow p-4 flex flex-col items-center">
            <div className="w-full h-80 flex items-center justify-center mb-4 bg-[#e6ffe6] rounded">
              {images[selectedImageIndex] && (
                <Image
                  src={getFullImageUrl(images[selectedImageIndex])}
                  alt={product.title}
                  width={400}
                  height={320}
                  className="object-contain w-auto h-72"
                />
              )}
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {images.map((img: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`border rounded p-1 transition ${selectedImageIndex === index ? 'border-primary' : 'border-transparent'}`}
                  style={{ outline: 'none' }}
                >
                  <Image
                    src={getFullImageUrl(img)}
                    alt={`${product.title} View ${index + 1}`}
                    width={64}
                    height={48}
                    className="object-contain w-16 h-12"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-muted-foreground mb-4">{product.description}</p>
          {product.features?.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Key Features</h2>
              <ul className="list-disc pl-5">
                {product.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          {product.specifications?.length > 0 && (
            <button
              className="px-4 py-2 bg-primary text-white rounded w-max mb-4"
              onClick={() => document.getElementById('specifications')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Specifications
            </button>
          )}
        </div>
      </div>
      {product.specifications?.length > 0 && (
        <div id="specifications" className="mt-12 rounded shadow p-6 bg-muted text-foreground">
          <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead>
                <tr>
                  <th className="px-4 py-2 border bg-background text-foreground">Name</th>
                  <th className="px-4 py-2 border bg-background text-foreground">Value</th>
                </tr>
              </thead>
              <tbody>
                {product.specifications.map((spec: any, index: number) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border bg-muted text-foreground">{spec.name}</td>
                    <td className="px-4 py-2 border bg-muted text-foreground">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

async function getProduct(id: string) {
  const res = await fetch(`${BACKEND_URL}/api/products/${id}`, { cache: 'no-store' });
  const data = await res.json();
  if (data.success) return data.data;
  return null;
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    return <div className="text-center text-red-500 py-12">Product not found</div>;
  }

  return <ProductDetail product={product} />;
} 