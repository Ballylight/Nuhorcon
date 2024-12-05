import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Section: Image */}
        <div className={styles.imageContainer}>
          <img
            src="/images/dr-ngozi-profile.png" // Replace this path with the actual image path
            alt="Dr. Ngozi Awai Imaga"
            className={styles.heroImage}
          />
        </div>

        {/* Right Section: Text Content */}
        <div className={styles.content}>
          <h5 className={styles.subHeading}>Transform Your Health with</h5>
          <h1 className={styles.heading}>Dr. Ngozi Awa Imaga PhD</h1>
          <p className={styles.description}>
            Meet Dr. Ngozi Awa Imaga PhD, a Professor of Biochemistry at the University of Lagos with over 50 scholarly publications. 
            She founded PNggfitfam, a wellness program offering age-specific meal plans and fitness regimens. Through her “Healthy Meal Swaps Plan” 
            and the PNggfitfam Masterclass series, Dr. Ngozi helps people achieve lasting weight loss without fad diets. Having personally lost 20kg, 
            she now shares her expertise in her book “Weightloss Secrets.” Her research focuses on obesity, diabetes, and community health interventions. 
            Join her journey to a healthier, fitter life!
          </p>

          {/* Buttons */}
          <div className={styles.buttons}>
            <button className={styles.viewBlogButton}>View Blog</button>
            <button className={styles.contactButton}>Contact Us</button>
          </div>

          {/* Customer Info */}
          <div className={styles.customerInfo}>
            <img
              src="/images/happy-customers.png" // Replace this path with the actual image path
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
