import React from 'react'
import styles from './cta.module.css';


function Cta() {
    return (

        // <section className={styles.footer}>
        //     <div className={styles.footerContainer}>
        //         <div className={styles.footerText}>
        //             <h2 className={styles.footerHeading}>Celebrating Our Achievements</h2>
        //             <p className={styles.footerDescription}>
        //                 While we take pride in our accomplishments, our greatest reward is witnessing our clients reach
        //                 their health goals and thrive. Become a part of PNg Ftfam Solutions today and begin your own
        //                 journey toward a healthier, happier you.
        //             </p>
        //         </div>
        //         <div className={styles.footerButtonContainer}>
        //             <button className={styles.contactButton}>Contact Us</button>
        //         </div>
        //     </div>
        // </section>


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