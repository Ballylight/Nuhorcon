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
                        src="/images/weight-loss.svg" // Replace with your actual image path
                        alt="Wellness Insights"
                        className={styles.blogImage}
                    />
                    <h2 className={styles.imageText}>
                        Weight Loss                    </h2>
                </div>

                {/* Blog Title */}
                <h1 className={styles.blogTitle}>Achieving Weight Loss Goals with Lipidolicks Burst</h1>

                {/* Blog Content */}
                <p className={styles.blogContent}>
                    Weight loss can be a tough journey, especially when juggling a busy lifestyle. Many struggle with low energy, slow metabolism, or stubborn belly fat that refuses to go away. PNGFitFam’s Lipidolicks Burst is here to make your weight loss journey easier and more rewarding.

                    This revolutionary nutraceutical blend is designed to target excess body and belly fat while giving your metabolism the boost it needs. Whether you’re hitting the gym or just trying to make better dietary choices, Lipidolicks Burst helps you get faster results without compromising your energy levels.

                    Key benefits of Lipidolicks Burst:

                    <br />1. Fat burning: Specifically targets stubborn fat, helping you achieve a leaner physique.
                    <br />2. Boosts energy: Stay active and vibrant throughout your day, even while shedding weight.
                    <br />3. Improves digestion: Supports a healthy gut, which is key to effective weight management.
                    For those looking to combine weight loss with overall wellness, Lipidolicks Burst is the perfect choice. Pair it with a balanced diet and regular exercise, and watch your transformation unfold.
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
















// 'use client';
// import styles from './blogpost.module.css';

// const BlogPost = ({ title, image, content }) => {
//     return (
//         <div className={styles.container}>
//             {/* Blog Image Section */}
//             <div className={styles.imageWrapper}>
//                 <img
//                     src={image} // Dynamically uses the provided image path
//                     alt={title}
//                     className={styles.blogImage}
//                 />
//                 <h2 className={styles.imageText}>
//                     {title} {/* Display the blog title over the image */}
//                 </h2>
//             </div>

//             {/* Blog Title */}
//             <h1 className={styles.blogTitle}>{title}</h1>

//             {/* Blog Content */}
//             {content.map((paragraph, index) => (
//                 <p key={index} className={styles.blogContent}>
//                     {paragraph}
//                 </p>
//             ))}

//             {/* Additional Text */}
//             <p className={styles.blogContent}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
//                 hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
//                 ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
//                 Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
//                 nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus et sodales
//                 sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
//                 iaculis arcu eros, eget tempus orci facilisis id.
//             </p>
//             <p className={styles.blogContent}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
//                 hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
//                 ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
//                 Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
//                 nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus et sodales
//                 sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
//                 iaculis arcu eros, eget tempus orci facilisis id.
//             </p>
//         </div>
//     );
// };

// export default BlogPost;

