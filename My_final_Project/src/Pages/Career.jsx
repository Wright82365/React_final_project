
import styles from "./Home.module.css"

const Career = () => {
  return (
    <div className={styles.main}>
      <section className={styles.careerSection}>
        <div className={styles.careerHeader}>
          <h1>Health and Wellness Careers</h1>
        </div>
        <div className={styles.careerContent}>
          <img
            src="https://th.bing.com/th?id=OIP.SETvXkcSgYhO3E6qY-QZpwHaGk&w=265&h=235&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="Career Image"
          />
          <h2>No current vacancies</h2>
          <p>
            We currently have no job openings, but we are always looking for passionate people to join our mission of promoting health and wellness. Please check back frequently for future opportunities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Career;
