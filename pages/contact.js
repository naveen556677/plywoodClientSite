import Head from 'next/head';
import styles from '../styles/Contact.module.scss';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static form submission simulation
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus(null);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us | Sri Dhanalakshmi Glass and Plywood</title>
        <meta name="description" content="Get in touch with Sri Dhanalakshmi Glass and Plywood in Puzhuthivakkam, Chennai. Call us at 098412 98703 for queries and custom quotes." />
        <meta property="og:title" content="Contact Sri Dhanalakshmi Glass and Plywood" />
        <meta property="og:description" content="Visit our glass and plywood showroom in Puzhuthivakkam, Chennai." />
      </Head>

      <div className={styles.pageHeader}>
        <div className="container">
          <div className="animate-in visible">
            <span className="section-label">Get In Touch</span>
            <h1 className={styles.title}>Contact <span>Us</span></h1>
            <p className={styles.subtitle}>Visit our shop in Puzhuthivakkam or send us a message for queries, quotes, or bulk order requirements.</p>
          </div>
        </div>
      </div>

      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactWrapper}>
            
            {/* Info Cards */}
            <div className={styles.infoCol}>
              <div className={`animate-in visible ${styles.infoCard}`}>
                <div className={styles.iconBox}>📍</div>
                <div className={styles.infoContent}>
                  <h3>Visit Our Store</h3>
                  <p>60, Puzhuthivakkam Main Rd,<br/>Puzhuthivakkam, Madipakkam,<br/>Chennai, Tamil Nadu 600091</p>
                  <span className={styles.note}>Located near Corporation Office</span>
                </div>
              </div>

              <div className={`animate-in visible ${styles.infoCard}`}>
                <div className={styles.iconBox}>📞</div>
                <div className={styles.infoContent}>
                  <h3>Call Us</h3>
                  <a href="tel:09841298703" className={styles.contactLink}>098412 98703</a>
                  <p>For immediate assistance</p>
                </div>
              </div>

              <div className={`animate-in visible ${styles.infoCard}`}>
                <div className={styles.iconBox}>⏰</div>
                <div className={styles.infoContent}>
                  <h3>Business Hours</h3>
                  <p>Open daily until 9:00 PM</p>
                  <span className={styles.note}>Holiday hours may vary</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={`animate-in visible ${styles.formCol}`}>
              <div className={styles.formCard}>
                <h2>Send a Message</h2>
                <p>We'll get back to you with a competitive quote.</p>

                {formStatus === 'success' && (
                  <div className={styles.successMsg}>
                    Thank you! Your message has been sent successfully. We will contact you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        placeholder="10-digit mobile number"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="For business quotes (optional)"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Your Requirements</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      rows="4"
                      placeholder="Tell us what you need (e.g. Toughned glass 12mm for balcony, 100 sq ft)"
                    ></textarea>
                  </div>

                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                    Submit Request
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className="animate-in visible">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.584742491104!2d80.19420047507683!3d12.985614987332204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d80005a8fcd%3A0xe54ce8a85dd9e7df!2sSri%20Dhanalakshmi%20glass%20and%20plywood!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="500" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapIframe}
          ></iframe>
        </div>
      </section>
    </>
  );
}
