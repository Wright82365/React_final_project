import styles from "./Home.module.css";  // Importing Home CSS module
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password') {
      navigate('/');
    } else {
      alert('Incorrect credentials');
    }
  };

  return (
    <div className={styles.home}>  {/* Use the 'home' class for the background */}
      <div className={styles.login}> {/* Use the 'login' class for the layout */}
        <form className={styles["login-form"]} onSubmit={handleLogin}>
          <h2>Please Login</h2>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
