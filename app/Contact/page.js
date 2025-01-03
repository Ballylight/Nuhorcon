// import React from 'react';
// import styles from './contact.module.css';

// const ContactPage = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Contact Us</h1>
//       <p className={styles.paragraph}>
//         We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods.
//       </p>

//       <div className={styles.contactInfo}>
//         <div className={styles.infoItem}>
//           <img src="/images/emailicon.png" alt="Email Icon" className={styles.icon} />
//           <span>support@nutritionist.com</span>
//         </div>
//         <div className={styles.infoItem}>
//           <img src="/images/phoneicon.png" alt="Phone Icon" className={styles.icon} />
//           <span>+91 00000 00000</span>
//         </div>
//         <div className={styles.infoItem}>
//           <img src="/images/mapicon.png" alt="Map Icon" className={styles.icon} />
//           <span>Some Where in the World</span>
//         </div>
//       </div>

//       <form className={styles.form}>
//         <div className={styles.formGroup}>
//           <label htmlFor="fullName" className={styles.label}>Full Name</label>
//           <input
//             type="text"
//             id="fullName"
//             placeholder="Enter your Name"
//             className={styles.input}
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="email" className={styles.label}>Email</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter your Email"
//             className={styles.input}
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="phone" className={styles.label}>Phone Number</label>
//           <input
//             type="tel"
//             id="phone"
//             placeholder="Enter your Number"
//             className={styles.input}
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="message" className={styles.label}>Message</label>
//           <textarea
//             id="message"
//             placeholder="Enter your Message"
//             className={styles.textarea}
//             rows="5"
//             maxLength="250"
//           />
//           <span className={styles.charLimit}>Max 250 Chars</span>
//         </div>

//         <button type="submit" className={styles.submitButton}>Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default ContactPage;













// page.js
import styles from './contact.module.css';

import EmailIcon from '../../public/images/email-icon.png';
import PhoneIcon from '../../public/images/phone-icon.png';
import MapIcon from '../../public/images/map-icon.png';


export default function ContactPage() {
    return (
        <div className={styles.container}>

            <div className={styles.headerContent}>
                <h1 className={styles.headerTitle}>Our Blogs</h1>
                <p className={styles.headerDescription}>
                    Dive into a rich collection of insightful articles curated by Dr. Ngozi Awa Imaga (PhD). Discover practical tips on healthy eating, weight management, and holistic wellness, designed to help you live a healthier, balanced life.
                </p>
            </div>

            {/* <div className={styles.contactMethods}>
                <div className={styles.contactCard}>
                    <span className="icon-email"></span>
                    <p>support@nutritionist.com</p>
                </div>
                <div className={styles.contactCard}>
                    <span className="icon-phone"></span>
                    <p>+91 00000 00000</p>
                </div>
                <div className={styles.contactCard}>
                    <span className="icon-location"></span>
                    <p>Some Where in the World</p>
                </div>
            </div> */}

            <div className={styles.contactMethods}>
                <div className={styles.contactCard}>
                    <img src={EmailIcon.src} alt="Email Icon" className={styles.icon} />
                    <p>support@nutritionist.com</p>
                </div>
                <div className={styles.contactCard}>
                    <img src={PhoneIcon.src} alt="Phone Icon" className={styles.icon} />
                    <p>+91 00000 00000</p>
                </div>
                <div className={styles.contactCard}>
                    <img src={MapIcon.src} alt="Location Icon" className={styles.icon} />
                    <p>Some Where in the World</p>
                </div>
            </div>




            <div className={styles.formAndMap}>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="Enter your Name" className={styles.input} />
                        <input type="email" placeholder="Enter your Email" className={styles.input} />
                    </div>
                    <input type="tel" placeholder="Enter your Number" className={styles.input} />
                    <textarea placeholder="Enter your Message" maxLength="250" className={styles.textarea}></textarea>
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>

                <div className={styles.map}>
                    <div className={styles.mapPlaceholder}></div>
                    <div className={styles.socialIcons}>
                        <span className="icon-facebook"></span>
                        <span className="icon-twitter"></span>
                        <span className="icon-linkedin"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
