import React from 'react'
import styles from './cta.module.css';


function Cta() {
    return (
        
        <section className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerText}>
                    <h2 className={styles.footerHeading}>Ready to Start Your Journey to a Healthier, Happier You?</h2>
                    <p className={styles.footerDescription}>
                    Join the PNg Wellness Program today and discover personalized nutrition plans, expert advice, and holistic solutions designed for lasting health and well-being.
                    </p>
                </div>
                <div className={styles.footerButtonContainer}>
                    <button className={styles.contactButton}>Contact Us</button>
                </div>
            </div>
        </section>


    )
}

export default Cta