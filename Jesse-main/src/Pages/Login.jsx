import styles from "./Home.module.css";  // Importing  CSS module
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
    <div className={styles.login}> {/* Use the 'login' class from the CSS */}
    
      <form className={styles["login-form"]} onSubmit={handleLogin}> {/* Use 'login-form' from the CSS */}
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
  );
};

export default Login;
