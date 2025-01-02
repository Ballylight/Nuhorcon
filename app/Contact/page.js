// import React from "react";
// import styles from "./contact.module.css";

// function Contact() {
//   return (
//     <div className={styles.contactPage}>
//       {/* Header Section */}
//       <div className={styles.header}>
//         <h1 className={styles.title}>Contact Us</h1>
//         <p className={styles.description}>
//           We value your feedback, questions, and concerns at Nutritionist. Our
//           dedicated team is here to assist you and provide the support you need
//           on your nutritional journey. Please don't hesitate to reach out to us
//           using any of the following contact methods.
//         </p>
//       </div>

//       {/* Contact Info Section */}
//       <div className={styles.contactInfo}>
//         <div className={styles.infoCard}>
//           <span className={styles.icon}>📧</span>
//           <p>support@nutritionist.com</p>
//         </div>
//         <div className={styles.infoCard}>
//           <span className={styles.icon}>📞</span>
//           <p>+91 00000 00000</p>
//         </div>
//         <div className={styles.infoCard}>
//           <span className={styles.icon}>📍</span>
//           <p>Some Where in the World</p>
//         </div>
//       </div>

//       {/* Form and Map Section */}
//       <div className={styles.formSection}>
//         <form className={styles.contactForm}>
//           <div className={styles.inputGroup}>
//             <label htmlFor="name">Full Name</label>
//             <input type="text" id="name" placeholder="Enter your Name" />
//           </div>
//           <div className={styles.inputGroup}>
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" placeholder="Enter your Email" />
//           </div>
//           <div className={styles.inputGroup}>
//             <label htmlFor="phone">Phone Number</label>
//             <input type="text" id="phone" placeholder="Enter your Number" />
//           </div>
//           <div className={styles.inputGroup}>
//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               rows="4"
//               placeholder="Enter your Message"
//             ></textarea>
//             <p className={styles.charLimit}>Max 250 Chars</p>
//           </div>
//           <button type="submit" className={styles.submitButton}>
//             Send Message
//           </button>
//         </form>
//         <div className={styles.map}>
//           {/* Placeholder for Map */}
//           <div className={styles.mapPlaceholder}>Map Placeholder</div>
//         </div>
//       </div>

//       {/* Social Media Icons */}
//       <div className={styles.socialMedia}>
//         <span className={styles.socialIcon}>🌐</span>
//         <span className={styles.socialIcon}>🐦</span>
//         <span className={styles.socialIcon}>🔗</span>
//       </div>
//     </div>
//   );
// }

// export default Contact;











import React from "react";
import styles from "./contact.module.css";
// import emailIcon from "../public/images/email.png";
// import phoneIcon from "../public/images/phone.png";
// import locationIcon from "../public/images/location.png";
// import facebookIcon from "../public/images/facebook.png";
// import twitterIcon from "../public/images/twitter.png";
// import linkedinIcon from "../public/images/linkedin.png";

function Contact() {
    return (
        <div className={styles.contactPage}>
            {/* Header and Contact Info Section */}
            <div className={styles.headerSection}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.description}>
                    We value your feedback, questions, and concerns at Nutritionist. Our
                    dedicated team is here to assist you and provide the support you need
                    on your nutritional journey. Please don't hesitate to reach out to us
                    using any of the following contact methods.
                </p>
                <div className={styles.contactInfo}>
                    {/* <div className={styles.infoCard}>
            <img src={emailIcon.src} alt="Email Icon" />
            <p>support@nutritionist.com</p>
          </div>
          <div className={styles.infoCard}>
            <img src={phoneIcon.src} alt="Phone Icon" />
            <p>+91 00000 00000</p>
          </div>
          <div className={styles.infoCard}>
            <img src={locationIcon.src} alt="Location Icon" />
            <p>Some Where in the World</p>
          </div> */}
                </div>
            </div>

            {/* Form, Map, and Social Media Section */}
            <div className={styles.formMapSection}>
                <form className={styles.contactForm}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="Enter your Name" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your Email" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" id="phone" placeholder="Enter your Number" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Enter your Message"
                        ></textarea>
                        <p className={styles.charLimit}>Max 250 Chars</p>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Send Message
                    </button>
                </form>
                <div className={styles.map}>
                    {/* Map Placeholder */}
                    <div className={styles.mapPlaceholder}>Map Placeholder</div>
                </div>
            </div>
            {/* <div className={styles.socialMedia}>
                <img src={facebookIcon.src} alt="Facebook Icon" />
                <img src={twitterIcon.src} alt="Twitter Icon" />
                <img src={linkedinIcon.src} alt="LinkedIn Icon" />
            </div> */}
        </div>
    );
}

export default Contact;

