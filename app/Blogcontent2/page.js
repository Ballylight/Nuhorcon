'use client';
// import React from 'react';
import styles from './blogpost.module.css';

const BlogPost = () => {
    return (
        <>
            <div className={styles.container}>
                {/* Blog Image */}
                <div className={styles.imageWrapper}>
                    <img
                        src="/images/papaya.svg" // Replace with your actual image path
                        alt="Wellness Insights"
                        className={styles.blogImage}
                    />
                    <h2 className={styles.imageText}>
                    Nutrition                    </h2>
                </div>

                {/* Blog Title */}
                <h1 className={styles.blogTitle}>The Power of Antioxidants: Benefits of Papaya Tea</h1>

                {/* Blog Content */}
                <p className={styles.blogContent}>
                    Stress, fatigue, and health issues like anemia can weigh you down, leaving you feeling less than your best. But did you know that the humble pawpaw (papaya) plant holds the key to revitalizing your health? PNGFitFam’s Papaya Tea is a nutrient-rich beverage designed to give your body the antioxidant boost it needs.

                    Made from a blend of pawpaw leaves and unripe fruit, Papaya Tea is rich in antioxidants that help combat oxidative stress—a key factor in aging and many chronic diseases. It also supports healthy blood levels, making it a great choice for those dealing with anemia.

                    Why choose Papaya Tea?

                    <br />1. Stress relief: The antioxidants in Papaya Tea help neutralize free radicals, reducing the damage caused by stress.
                    <br />2. Blood health: Its natural properties are excellent for combating anemia and improving overall vitality.
                    <br />3. Convenient and versatile: Enjoy it hot or cold, morning or evening—it’s a beverage that fits your lifestyle.
                    Incorporate Papaya Tea into your daily routine and experience the difference for yourself. Start sipping your way to better health today!
                </p>

                {/* See More Button */}
                <div className={styles.buttonWrapper}>
                    <button
                        className={styles.seeMoreButton}
                        onClick={() =>
                            window.open('https://www.amazon.com/dp/B089P4XL46/ref=cm_sw_r_awdo_ZQZPH8TZ9HTK3AWM59KD', '_blank')
                        }
                    >
                        See More
                    </button>
                </div>
            </div>

            {/* Footer Section */}
            <section className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerText}>
                        <h2 className={styles.footerHeading}>
                            Request Your Physical Copy Today!
                        </h2>
                        <p className={styles.footerDescription}>
                            Ready to take the next step? Fill out our form to have your personalized guide delivered to your doorstep. Start your journey with a tangible resource designed to help you achieve lasting results.
                        </p>
                    </div>
                    <div className={styles.footerButtonContainer}>
                        {/* <button className={styles.contactButton}>Get My Copy</button> */}

                        <button
                            className={styles.contactButton}
                            onClick={() =>
                                window.open('https://docs.google.com/forms/d/1y0tJCStnCSjCfZhYef4RqlGuD4if5EUylZz65fMghJs/edit?usp=drivesdk', '_blank')
                            }
                        >
                            Get My Copy
                        </button>

                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPost;