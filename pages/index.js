import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { useEffect, useState } from 'react';

export default function Home() {
  const [stats, setStats] = useState({ years: 0, customers: 0, products: 0 });

  useEffect(() => {
    // Basic counter animation logic
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setStats({
          years: Math.floor((25 / steps) * currentStep),
          customers: Math.floor((5000 / steps) * currentStep),
          products: Math.floor((1200 / steps) * currentStep)
        });
      } else {
        clearInterval(timer);
        setStats({ years: 25, customers: 5000, products: 1200 });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Sri Dhanalakshmi Glass and Plywood | Home</title>
        <meta name="description" content="Chennai's leading destination for high-quality toughened glass, custom mirrors, and premium plywood. Visit Sri Dhanalakshmi Glass and Plywood." />
        <meta property="og:title" content="Sri Dhanalakshmi Glass and Plywood | Home" />
        <meta property="og:description" content="Chennai's leading destination for high-quality toughened glass, custom mirrors, and premium plywood for all your architectural needs." />
        <meta property="og:url" content="https://goo.gl/maps/b8emRwKdStyPPhC49" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HardwareStore",
              "name": "Sri Dhanalakshmi Glass and Plywood",
              "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
              "url": "https://sridhanalakshmi-glass.in",
              "telephone": "+919841298703",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "60, Puzhuthivakkam Main Rd, Puzhuthivakkam, Madipakkam",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600091",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 12.9856149,
                "longitude": 80.1942004
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "21:00"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "11"
              }
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image 
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2072" 
            alt="Glass and Plywood background" 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={`container ${styles.heroContent}`}>
          <div className={`animate-in visible ${styles.heroText}`}>
            <span className={styles.heroTag}>Premium Materials</span>
            <h1>Crafting Spaces With <span>Elegance</span> & <span>Strength</span></h1>
            <p>Chennai's leading destination for high-quality toughened glass, custom mirrors, and premium plywood for all your architectural and interior needs.</p>
            
            <div className={styles.heroBtns}>
              <Link href="/products" className="btn btn-primary">Explore Products</Link>
              <Link href="/contact" className="btn btn-outline">Get a Free Quote</Link>
            </div>
          </div>
        </div>
        
        {/* <div className={styles.scrollDown}>
          <span>Scroll</span>
          <div className={styles.scrollLine}></div>
        </div> */}
      </section>

      {/* Stats / About Snippet Section */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={`animate-in visible ${styles.statCard}`} style={{ transitionDelay: '0s' }}>
              <h3>{stats.years}+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className={`animate-in visible ${styles.statCard}`} style={{ transitionDelay: '0.1s' }}>
              <h3>{stats.customers.toLocaleString()}+</h3>
              <p>Happy Customers</p>
            </div>
            <div className={`animate-in visible ${styles.statCard}`} style={{ transitionDelay: '0.2s' }}>
              <h3>{stats.products.toLocaleString()}+</h3>
              <p>Premium Products</p>
            </div>
            <div className={`animate-in visible ${styles.statCard}`} style={{ transitionDelay: '0.3s' }}>
              <h3>4.5★</h3>
              <p>Google Rating</p>
            </div>
          </div>

          <div className={styles.aboutContent}>
            <div className="animate-in visible">
              <span className="section-label">About Us</span>
              <h2 className="section-title">Quality You Can <span>Trust</span></h2>
              <p>At Sri Dhanalakshmi Glass and Plywood, we believe in delivering nothing but the best. Located in the heart of Puzhuthivakkam, Chennai, we have been serving residential and commercial clients with top-tier architectural glass, decorative mirrors, and durable plywood solutions.</p>
              <p>Our commitment to precision cutting, safe transportation, and expert advice makes us the preferred choice for architects, interior designers, and homeowners alike.</p>
              <Link href="/contact" className={`btn btn-glass ${styles.aboutBtn}`}>Visit Our Showroom</Link>
            </div>
            <div className={`animate-in visible ${styles.aboutImage}`}>
              <div className={styles.imageWrapper}>
                <Image 
                  src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1470" 
                  alt="Glass working process" 
                  width={600} 
                  height={400} 
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className={`section ${styles.categoriesSection}`}>
        <div className="container">
          <div className="section-header animate-in visible">
            <span className="section-label">Our Range</span>
            <h2 className="section-title">Featured <span>Categories</span></h2>
            <p className="section-subtitle">Discover our wide selection of premium materials designed to elevate your interior and architectural projects.</p>
          </div>

          <div className={styles.categoryGrid}>
            {[
              { title: 'Toughened Glass', desc: 'High-strength safety glass for partitions and doors', img: 'https://images.unsplash.com/photo-1584622765510-47b2c019d0e1?auto=format&fit=crop&q=80&w=1200' },
              { title: 'Decorative Mirrors', desc: 'Custom cut and polished mirrors for elegant spaces', img: 'https://images.unsplash.com/photo-1604014237800-1c9102c21915?auto=format&fit=crop&q=80&w=1200' },
              { title: 'Premium Plywood', desc: 'Commercial and marine grade durable plywood', img: 'https://images.unsplash.com/photo-1549488344-c09ab0cd0156?auto=format&fit=crop&q=80&w=1200' },
              { title: 'Laminates & Sunmica', desc: 'Beautiful textures and finishes for furniture', img: 'https://images.unsplash.com/photo-1510114815467-15af29272332?auto=format&fit=crop&q=80&w=1200' },
            ].map((cat, i) => (
              <div key={i} className={`animate-in visible ${styles.categoryCard}`} style={{ transitionDelay: `${i * 0.15}s` }}>
                <Image src={cat.img} alt={cat.title} fill className={styles.catImg} />
                <div className={styles.catOverlay}>
                  <div className={styles.catContent}>
                    <h3>{cat.title}</h3>
                    <p>{cat.desc}</p>
                    <Link href="/products" className={styles.catLink}>View Collection &rarr;</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={`animate-in visible ${styles.ctaBox}`}>
            <div className={styles.ctaText}>
              <h2>Ready to Transform Your Space?</h2>
              <p>Get in touch with us today for expert advice, custom measurements, and premium material delivery.</p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">Start Your Project</Link>
              <a href="tel:09841298703" className={styles.callLink}>Or call 098412 98703</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
