'use client';
import React, { useState } from "react";
import styles from "./shop.module.css";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Diabet Herbal Mix",
      description:
        "This is recommended for use by anyone who wants to keep their sugar level in check. It has also been proven to act within a short time. It is packed with nutraceuticals that help relieve inflammatory and oxidant stress conditions",
      price: "₦2,000.00",
      salePrice: null,
      rating: 5,
      imgSrc: "/images/product1.svg",
      link: "https://wa.me/2348094503658" // Replace with actual link
    },
    {
      id: 2,
      name: "Diabet Tea",
      description:
        "Stabilizes blood sugar, boost all round wellness. This is Diabet Tea…Recommended as a nutritional supplement to stabilize blood sugar levels and boost all round wellness. A cup a day, will keep diseases away",
      price: "₦8,500.00",
      salePrice: null,
      rating: 5,
      imgSrc: "/images/product2.svg",
      link: "https://wa.me/2348094503658" // Replace with actual link
    },
    {
      id: 3,
      name: "Lipidolicks Burst",
      description:
        "Meet weightloss goals, improve digestion. Recommended for use in burning excess body and belly fat, achieving Weightloss goals and aids digestion. It is an effective antioxidant and keeps your energy levels up!",
      price: "₦2,000.00",
      salePrice: null,
      rating: 5,
      imgSrc: "/images/product3.svg",
      link: "https://wa.me/2348094503658" // Replace with actual link
    },
    {
      id: 4,
      name: "Papaya tea",
      description:
        "A blend of pawpaw leaves and unripe fruit. A powerful Antioxidant blend of Pawpaw leaves and unripe fruit This is Papaya Tea…Recommended as a powerful Antioxidant nutraceutical blend for relieving stress conditions and anemia.",
      price: "₦8,500.00",
      salePrice: null,
      rating: 5,
      imgSrc: "/images/product4.svg",
      link: "https://wa.me/2348094503658" // Replace with actual link
    },
    {
      id: 5,
      name: "The Dark Knight",
      description:
        "An intriguing story that promises suspense, action, and unforgettable characters. The Dark Knight invites readers into a world of mystery and adventure, where the line between hero and villain blurs. Perfect for fans of gripping tales with depth and intensity, this book will leave you wanting more.",
      price: "$14.99",
      salePrice: null,
      rating: 5,
      imgSrc: "/images/product5.svg",
      link: "https://www.amazon.com/dp/B0C9S7Q3VM" // Replace with actual link
    },
    {
      id: 6,
      name: "Weight loss Secrets",
      description:
        "Discover the tips and strategies you need to achieve your health and fitness goals. Weight Loss Secrets offers practical advice, motivation, and insights to help you on your journey to a healthier, happier you. Perfect for anyone looking to unlock the keys to sustainable weight loss and lasting results!",
      price: "$5.00",
      salePrice: null,
      rating: 5,
      imgSrc: "/images/product6.svg",
      link: "https://www.amazon.com/dp/B089P4XL46/ref=cm_sw_r_awdo_ZQZPH8TZ9HTK3AWM59KD" // Replace with actual link
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleDotClick = (page) => {
    setCurrentPage(page);
  };

  const displayedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className={styles.shopSection}>
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>
          Shop Our Herbal Remedies and Wellness Products
        </h1>
        <p className={styles.headerDescription}>
          Discover a range of natural herbal drinks and wellness products
          designed to support your health goals. From weight loss solutions to
          immune-boosting formulas, each product is crafted with care using only
          the finest natural ingredients. Start your journey to better health
          today by exploring our collection and find the perfect fit for your
          wellness routine.
        </p>
      </div>

      <div className={styles.productsSection}>
        <p className={styles.resultsText}>
          Showing {displayedProducts.length} of {products.length} results
        </p>
        <div className={styles.productList}>
          {displayedProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                {product.salePrice && (
                  <span className={styles.saleBadge}>SALE</span>
                )}
                <img src={product.imgSrc} alt={product.name} />
              </div>
              <div className={styles.productDetails}>
                <h3>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.priceSection}>
                  {product.salePrice ? (
                    <>
                      <span className={styles.salePrice}>{product.salePrice}</span>
                      <span className={styles.originalPrice}>{product.price}</span>
                    </>
                  ) : (
                    <span className={styles.regularPrice}>{product.price}</span>
                  )}
                </div>
                <div className={styles.rating}>
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </div>
                <button
                  className={styles.addToCartBtn}
                  onClick={() => window.open(product.link, "_blank")}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.navigationContainer}>
        <button
          className={styles.navButton}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        <div className={styles.dotsContainer}>
          {[...Array(totalPages)].map((_, index) => (
            <div
              key={index}
              className={
                currentPage === index + 1
                  ? `${styles.dot} ${styles.activeDot}`
                  : styles.dot
              }
              onClick={() => handleDotClick(index + 1)}
            ></div>
          ))}
        </div>

        <button
          className={styles.navButton}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Shop;