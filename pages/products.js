import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Products.module.scss';

export default function Products() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'glass', name: 'Glass Solutions' },
    { id: 'mirrors', name: 'Mirrors' },
    { id: 'plywood', name: 'Plywood & Laminates' },
    { id: 'hardware', name: 'Hardware & Fittings' }
  ];

  const products = [
    {
      id: 1,
      name: 'Toughened Safety Glass',
      category: 'glass',
      image: 'https://images.unsplash.com/photo-1584622765510-47b2c019d0e1?auto=format&fit=crop&q=80&w=800',
      description: 'High strength clear and tinted safety glass for doors, partitions, and balustrades. Available in 8mm, 10mm, 12mm thickness.'
    },
    {
      id: 2,
      name: 'Beveled Decor Mirror',
      category: 'mirrors',
      image: 'https://images.unsplash.com/photo-1604014237800-1c9102c21915?auto=format&fit=crop&q=80&w=800',
      description: 'Elegant custom-cut mirrors with premium beveling. Ideal for bathrooms, dressing areas, and living room statement pieces.'
    },
    {
      id: 3,
      name: 'Marine Grade Plywood',
      category: 'plywood',
      image: 'https://images.unsplash.com/photo-1549488344-c09ab0cd0156?auto=format&fit=crop&q=80&w=800',
      description: 'BWR and BWP grade water-resistant plywood for kitchens, bathrooms, and exterior furniture applications.'
    },
    {
      id: 4,
      name: 'Textured Laminates',
      category: 'plywood',
      image: 'https://images.unsplash.com/photo-1510114815467-15af29272332?auto=format&fit=crop&q=80&w=800',
      description: '1mm and 0.8mm decorative laminates in wood grain, solid colors, and high-gloss finishes.'
    },
    {
      id: 5,
      name: 'Fluted / Ribbed Glass',
      category: 'glass',
      image: 'https://images.unsplash.com/photo-1596799014562-b9cf6d22fc0b?auto=format&fit=crop&q=80&w=800',
      description: 'Trendy textured glass offering privacy while allowing light transmission. Perfect for modern office partitions.'
    },
    {
      id: 6,
      name: 'Shower Enclosure Fittings',
      category: 'hardware',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
      description: 'Premium SS304 grade hinges, handles, and connecting channels for frameless shower enclosures.'
    },
    {
      id: 7,
      name: 'LED Backlit Mirrors',
      category: 'mirrors',
      image: 'https://images.unsplash.com/photo-1620959325946-b0ad52c1fe70?auto=format&fit=crop&q=80&w=800',
      description: 'Smart mirrors with integrated LED strips, touch sensors, and defogger capabilities.'
    },
    {
      id: 8,
      name: 'Glass Spider Fittings',
      category: 'hardware',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
      description: 'Heavy-duty architectural spider fittings for frameless structural glass facades.'
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <>
      <Head>
        <title>Products | Sri Dhanalakshmi Glass and Plywood</title>
      </Head>

      <div className={styles.pageHeader}>
        <div className="container">
          <div className={`animate-in visible ${styles.headerText}`}>
            <span className="section-label">Our Catalog</span>
            <h1>Premium <span>Materials</span></h1>
            <p>Explore our wide collection of high-quality glass, mirrors, plywood, and architectural hardware.</p>
          </div>
        </div>
      </div>

      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          
          <div className="animate-in visible">
            <div className={styles.tabsContainer}>
              {categories.map(cat => (
                <button 
                  key={cat.id}
                  className={`${styles.tabBtn} ${activeTab === cat.id ? styles.active : ''}`}
                  onClick={() => setActiveTab(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.productsGrid}>
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className={`animate-in visible ${styles.productCard}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.imageContainer}>
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className={styles.productImg}
                  />
                  <div className={styles.productOverlay}>
                    <Link href="/contact" className="btn btn-primary">Enquire Now</Link>
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <span className={styles.productCat}>{product.category.toUpperCase()}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className={`section ${styles.customOrderSection}`}>
        <div className="container">
          <div className={`animate-in visible ${styles.customBox}`}>
            <div className={styles.customContent}>
              <h2>Need a Custom Solution?</h2>
              <p>We specialize in custom glass cutting, beveling, edging, and bulk plywood orders tailored to your exact architectural specifications. Contact our experts to discuss your project requirements.</p>
              <Link href="/contact" className="btn btn-outline">Consult an Expert</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
