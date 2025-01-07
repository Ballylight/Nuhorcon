'use client';

import React, { useState } from "react";
import styles from './contact.module.css';

import EmailIcon from '../../public/images/email-icon.png';
import PhoneIcon from '../../public/images/phone-icon.png';
import MapIcon from '../../public/images/map-icon.png';
import FacebookIcon from '../../public/images/facebook-icon.png';
import InstagramIcon from '../../public/images/instagram-icon.png';
import LinkedinIcon from '../../public/images/linkedin-icon.png';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: ""
    });

    // Update inputs value
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Form Submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        const submissionData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            submissionData.append(key, value);
        });

        try {
            await fetch("https://formsubmit.co/543a9435e183029b4e4c3263321d6351", {
                method: "POST",
                body: submissionData
            });
            // Clear the form after successful submission
            setFormData({ name: "", number: "", email: "", message: "" });
            alert("Your message has been sent successfully!");
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("There was an error sending your message. Please try again.");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.headerContent}>
                <h1 className={styles.headerTitle}>Contact Us</h1>
                <p className={styles.headerDescription}>
                    We'd love to hear from you! Whether you have questions, feedback, or need assistance, the Nuhorcon team is here to help. Reach out to us today.                </p>
            </div>

            <div className={styles.contactMethods}>
                <div className={styles.contactCard}>
                    <img src={EmailIcon.src} alt="Email Icon" className={styles.icon} />
                    <p>nuhorco@yahoo.com</p>
                </div>
                <div className={styles.contactCard}>
                    <img src={PhoneIcon.src} alt="Phone Icon" className={styles.icon} />
                    <p>+2348094503658</p>
                </div>
                <div className={styles.contactCard}>
                    <img src={MapIcon.src} alt="Location Icon" className={styles.icon} />
                    <p>College of Medicine LASU</p>
                </div>
            </div>

            <div className={styles.formAndMap}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your Name"
                            className={styles.input}
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="tel"
                            name="number"
                            placeholder="Enter your Number"
                            className={styles.input}
                            value={formData.number}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        className={styles.input}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Enter your Message"
                        maxLength="10000"
                        className={styles.textarea}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>

                <div className={styles.mapContainer}>
                    <div className={styles.map}>
                        {/* Google Maps Placeholder */}
                        <iframe
                            title="Google Map Placeholder"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63424.35175194384!2d3.3523004872215187!3d6.518900540052374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c33c365ab61%3A0xd7ed8c11016d4e57!2sLagos%20State%20University%20College%20of%20Medicine%2C!5e0!3m2!1sen!2sng!4v1736105443078!5m2!1sen!2sng"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    <div className={styles.socialIcons}>
                        <a href="https://www.facebook.com/share/p/1CrWDiJe5Y/" target="_blank" rel="noopener noreferrer">
                            <img src={FacebookIcon.src} alt="Facebook" className={styles.socialIcon} />
                        </a>
                        <a href="https://www.instagram.com/pngfitfam/profilecard/?igsh=czUxdmZiejVveGZ3" target="_blank" rel="noopener noreferrer">
                            <img src={InstagramIcon.src} alt="Instagram" className={styles.socialIcon} />
                        </a>
                        <a href="https://www.linkedin.com/in/dr-ngozi-awa-imaga/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedinIcon.src} alt="LinkedIn" className={styles.socialIcon} />
                        </a>
                    </div>



                </div>
            </div>
        </div>
    );
}
