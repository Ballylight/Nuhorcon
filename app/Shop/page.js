'use client';
import React, { useState } from "react";
import styles from "./shop.module.css";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Blocks shape-sorting Toy",
      description:
        "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
      price: "$39.00",
      salePrice: null,
      rating: 5,
      imgSrc: "/images/product1.svg",
    },
    {
      id: 2,
      name: "Carrot Harvest Wooden Toy",
      description:
        "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
      price: "$39.00",
      salePrice: "$29.00",
      rating: 5,
      imgSrc: "/images/product1.svg",
    },
    {
      id: 3,
      name: "Talking Flash Cards Learning Toys",
      description:
        "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
      price: "$39.00",
      salePrice: null,
      rating: 5,
      imgSrc: "/images/product1.svg",
    },
    {
      id: 4,
      name: "Blocks shape-sorting Toy",
      description:
        "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus.",
      price: "$39.00",
      salePrice: "$29.00",
      rating: 2,
      imgSrc: "/images/product1.svg",
    },
    {
      id: 5,
      name: "Wooden sorting Toys",
      description:
        "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
      price: "$39.00",
      salePrice: null,
      rating: 5,
      imgSrc: "/images/product1.svg",
    },
    {
      id: 6,
      name: "Montessori Dinosaur Puzzle",
      description:
        "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
      price: "$39.00",
      salePrice: null,
      rating: 5,
      imgSrc: "/images/product1.svg",
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
                <button className={styles.addToCartBtn}>Add to cart</button>
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
        {/* <div className={styles.dotsContainer}>
          {[...Array(totalPages)].map((_, index) => (
            <div
              key={index}
              className={
                currentPage === index + 1
                  ? styles.activeDot
                  : styles.dot
              }
              onClick={() => handleDotClick(index + 1)}
            >
            </div>
          ))}
        </div> */}

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
