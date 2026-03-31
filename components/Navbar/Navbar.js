import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          <span>SDGP</span>
          <div className={styles.logoText}>
            <h1>Sri Dhanalakshmi</h1>
            <p>Glass & Plywood</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <ul className={styles.navItems}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`${styles.navLink} ${
                    router.pathname === link.path ? styles.active : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-primary">
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.open : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`}>
          <ul className={styles.mobileNavItems}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`${styles.mobileNavLink} ${
                    router.pathname === link.path ? styles.active : ''
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className={`btn btn-primary ${styles.mobileBtn}`} onClick={closeMobileMenu}>
                Get Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
