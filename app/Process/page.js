import styles from './process.module.css';

const Process = () => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Pathway to a Healthier You</h1>
          <p className={styles.headerDescription}>
            At PNgg Fitfam Solutions, we’re committed to guiding you every step of the way on your journey to health and
            wellness. With personalized nutrition plans and expert support, we help you take control of your well-being
            and embrace a balanced, fulfilling lifestyle.
          </p>
          <div className={styles.imageContainer}>
            <img src="/images/pathway-header.svg" alt="Dr. Ngozi Presentation" className={styles.headerImage} />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorksSection}>
        <h2 className={styles.sectionHeading}>How It Works</h2>
        <p className={styles.sectionDescription}>
          At PNgg Fitfam Solutions, we believe that achieving a healthier lifestyle should be simple, effective, and
          sustainable. Our comprehensive approach combines expert nutrition guidance, fitness routines, and specially
          formulated herbal drinks to help you on your wellness journey. Follow these steps to get started.
        </p>

        <div className={styles.stepsContainer}>
          {[
            {
              id: 1,
              title: "Consultation & Assessment",
              description: "We begin with a personalized consultation to assess your unique health goals, dietary habits, and lifestyle needs.",
              icon: "/images/consultation.png"
            },
            {
              id: 2,
              title: "Customized Meal Plan",
              description: "Based on your assessment, we provide a tailored meal plan that includes healthy meal swaps designed to fit your preferences and goals.",
              icon: "/images/meal-plan.png"
            },
            {
              id: 3,
              title: "PNggfitfam Masterclass Enrollment",
              description: "Join our quarterly Masterclass series, where you’ll learn about body-type-specific nutrition, exercise routines, and meal planning techniques.",
              icon: "/images/masterclass.png"
            },
            {
              id: 4,
              title: "Fitness & Exercise Guidance",
              description: "We develop a fitness regimen designed for your body type to complement your nutrition plan and maximize results.",
              icon: "/images/fitness-guidance.png"
            },
            {
              id: 5,
              title: "Herbal Products Selection",
              description: "Choose from our range of specially formulated herbal products, designed to detoxify your system, support weight loss, and enhance overall wellness.",
              icon: "/images/herbal-products.png"
            },
            {
              id: 6,
              title: "Weight Monitoring & Tracking",
              description: "We offer tools to help you monitor your progress and track key metrics, such as weight loss and body measurements.",
              icon: "/images/weight-tracking.png"
            },
            {
              id: 7,
              title: "Regular Counseling & Support",
              description: "Receive ongoing counseling to ensure you stay motivated and overcome any challenges that arise during your wellness journey.",
              icon: "/images/counseling.png"
            },
            {
              id: 8,
              title: "Community Engagement",
              description: "Become part of the PNggfitfam community to share your experiences, gain inspiration, and stay connected with others on similar wellness journeys.",
              icon: "/images/community.png"
            },
            {
              id: 9,
              title: "Progress Review & Adjustments",
              description: "Regular check-ins are scheduled to review your progress, adjust your meal and fitness plans, and introduce new goals.",
              icon: "/images/progress-review.png"
            },
            {
              id: 10,
              title: "Sustainable Healthy Living",
              description: "Our goal is to help you sustain your results long-term, ensuring that you lead a healthier and more balanced life, supported by nutrition, exercise, and herbal remedies.",
              icon: "/images/sustainable-living.png"
            },
          ].map((step) => (
            <div key={step.id} className={styles.stepCard}>
              <div className={styles.numberBackground}>{String(step.id).padStart(2, '0')}</div>
              <div className={styles.cardContent}>
                <div className={styles.cardTitleContainer}>
                  <img
                    src={step.icon}
                    alt={`${step.title} Icon`}
                    className={styles.cardIcon}
                  />
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                </div>
                <p className={styles.cardDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Footer Section */}
      <section className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerText}>
                        <h2 className={styles.footerHeading}>Celebrating Our Achievements</h2>
                        <p className={styles.footerDescription}>
                            While we take pride in our accomplishments, our greatest reward is witnessing our clients reach
                            their health goals and thrive. Become a part of PNg Ftfam Solutions today and begin your own
                            journey toward a healthier, happier you.
                        </p>
                    </div>
                    <div className={styles.footerButtonContainer}>
                        <button className={styles.contactButton}>Contact Us</button>
                    </div>
                </div>
            </section>
    </div>
  );
};

export default Process;
