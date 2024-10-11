import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';  // Use Signup-specific CSS

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add signup logic here
    navigate('/login');
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupCard}>  {/* Modern card design for the form */}
        <form className={styles.signupForm} onSubmit={handleSignup}>
          <h2 className={styles.formTitle}>Create an Account</h2>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>
          <button type="submit" className={styles.submitButton}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
