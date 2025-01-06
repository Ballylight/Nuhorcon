"use client"
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Section: Image */}
        <div className={styles.imageContainer}>
          <img
            src="/images/dr-ngozi-profile.svg" // Replace this path with the actual image path
            alt="Dr. Ngozi Awai Imaga"
            className={styles.heroImage}
          />
        </div>

        {/* Right Section: Text Content */}
        <div className={styles.content}>
          <div className={styles.subHeadingContainer}>
            <h5 className={styles.subHeading}>Transform Your Your World with</h5>
          </div>
          <h1 className={styles.heading}>Prof. Ngozi Awa Imaga, PhD</h1>
          <p className={styles.description}>
            Meet Ngozi Awa Imaga, a Professor of Nutritional & Pharmacological Biochemistry at the University of Lagos with over 50 scholarly publications. Her research focuses on obesity, diabetes, and community health interventions. She has also authored 3 novels and is a creative writer with publications on Amazon. Nu-hor-con Horizon concepts was established in 2007 as a global resource company with division in interiors, event planning and analytic labs, wellness in and fitfam
            Welcome to PNg's world!
          </p>

          {/* Buttons */}
          <div className={styles.buttons}>
            <button
              className={styles.viewBlogButton}
              onClick={() => window.location.href = '/Blog'} // Replace '/blog' with the actual path
            >
              View Blog
            </button>

            <button className={styles.contactButton}
              onClick={() => window.location.href = '/Contact'}>Contact Us</button>
          </div>

          {/* Customer Info */}
          <div className={styles.customerInfo}>
            <img
              src="/images/happy-customers.svg" // Replace this path with the actual image path
              alt="Happy Customers"
              className={styles.customerImage}
            />
            <span className={styles.customerText}>
              <strong>430+</strong> Happy Customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
