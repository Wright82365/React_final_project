// // src/pages/Home.js
// import React from 'react';
// import styles from './Home.module.css'; // Use the CSS module

// const Home = () => {
//   return (
//     <div className={styles.home}>
//       <div className={styles.hero}>
//         <h1 className={styles.heroTitle}>Welcome to Health and Wellness</h1>
//         <p className={styles.heroText}>
//           Welcome to Living Wright Healthcare Services where our mission is to enhance the well-being of our community by providing top-tier online healthcare services and innovative health solutions. Our dedicated team of healthcare professionals and experts is committed to delivering personalized care and exceptional service to every individual we serve.
//         </p>
//         <a href="#services" className={styles.ctaButton}>Explore Services</a>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // Use the CSS module

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Welcome to Health and Wellness</h1>
        <p className={styles.heroText}>
          Welcome to Living Wright Healthcare Services where our mission is to enhance the well-being of our community by providing top-tier online healthcare services and innovative health solutions.
        </p>
        <Link to="/services" className={styles.ctaButton}>Explore Services</Link>
      </div>
    </div>
  );
};

export default Home;