import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { mockProducts } from '@/data/mockProducts';
import ProductClient from './ProductClient';

// This makes Next.js generate all product pages as static HTML at build time
export function generateStaticParams() {
  return mockProducts.map((product) => ({
    slug: product.slug,
  }));
}

// Dynamically generate perfect SEO metadata for each product
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = mockProducts.find((p) => p.slug === slug);
  
  if (!product) {
    return {
      title: 'Product Not Found | Aadaksha',
    };
  }

  return {
    title: `${product.name} | Aadaksha Authentic Foods`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Aadaksha`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = mockProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Find 4 related products from the same category (excluding the current one)
  const relatedProducts = mockProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <ProductClient 
      product={product} 
      relatedProducts={relatedProducts} 
    />
  );
}
