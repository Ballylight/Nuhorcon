
import React from 'react';
import styles from './blog.module.css';

function Blog() {
    const blogs = [
        {
            folder: '/Blogcontent1', // Path to the folder for this blog
            image: '/images/sample blog image.svg',
            authorImage: '/images/dr-ngozi-profile.svg',
            author: 'Prof. Ngozi Awa Imaga, PhD',
            date: '23 May 2023',
            readTime: '5 min read',
            category: 'Health & Wellness',
            title: 'Managing Blood Sugar Levels Naturally: Introducing Diabet Herbal Mix',
            description:
                'Discover how Managing Blood Sugar Levels Naturally With Diabet Herbal Mix.',
        },
        {
            folder: '/Blogcontent2', // Path to the folder for this blog
            image: '/images/papaya.svg',
            authorImage: '/images/dr-ngozi-profile.svg',
            author: 'Prof. Ngozi Awa Imaga, PhD',
            date: '23 May 2023',
            readTime: '5 min read',
            category: 'Nutrition',
            title: 'The Power of Antioxidants: Benefits of Papaya Tea',
            description:
                'Learn about the power of Antioxidants and improve your overall well-being.',
        },
        {
            folder: '/Blogcontent3', // Path to the folder for this blog
            image: '/images/weight-loss.svg',
            authorImage: '/images/dr-ngozi-profile.svg',
            author: 'Prof. Ngozi Awa Imaga, PhD',
            date: '23 May 2023',
            readTime: '5 min read',
            category: 'Weight Loss',
            title: 'Achieving Weight Loss Goals with Lipidolicks Burst',
            description:
                'Discover how Lipidolicks Burst can help you achieve your weight loss goals effectively. ',
        },
        {
            folder: '/Blogcontent4', // Path to the folder for this blog
            image: '/images/tea.svg',
            authorImage: '/images/dr-ngozi-profile.svg',
            author: 'Prof. Ngozi Awa Imaga, PhD',
            date: '23 May 2023',
            readTime: '5 min read',
            category: ' Health & Wellness',
            title: 'Why Diabet Tea Supplements Are Essential for Wellness',
            description:
                'Explore the essential role that Diabet Tea supplements play in promoting overall wellness. ',
        },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Our Blogs</h1>
            <p className={styles.description}>
                Dive into a rich collection of insightful articles curated by Dr. Ngozi Awa Imaga (PhD). Discover practical tips on healthy eating, weight management, and holistic wellness, designed to help you live a healthier, balanced life.
            </p>
            <div className={styles.blogGrid}>
                {blogs.map((blog, index) => (
                    <div key={index} className={styles.blogCard}>
                        <img src={blog.image} alt={blog.title} className={styles.blogImage} />
                        <div className={styles.blogInfo}>
                            <div className={styles.authorInfo}>
                                <img
                                    src={blog.authorImage}
                                    alt={blog.author}
                                    className={styles.authorImage}
                                />
                                <div>
                                    <p className={styles.authorName}>{blog.author}</p>
                                    <p className={styles.metaInfo}>
                                        {blog.date} • {blog.readTime}
                                    </p>
                                </div>
                            </div>
                            <p className={styles.blogCategory}>{blog.category}</p>
                            <h2 className={styles.blogTitle}>{blog.title}</h2>
                            <p className={styles.blogDescription}>{blog.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
