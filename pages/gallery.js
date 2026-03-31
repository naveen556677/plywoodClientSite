import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Gallery.module.scss';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const galleryItems = [
    { id: 1, category: 'residential', src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200', title: 'Frameless Shower Enclosure' },
    { id: 2, category: 'commercial', src: 'https://images.unsplash.com/photo-1506544777-64cfbea77cce?auto=format&fit=crop&q=80&w=1200', title: 'Office Glass Partitions' },
    { id: 3, category: 'custom', src: 'https://images.unsplash.com/photo-1620959325946-b0ad52c1fe70?auto=format&fit=crop&q=80&w=1200', title: 'Custom Vanity Mirror' },
    { id: 4, category: 'commercial', src: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1200', title: 'Commercial Glass Facade' },
    { id: 5, category: 'residential', src: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd0b?auto=format&fit=crop&q=80&w=1200', title: 'Glass Balustrade Staircase' },
    { id: 6, category: 'custom', src: 'https://images.unsplash.com/photo-1510114815467-15af29272332?auto=format&fit=crop&q=80&w=1200', title: 'Premium Plywood Paneling' },
    { id: 7, category: 'residential', src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200', title: 'Modern Kitchen Overheads' },
    { id: 8, category: 'commercial', src: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1200', title: 'Toughened Storefront Glass' },
    { id: 9, category: 'custom', src: 'https://images.unsplash.com/photo-1596799014562-b9cf6d22fc0b?auto=format&fit=crop&q=80&w=1200', title: 'Fluted Glass Room Divider' }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'custom', label: 'Custom Work' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setTimeout(() => setCurrentImage(null), 300);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Head>
        <title>Project Gallery | Sri Dhanalakshmi Glass and Plywood</title>
      </Head>

      <div className={styles.pageHeader}>
        <div className="container">
          <div className="animate-in visible">
            <span className="section-label">Portfolio</span>
            <h1 className={styles.title}>Our <span>Gallery</span></h1>
            <p className={styles.subtitle}>Take a look at some of our completed installations ranging from simple residential mirrors to complex commercial glass facades.</p>
          </div>
        </div>
      </div>

      <section className={`section ${styles.gallerySection}`}>
        <div className="container">
          
          <div className={styles.filterMenu}>
            {filters.map(f => (
              <button 
                key={f.id}
                className={`${styles.filterBtn} ${filter === f.id ? styles.active : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className={styles.masonryGrid}>
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id} 
                className={`animate-in visible ${styles.masonryItem}`}
                style={{ animationDelay: `${(idx % 6) * 0.1}s` }}
                onClick={() => openLightbox(item)}
              >
                <div className={styles.imageWrapper}>
                  <Image 
                    src={item.src} 
                    alt={item.title} 
                    width={600}
                    height={item.id % 2 === 0 ? 800 : 500}
                    className={styles.galleryImg} 
                  />
                  <div className={styles.overlay}>
                    <span className={styles.icon}>+</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div className={`${styles.lightbox} ${lightboxOpen ? styles.open : ''}`} onClick={closeLightbox}>
        <button className={styles.closeBtn} onClick={closeLightbox}>&times;</button>
        {currentImage && (
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image 
              src={currentImage.src} 
              alt={currentImage.title} 
              fill
              className={styles.lightboxImg}
            />
            <div className={styles.lightboxCaption}>{currentImage.title}</div>
          </div>
        )}
      </div>
    </>
  );
}
