"use client"
// import React, { useState } from 'react';
// import styles from './testimonials.module.css';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: 'Jennifer Anderson',
//       image: '/images/jennifer.png',
//       text: "I can't thank Nutritionist enough for their personalized nutrition coaching. It completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
//     },
//     {
//       name: 'Robert Johnson',
//       image: '/images/robert.png',
//       text: 'Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!',
//     },
//     {
//       name: 'Emily Davis',
//       image: '/images/emily.png',
//       text: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
//     },
//     {
//       name: 'Chris Carter',
//       image: '/images/chris.png',
//       text: "Nutritionist helped me achieve my fitness goals. Their guidance and meal plans were a game-changer. Highly recommend their services!",
//     },
//     {
//       name: 'Samantha Green',
//       image: '/images/samantha.png',
//       text: "The personalized coaching I received from Nutritionist was exactly what I needed to lead a healthier life. I couldn't be happier with my results!",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <section className={styles.testimonialsSection}>
//       <h2 className={styles.heading}>What Our Clients Say</h2>
//       <p className={styles.subheading}>
//         Real success stories from our clients' journeys to better health.
//       </p>
//       <div className={styles.carousel}>
//         <div className={styles.testimonialWrapper}>
//           {testimonials
//             .slice(currentIndex, currentIndex + 3) // Display 3 testimonials at a time
//             .map((testimonial, index) => (
//               <div key={index} className={styles.testimonialCard}>
//                 <p className={styles.quote}>&ldquo;{testimonial.text}&rdquo;</p>
//                 <div className={styles.clientInfo}>
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className={styles.clientImage}
//                   />
//                   <p className={styles.clientName}>{testimonial.name}</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//         <button className={styles.leftNav} onClick={prevSlide}>
//           &lt;
//         </button>
//         <button className={styles.rightNav} onClick={nextSlide}>
//           &gt;
//         </button>
//         <div className={styles.paginationDots}>
//           {testimonials.map((_, index) => (
//             <span
//               key={index}
//               className={`${styles.dot} ${
//                 index === currentIndex ? styles.activeDot : ''
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
















// import React, { useState } from 'react';
// import styles from './testimonials.module.css';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: 'Jennifer Anderson',
//       image: '/images/testimonial-image-1.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-1.jpg', // Replace with your quote image path
//       text: "I can't thank Nutritionist enough for their personalized nutrition coaching. It completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
//     },
//     {
//       name: 'Robert Johnson',
//       image: '/images/testimonial-image-2.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-2.jpg', // Replace with your quote image path
//       text: 'Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!',
//     },
//     {
//       name: 'Emily Davis',
//       image: '/images/testimonial-image-3.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-3.jpg', // Replace with your quote image path
//       text: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
//     },
//     {
//       name: 'David Miller',
//       image: '/images/testimonial-image-4.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-4.jpg', // Replace with your quote image path
//       text: "Working with Nutritionist was a game-changer for me. I finally found a sustainable approach to weight loss, and I feel amazing. Highly recommend their services!",
//     },
//     {
//       name: 'Sarah Lee',
//       image: '/images/testimonial-image-5.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-5.jpg', // Replace with your quote image path
//       text: "Nutritionist helped me realize the importance of balanced eating. Their tailored plan made all the difference in my energy and overall health. Forever grateful!",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <section className={styles.testimonialsSection}>
//       <h2 className={styles.heading}>Our Testimonials</h2>
//       <p className={styles.subheading}>
//         Our satisfied clients share their success stories and experiences on their journey to better health and well-being.
//       </p>
//       <div className={styles.testimonialContainer}>
//         <div className={styles.testimonialCard}>
//           <img
//             src={testimonials[currentIndex].quoteImage}
//             alt="Quote icon"
//             className={styles.quoteImage}
//           />
//           <p className={styles.quoteText}>&ldquo;{testimonials[currentIndex].text}&rdquo;</p>
//           <div className={styles.clientInfo}>
//             <img
//               src={testimonials[currentIndex].image}
//               alt={testimonials[currentIndex].name}
//               className={styles.clientImage}
//             />
//             <p className={styles.clientName}>{testimonials[currentIndex].name}</p>
//           </div>
//         </div>
//       </div>
//       <div className={styles.navigation}>
//         <button onClick={prevTestimonial} className={styles.navButton}>&lt;</button>
//         <button onClick={nextTestimonial} className={styles.navButton}>&gt;</button>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;










// import React, { useState } from 'react';
// import styles from './testimonials.module.css';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: 'Jennifer Anderson',
//       image: '/images/testimonial-image-1.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-1.svg', // Replace with your quote image path
//       text: "I can't thank Nutritionist enough for their personalized nutrition coaching. It completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
//     },
//     {
//       name: 'Robert Johnson',
//       image: '/images/testimonial-image-2.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-2.jpg', // Replace with your quote image path
//       text: 'Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!',
//     },
//     {
//       name: 'Emily Davis',
//       image: '/images/testimonial-image-3.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-3.jpg', // Replace with your quote image path
//       text: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
//     },
//     {
//       name: 'David Miller',
//       image: '/images/testimonial-image-4.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-4.jpg', // Replace with your quote image path
//       text: "Working with Nutritionist was a game-changer for me. I finally found a sustainable approach to weight loss, and I feel amazing. Highly recommend their services!",
//     },
//     {
//       name: 'Sarah Lee',
//       image: '/images/testimonial-image-5.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-5.jpg', // Replace with your quote image path
//       text: "Nutritionist helped me realize the importance of balanced eating. Their tailored plan made all the difference in my energy and overall health. Forever grateful!",
//     },

//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <section className={styles.testimonialsSection}>
//       <h2 className={styles.heading}>Our Testimonials</h2>
//       <p className={styles.subheading}>
//         Our satisfied clients share their success stories and experiences on their journey to better health and well-being.
//       </p>
//       <div className={styles.testimonialContainer}>
//         {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
//           <div key={index} className={styles.testimonialCard}>
//             <img
//               src={testimonial.quoteImage}
//               alt="Quote icon"
//               className={styles.quoteImage}
//             />
//             <p className={styles.quoteText}>&ldquo;{testimonial.text}&rdquo;</p>
//             <div className={styles.clientInfo}>
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className={styles.clientImage}
//               />
//               <p className={styles.clientName}>{testimonial.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className={styles.navigation}>
//         <button onClick={prevTestimonial} className={styles.navButton}>&lt;</button>
//         <div className={styles.dots}>
//           {testimonials.map((_, index) => (
//             <span
//               key={index}
//               className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
//             ></span>
//           ))}
//         </div>
//         <button onClick={nextTestimonial} className={styles.navButton}>&gt;</button>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;









// import React, { useState } from 'react';
// import styles from './testimonials.module.css';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: 'Jennifer Anderson',
//       image: '/images/testimonial-image-1.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-1.jpg', // Replace with your quote image path
//       text: "I can't thank Nutritionist enough for their personalized nutrition coaching. It completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
//     },
//     {
//       name: 'Robert Johnson',
//       image: '/images/testimonial-image-2.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-2.jpg', // Replace with your quote image path
//       text: 'Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!',
//     },
//     {
//       name: 'Emily Davis',
//       image: '/images/testimonial-image-3.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-3.jpg', // Replace with your quote image path
//       text: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
//     },
//     {
//       name: 'David Miller',
//       image: '/images/testimonial-image-4.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-4.jpg', // Replace with your quote image path
//       text: "Working with Nutritionist was a game-changer for me. I finally found a sustainable approach to weight loss, and I feel amazing. Highly recommend their services!",
//     },
//     {
//       name: 'Sarah Lee',
//       image: '/images/testimonial-image-5.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-5.jpg', // Replace with your quote image path
//       text: "Nutritionist helped me realize the importance of balanced eating. Their tailored plan made all the difference in my energy and overall health. Forever grateful!",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => {
//       if (prevIndex + 3 < testimonials.length) {
//         return prevIndex + 3; // Show next set of 3 testimonials
//       }
//       return 0; // Loop back to the start if we reach the end
//     });
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => {
//       if (prevIndex - 3 >= 0) {
//         return prevIndex - 3; // Show previous set of 3 testimonials
//       }
//       return Math.floor(testimonials.length / 3) * 3; // Go to the last set if at the start
//     });
//   };

//   // Create an array to display 3 testimonials (adding empty cards if needed)
//   const currentTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
//   const remainingCards = 3 - currentTestimonials.length;
//   const fillerCards = new Array(remainingCards).fill(null); // Fill with empty cards if necessary

//   return (
//     <section className={styles.testimonialsSection}>
//       <h2 className={styles.heading}>Our Testimonials</h2>
//       <p className={styles.subheading}>
//         Our satisfied clients share their success stories and experiences on their journey to better health and well-being.
//       </p>
//       <div className={styles.testimonialContainer}>
//         {[...currentTestimonials, ...fillerCards].map((testimonial, index) => (
//           <div key={index} className={styles.testimonialCard}>
//             {testimonial ? (
//               <>
//                 <img
//                   src={testimonial.quoteImage}
//                   alt="Quote icon"
//                   className={styles.quoteImage}
//                 />
//                 <p className={styles.quoteText}>&ldquo;{testimonial.text}&rdquo;</p>
//                 <div className={styles.clientInfo}>
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className={styles.clientImage}
//                   />
//                   <p className={styles.clientName}>{testimonial.name}</p>
//                 </div>
//               </>
//             ) : (
//               <div className={styles.placeholderCard}></div> // Empty card placeholder
//             )}
//           </div>
//         ))}
//       </div>
//       <div className={styles.navigation}>
//         <button onClick={prevTestimonial} className={styles.navButton}>&lt;</button>
//         <div className={styles.dots}>
//           {testimonials.map((_, index) => (
//             <span
//               key={index}
//               className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
//             ></span>
//           ))}
//         </div>
//         <button onClick={nextTestimonial} className={styles.navButton}>&gt;</button>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;









// import React, { useState } from 'react';
// import styles from './testimonials.module.css';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: 'Jennifer Anderson',
//       image: '/images/testimonial-image-1.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-1.jpg', // Replace with your quote image path
//       text: "I can't thank Nutritionist enough for their personalized nutrition coaching. It completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
//     },
//     {
//       name: 'Robert Johnson',
//       image: '/images/testimonial-image-2.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-2.jpg', // Replace with your quote image path
//       text: 'Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!',
//     },
//     {
//       name: 'Emily Davis',
//       image: '/images/testimonial-image-3.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-3.jpg', // Replace with your quote image path
//       text: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
//     },
//     {
//       name: 'David Miller',
//       image: '/images/testimonial-image-4.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-4.jpg', // Replace with your quote image path
//       text: "Working with Nutritionist was a game-changer for me. I finally found a sustainable approach to weight loss, and I feel amazing. Highly recommend their services!",
//     },
//     {
//       name: 'Sarah Lee',
//       image: '/images/testimonial-image-5.jpg', // Replace with your image path
//       quoteImage: '/images/quote-image-5.jpg', // Replace with your quote image path
//       text: "Nutritionist helped me realize the importance of balanced eating. Their tailored plan made all the difference in my energy and overall health. Forever grateful!",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => {
//       // If there are more than 3 testimonials left, move to the next 3
//       if (prevIndex + 3 < testimonials.length) {
//         return prevIndex + 3;
//       }
//       // Otherwise, loop back to the start
//       return 0;
//     });
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => {
//       // If there are previous testimonials to go back to
//       if (prevIndex - 3 >= 0) {
//         return prevIndex - 3;
//       }
//       // Otherwise, go to the last page (end of the testimonials array)
//       return Math.floor(testimonials.length / 3) * 3;
//     });
//   };

//   // Get the current 3 testimonials for the carousel
//   const currentTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

//   return (
//     <section className={styles.testimonialsSection}>
//       <h2 className={styles.heading}>Our Testimonials</h2>
//       <p className={styles.subheading}>
//         Our satisfied clients share their success stories and experiences on their journey to better health and well-being.
//       </p>
//       <div className={styles.testimonialContainer}>
//         {currentTestimonials.map((testimonial, index) => (
//           <div key={index} className={styles.testimonialCard}>
//             <img
//               src={testimonial.quoteImage}
//               alt="Quote icon"
//               className={styles.quoteImage}
//             />
//             <p className={styles.quoteText}>&ldquo;{testimonial.text}&rdquo;</p>
//             <div className={styles.clientInfo}>
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className={styles.clientImage}
//               />
//               <p className={styles.clientName}>{testimonial.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className={styles.navigation}>
//         <button onClick={prevTestimonial} className={styles.navButton}>&lt;</button>
//         <div className={styles.dots}>
//           {testimonials.map((_, index) => (
//             <span
//               key={index}
//               className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
//             ></span>
//           ))}
//         </div>
//         <button onClick={nextTestimonial} className={styles.navButton}>&gt;</button>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;













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
