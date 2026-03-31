import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Services.module.scss';

export default function Services() {
  const servicesList = [
    {
      id: "cutting",
      title: "Precision Glass Cutting",
      desc: "Our advanced machinery ensures clear, precise cuts matching your exact dimensions. Suitable for small decorative pieces to large architectural panels.",
      icon: "📐",
    },
    {
      id: "toughening",
      title: "Glass Toughening",
      desc: "Enhancing the strength of ordinary glass through thermal tempering, making it 4-5 times stronger and safer for residential and commercial use.",
      icon: "🔥",
    },
    {
      id: "beveling",
      title: "Beveling & Edging",
      desc: "Creating smooth, polished, or beveled edges for mirrors, table tops, and exposed glass shelves. Choose from flat, round, or decorative edge profiles.",
      icon: "✨",
    },
    {
      id: "installation",
      title: "On-Site Installation",
      desc: "Professional installation services for glass partitions, shower enclosures, mirrors, and glass facades by our experienced technical team.",
      icon: "🛠️",
    },
    {
      id: "wholesale",
      title: "Wholesale Plywood & Glass",
      desc: "Supplying bulk quantities of premium commercial/marine plywood and glass sheets to builders, contractors, and interior designers.",
      icon: "📦",
    },
    {
      id: "custom",
      title: "Custom Mirror Design",
      desc: "We design and manufacture customized LED mirrors, antique mirrors, and uniquely shaped wall mirrors to elevate your interior spaces.",
      icon: "🖼️",
    }
  ];

  return (
    <>
      <Head>
        <title>Services | Sri Dhanalakshmi Glass and Plywood</title>
      </Head>

      {/* Hero */}
      <div className={styles.pageHeader}>
        <div className="container">
          <div className="animate-in visible">
            <span className="section-label">What We Do</span>
            <h1 className={styles.title}>Expert <span>Services</span></h1>
            <p className={styles.subtitle}>From precision cutting to professional installation, we offer end-to-end glass and plywood solutions.</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {servicesList.map((service, idx) => (
              <div 
                key={service.id} 
                className={`animate-in visible ${styles.serviceCard}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={styles.iconBox}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link href={`/contact?service=${service.id}`} className={styles.serviceLink}>
                  Request Service &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <div className="section-header animate-in visible">
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Our <span>Process</span></h2>
            <p className="section-subtitle">A streamlined workflow to ensure your project is completed on time and to exact specifications.</p>
          </div>

          <div className={styles.timeline}>
            <div className={`animate-in visible ${styles.timelineStep}`}>
              <div className={styles.stepNum}>01</div>
              <div className={styles.stepContent}>
                <h4>Consultation & Enquiry</h4>
                <p>Discuss your requirements with our team. We'll guide you in selecting the right material thickness, grade, and finish.</p>
              </div>
            </div>
            
            <div className={`animate-in visible ${styles.timelineStep}`}>
              <div className={styles.stepNum}>02</div>
              <div className={styles.stepContent}>
                <h4>Measurement & Quote</h4>
                <p>For custom jobs, our technicians visit your site for exact measurements. We then provide a transparent, competitive quote.</p>
              </div>
            </div>
            
            <div className={`animate-in visible ${styles.timelineStep}`}>
              <div className={styles.stepNum}>03</div>
              <div className={styles.stepContent}>
                <h4>Processing & Fabrication</h4>
                <p>Your glass or plywood is cut, polished, beveled, or toughened in our facility using state-of-the-art machinery.</p>
              </div>
            </div>
            
            <div className={`animate-in visible ${styles.timelineStep}`}>
              <div className={styles.stepNum}>04</div>
              <div className={styles.stepContent}>
                <h4>Delivery & Installation</h4>
                <p>Safe transportation of fragile materials followed by professional installation, ensuring a perfect fit and finish.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Banner */}
      <section className={styles.bannerSection}>
        <div className="container">
          <div className={`animate-in visible ${styles.bannerCard}`}>
            <div className={styles.bannerContent}>
              <h2>Looking for bulk orders or contract work?</h2>
              <p>We partner with architects and interior designers across Chennai.</p>
            </div>
            <Link href="/contact" className="btn btn-primary">Partner With Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
