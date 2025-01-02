'use client';
import styles from './blogpost.module.css';

const BlogPost = () => {
    return (
        <>
            {/* Blog Post Container */}
            <div className={styles.container}>
                {/* Blog Image */}
                <div className={styles.imageWrapper}>
                    <img
                        src="/images/sample blog image.svg" // Replace with your actual image path
                        alt="Wellness Insights"
                        className={styles.blogImage}
                    />
                    <h2 className={styles.imageText}>
                        Health & Wellness
                    </h2>
                </div>

                {/* Blog Title */}
                <h1 className={styles.blogTitle}>
                    Managing Blood Sugar Levels Naturally: Introducing Diabet Herbal Mix
                </h1>

                {/* Blog Content */}
                <p className={styles.blogContent}>
                    In today’s fast-paced world, maintaining stable blood sugar levels can be a challenge.
                    With processed foods and sedentary lifestyles on the rise, health conditions like diabetes and
                    prediabetes are becoming more common. While medications are often necessary, incorporating
                    natural remedies into your routine can make a significant difference.
                </p>
                <p className={styles.blogContent}>
                    PNGFitFam’s Diabet Herbal Mix is a game-changer for those seeking a holistic approach to blood sugar management.
                    This unique blend is carefully formulated to not only stabilize blood sugar levels but also combat inflammation
                    and oxidative stress. By leveraging the power of natural nutraceuticals, Diabet Herbal Mix offers a safe, effective,
                    and convenient way to support your health.
                </p>
                <p className={styles.blogContent}>
                    What makes it special?
                    <br />
                    1. Fast-acting formula: See results quickly as the blend works with your body’s natural systems.
                    <br />
                    2. Multi-functional benefits: Beyond managing blood sugar, it promotes overall wellness by reducing inflammation
                    and oxidative damage.
                    <br />
                    3. 100% natural ingredients: Enjoy peace of mind knowing it’s free of harmful chemicals.
                </p>
                <p className={styles.blogContent}>
                    Whether you’re managing an existing condition or taking preventive steps, Diabet Herbal Mix is your trusted ally
                    in wellness. Start your journey to healthier blood sugar levels today—because your health deserves nothing less.
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









