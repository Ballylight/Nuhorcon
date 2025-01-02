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
                        src="/images/sample blog image.svg" // Replace with your actual image path
                        alt="Wellness Insights"
                        className={styles.blogImage}
                    />
                    <h2 className={styles.imageText}>
                        Health and Wellness                    </h2>
                </div>

                {/* Blog Title */}
                <h1 className={styles.blogTitle}>Why Diabet Tea Supplements Are Essential for Wellness</h1>

                {/* Blog Content */}
                <p className={styles.blogContent}>
                    Good health doesn’t happen by accident; it’s the result of consistent, intentional choices. For those aiming to stabilize blood sugar levels naturally, Diabet Tea Supplements from PNGFitFam provide a simple yet powerful solution.

                    This tea is carefully crafted to deliver the perfect balance of nutrients that help regulate blood sugar and support overall wellness. Unlike many commercial teas, Diabet Tea is free of harmful additives and focuses solely on providing natural, health-boosting benefits.

                    Why make Diabet Tea part of your daily routine?

                    <br />1.  Blood sugar control: Helps maintain healthy levels and prevents dangerous spikes.
                    <br />2. Rich in nutrients: Loaded with ingredients that promote total body wellness.
                    <br />3. Convenient and effective: A simple cup each day is all it takes to make a positive impact.
                    Whether you’re managing diabetes or just looking to prevent it, Diabet Tea Supplements are an excellent addition to your health regimen. Brew a cup today and take one step closer to a healthier, happier you.
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









