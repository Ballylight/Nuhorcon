// import React from 'react';
// import styles from './blog.module.css';

// function Blog() {
//     const blogs = [
//         {
//             image: '/images/hydration.svg', 
//             author: 'Emily Johnson',
//             date: '23 May 2023',
//             readTime: '5 min read',
//             category: 'Weight Loss',
//             title: 'The Benefits of Hydration for Weight Loss',
//             description:
//                 'Discover how staying hydrated can support your weight loss goals and improve overall health.',
//         },
//         {
//             image: '/images/mindful-eating.svg', 
//             author: 'Sarah Thompson',
//             date: '23 May 2023',
//             readTime: '5 min read',
//             category: 'Mindful Eating',
//             title: 'Cultivating a Healthy Relationship with Food',
//             description:
//                 'Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.',
//         },
//         {
//             image: '/images/macronutrients.svg', 
//             author: 'Mark Wilson',
//             date: '23 May 2023',
//             readTime: '5 min read',
//             category: 'Understanding Macronutrients',
//             title: 'Carbohydrates, Proteins, and Fats',
//             description:
//                 'Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.',
//         },
//         {
//             image: '/images/snacks.svg', 
//             author: 'Emily Johnson',
//             date: '23 May 2023',
//             readTime: '5 min read',
//             category: 'Healthy Snacks on the Go',
//             title: 'Quick and Nutritious Options',
//             description:
//                 'Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.',
//         },
//     ];

//     return (
//         <div className={styles.container}>
//             <h1 className={styles.title}>Our Blogs</h1>
//             <p className={styles.description}>
//                 Dive into a rich collection of insightful articles curated by Dr. Ngozi Awa Imaga (PhD). Discover practical tips on healthy eating, weight management, and holistic wellness, designed to help you live a healthier, balanced life.
//             </p>
//             <div className={styles.blogGrid}>
//                 {blogs.map((blog, index) => (
//                     <div key={index} className={styles.blogCard}>
//                         <img src={blog.image} alt={blog.title} className={styles.blogImage} />
//                         <div className={styles.blogInfo}>
//                             <div className={styles.authorInfo}>
//                                 <p>{blog.author}</p>
//                                 <p>
//                                     {blog.date} • {blog.readTime}
//                                 </p>
//                             </div>
//                             <p className={styles.blogCategory}>{blog.category}</p>
//                             <h2 className={styles.blogTitle}>{blog.title}</h2>
//                             <p className={styles.blogDescription}>{blog.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Blog;













import React from 'react';
import styles from './blog.module.css';

function Blog() {
    const blogs = [
        {
            image: '/images/hydration.svg', // Replace with your image path
            authorImage: '/images/author-emily.svg', // Replace with your author image path
            author: 'Emily Johnson',
            date: '23 May 2023',
            readTime: '5 min read',
            category: 'Weight Loss',
            title: 'The Benefits of Hydration for Weight Loss',
            description:
                'Discover how staying hydrated can support your weight loss goals and improve overall health.',
        },
        {
            image: '/images/mindful-eating.svg', // Replace with your image path
            authorImage: '/images/author-emily.svg', // Replace with your author image path
            author: 'Sarah Thompson',
            date: '23 May 2023',
            readTime: '5 min read',
            category: 'Mindful Eating',
            title: 'Cultivating a Healthy Relationship with Food',
            description:
                'Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.',
        },
        {
            image: '/images/macronutrients.svg', // Replace with your image path
            authorImage: '/images/author-emily.svg', // Replace with your author image path
            author: 'Mark Wilson',
            date: '23 May 2023',
            readTime: '5 min read',
            category: 'Understanding Macronutrients',
            title: 'Carbohydrates, Proteins, and Fats',
            description:
                'Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.',
        },
        {
            image: '/images/snacks.svg', // Replace with your image path
            authorImage: '/images/author-emily.svg', // Replace with your author image path
            author: 'Emily Johnson',
            date: '23 May 2023',
            readTime: '5 min read',
            category: 'Healthy Snacks on the Go',
            title: 'Quick and Nutritious Options',
            description:
                'Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.',
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
