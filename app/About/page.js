"use client";
import styles from './about.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            {/* Header Section */}
            <section className={styles.header}>
                <div className={styles.headerContent}>
                    <h1 className={styles.headerTitle}>About Nuhorcon </h1>
                    <p className={styles.headerDescription}>
                        Nuhorcon was established in June 2007 as a global resource company catering to client's interiordesign needs
                        over the years we have morphed into several channels including our academy, laboratory and book writing endeavours.

                        Our recent foray into nutritional solutions has led Prof Ngozi into health campaigns and community development initiatives.                    </p>
                    <div className={styles.imageContainer}>
                        <img src="/images/dr-ngozi-presentation.svg" alt="Dr. Ngozi Presentation" className={styles.headerImage} />
                    </div>
                </div>
            </section>


            {/* Our Story Section */}
            <section className={styles.story}>
                <h2 className={styles.storyTitle}>Our Story</h2>
                <p className={styles.storyIntro}>
                    At Nuhorcon, we are committed to transforming lives by providing scientifically-backed nutritional guidance tailored to individual needs. Our mission is to help you reach your health and wellness goals through personalized meal plans and fitness strategies.
                </p>

                <div className={styles.storySection}>
                    <div className={styles.storyItem}>
                        <img src="./images/birth-png-ftfam.svg" alt="Person exercising" className={styles.storyImage} />
                        <h3 className={styles.storyItemTitle}>The Birth of PNgfitfam Solutions</h3>
                        <p className={styles.storyItemDescription}>
                            What began as Dr. Ngozi’s academic passion for nutrition and biochemistry
                            evolved into a full-fledged wellness movement. Inspired by her research and personal transformation, Dr. Ngozi set out to create a community that fosters healthy living through accessible, science-backed meal plans and fitness guidance.
                        </p>
                    </div>

                    <div className={styles.storyItem}>
                        <h3 className={styles.storyItemTitle}>Empowering Lives Through Knowledge</h3>
                        <p className={styles.storyItemDescription}>
                            The core of our philosophy is education. With the PNgfitfam Masterclass series,
                            Dr. Ngozi has created a platform that educates individuals on understanding their bodies and making informed dietary choices. This approach helps participants achieve their health goals and maintain their results for the long term.
                        </p>
                        <img src="./images/woman-with-trophy.svg" alt="Woman holding trophy" className={styles.storyImage} />
                    </div>

                    <div className={styles.storyItem}>
                        <img src="./images/plant-research.svg" alt="Plants in pots" className={styles.storyImage} />
                        <h3 className={styles.storyItemTitle}>Proven Research and Publications</h3>
                        <p className={styles.storyItemDescription}>
                            Dr. Ngozi has published over 50 scholarly articles in prestigious journals,
                            focusing on herbal therapies and metabolic disorders, contributing to the advancement of medical knowledge in these fields.
                        </p>
                    </div>

                    <div className={styles.storyItem}>
                        <h3 className={styles.storyItemTitle}>Pioneering Weight-Loss Methods</h3>
                        <p className={styles.storyItemDescription}>
                            The “Healthy Meal Swaps Plan,” developed in 2017, has successfully guided numerous individuals toward their
                            weight-loss goals using everyday Nigerian meals. This program’s impact has been profound, helping many live healthier lives without resorting to fad diets.
                        </p>
                        <img src="./images/team-discussion.svg" alt="Team collaboration" className={styles.storyImage} />
                    </div>
                </div>
            </section>


            {/* Achievements Section */}
            <section className={styles.achievements}>
                <div className={styles.achievementsHeader}>
                    <h2 className={styles.achievementsTitle}>Achievements</h2>
                    <p className={styles.achievementsDescription}>
                        Nuhorcon Solutions has successfully guided over 500 clients toward healthier lifestyles through our bespoke nutrition plans. We have also conducted numerous community outreach programs aimed at addressing weight management challenges and chronic conditions like diabetes.
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
                        {/* <button className={styles.contactButton}>Contact Us</button> */}

                        <button
                            className={styles.contactButton}
                            onClick={() => window.location.href = '/Contact'} // Replace '/blog' with the actual path
                        >
                            Contact Us
                        </button>


                    </div>
                </div>
            </section>


        </div>
    );
}
