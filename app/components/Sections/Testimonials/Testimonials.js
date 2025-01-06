"use client"
import React, { useState } from 'react';
import styles from './testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jennifer Anderson',
      image: '/images/jennifer.svg',
      quoteImage: './images/quote-image-1.svg',
      text: "I can't thank Nutritionist enough for their personalized nutrition coaching. It completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
    },
    {
      name: 'Robert Johnson',
      image: '/images/jennifer.svg',
      quoteImage: './images/quote-image-1.svg',
      text: 'Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!',
    },
    {
      name: 'Emily Davis',
      image: '/images/jennifer.svg',
      quoteImage: './images/quote-image-1.svg',
      text: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
    },
    {
      name: 'John Doe',
      image: '/images/jennifer.svg',
      quoteImage: './images/quote-image-1.svg',
      text: "I can't imagine my journey without the help of Nutritionist. The tailored advice helped me build a sustainable and healthy lifestyle.",
    },
    {
      name: 'Sarah Lee',
      image: '/images/jennifer.svg',
      quoteImage: './images/quote-image-1.svg',
      text: "Nutritionist really helped me understand what works for my body. I'm feeling stronger and healthier than ever before!",
    },
    {
      name: 'Sarah Lee',
      image: '/images/jennifer.svg',
      quoteImage: './images/quote-image-1.svg',
      text: "Nutritionist really helped me understand what works for my body. I'm feeling stronger and healthier than ever before!",
    },
    // Add more testimonials here if needed
  ];

  const [currentPage, setCurrentPage] = useState(0);

  // Number of items to show per page
  const itemsPerPage = 3;

  // Calculate total pages
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Get the current testimonials to display
  const currentTestimonials = testimonials.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // Handle the navigation
  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.heading}>What Our Clients Say</h2>
      <p className={styles.subheading}>
        Real success stories from our clients' journeys to better health.
      </p>
      <div className={styles.testimonialContainer}>
        {currentTestimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <p className={styles.quote}>
              <img src={testimonial.quoteImage} alt="quote" className={styles.quoteIcon} />
              {testimonial.text}
            </p>
            <div className={styles.clientInfo}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className={styles.clientImage}
              />
              <p className={styles.clientName}>{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots (pagination indicators) */}
      {/* <div className={styles.dotsContainer}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${currentPage === index ? styles.activeDot : ''}`}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div> */}

      {/* Navigation buttons */}
      {/* <div className={styles.navigation}>
        <button className={styles.navButton} onClick={handlePrev}>&lt;</button>
        <button className={styles.navButton} onClick={handleNext}>&gt;</button>
      </div> */}

      {/* Dots and Navigation buttons */}
      <div className={styles.navigationContainer}>
        {/* Left Arrow */}
        <button className={styles.navButton} onClick={handlePrev}>&lt;</button>

        {/* Dots (pagination indicators) */}
        <div className={styles.dotsContainer}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${currentPage === index ? styles.activeDot : ''}`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button className={styles.navButton} onClick={handleNext}>&gt;</button>
      </div>


    </section>
  );
};

export default Testimonials;
