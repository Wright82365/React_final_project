// src/pages/Services.jsx
import React from 'react';
import styles from './Home.module.css'; // Reuse the CSS from Home.module.css

const Services = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Our Services</h1>
        <p className={styles.heroText}>
          We offer a wide range of healthcare services designed to promote health and well-being. Whether you're looking for online consultations, wellness programs, or innovative health solutions, we have something tailored for you.
        </p>
        <ul className={styles.servicesList}>
          <li>Online Medical Consultations</li>
          <li>Personalized Wellness Programs</li>
          <li>Health Monitoring Solutions</li>
          <li>Fitness and Nutritional Guidance</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;