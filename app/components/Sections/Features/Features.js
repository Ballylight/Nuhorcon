import React from 'react'
import styles from './features.module.css';

function Features() {
  return (
    <section className={styles.achievements}>
      <div className={styles.achievementsHeader}>
        <h2 className={styles.achievementsTitle}>Achievements(Not done yet)</h2>
        <p className={styles.achievementsDescription}>
          PNg Fitfam Solutions has successfully guided over 500 clients toward healthier lifestyles through our bespoke nutrition plans. We have also conducted numerous community outreach programs aimed at addressing weight management challenges and chronic conditions like diabetes.
        </p>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="/images/community-icon.png" alt="Community Icon" className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Community Interventions</h3>
          </div>
          <p className={styles.cardText}>
            Spearheaded numerous health initiatives, particularly targeting obesity and diabetes, providing hands-on counselling and intervention strategies.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="/images/weightloss-icon.png" alt="Weightloss Icon" className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Weightloss Secrets Manual</h3>
          </div>
          <p className={styles.cardText}>
            Authored a comprehensive weight-loss guide with real-world testimonials from clients.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="/images/masterclass-icon.png" alt="Masterclass Icon" className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>PNg Ftfam Masterclass</h3>
          </div>
          <p className={styles.cardText}>
            Successfully running quarterly wellness programs that combine personalized meal plans with fitness regimens.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="/images/research-icon.png" alt="Research Icon" className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Groundbreaking Research</h3>
          </div>
          <p className={styles.cardText}>
            Over 50 scholarly publications on Antidiabetic phytomedicines, Antioxidant herbal therapies, and Metabolic disorders.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Features