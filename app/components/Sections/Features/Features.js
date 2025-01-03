import React from 'react'
import styles from './features.module.css'

function Features() {
  return (

    <section className={styles.achievements}>
      <div className={styles.achievementsHeader}>
        <h2 className={styles.achievementsTitle}>Features</h2>
        <p className={styles.achievementsDescription}>
          Welcome to the Feature Section of Nuhorcon’s Wellness Program, your ultimate destination for all things nutrition and health!</p>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="/images/community-icon.png" alt="Community Icon" className={styles.cardIcon} />
            <h3 className={styles.cardTitle}> Meet Dr. Ngozi Awa Imaga PhD</h3>
          </div>
          <p className={styles.cardText}>
            Dr. Ngozi is a Professor of Biochemistry at the University of Lagos, with a specialization in Nutrition and Pharmacology. She is the founder of a wellness program and has over 50 scholarly publications focused on Antidiabetic phytomedicines, Sickle Cell Anemia, and Metabolic disorders.          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="/images/weightloss-icon.png" alt="Weightloss Icon" className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>PNgfitfam Masterclass Series</h3>
          </div>
          <p className={styles.cardText}>
            Quarterly sessions designed to guide participants in adopting body-type specific nutrition plans and fitness regimens. These sessions focus on weight management and healthy eating habits, tailored to individual needs.          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="/images/masterclass-icon.png" alt="Masterclass Icon" className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Healthy Meal Swaps Plan</h3>
          </div>
          <p className={styles.cardText}>
            Developed in 2017, this plan focuses on using Nigerian meals in innovative ways to promote weight loss without relying on fad diets. Dr. Ngozi herself has successfully lost 20kg following these principles.          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="/images/research-icon.png" alt="Research Icon" className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Weight Loss Secrets Manual</h3>
          </div>
          <p className={styles.cardText}>
            Published in 2019, this manual shares proven strategies for effective weight loss, backed by client testimonials. It incorporates lessons from Dr. Ngozi's own experiences and research.          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="/images/holistic-icon.png" alt="Research Icon" className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Holistic Herbal Solutions</h3>
          </div>
          <p className={styles.cardText}>
            Dr. Ngozi promotes the use of polyherbal mixes like Vernonia-Ocimum-Allium, which treat core organs to address multiple health issues simultaneously, such as diabetes, pain, and intestinal disorders.          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="/images/community-centered-icon.png" alt="Research Icon" className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Community-Centered Interventions</h3>
          </div>
          <p className={styles.cardText}>
            Through her ongoing research on Obesity and Diabetes, Dr. Ngozi offers community interventions and counseling sessions, applying Nutritional Psychology to help individuals overcome health challenges and live healthier lives.          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="/images/centered-icon.png" alt="Research Icon" className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>NGY Author: Fiction Novels on Dreame</h3>
          </div>
          <p className={styles.cardText}>
            Immerse yourself in captivating fiction stories by NGY Author, exclusively available on Dreame. Experience tales filled with imagination, emotion, and unforgettable characters.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="/images/community-centered-icon.png" alt="Research Icon" className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Analytical Labs</h3>
          </div>
          <p className={styles.cardText}>
          Specializing in comprehensive biochemical and toxicological analyses, we provide reliable testing for various sample types and support scientific projects with precision and expertise.            </p>
        </div>

      </div>
    </section>

  )
}

export default Features
