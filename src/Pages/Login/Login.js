import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      // Validate inputs
      if (!email.trim() || !password.trim()) {
        toast.error('Please enter both email and password.');
        return;
      }

      if (password.length < 6) {
        toast.error('Password should be at least 6 characters.');
        return;
      }

      // Your login logic here...

      // Simulating login success
      toast.success('Login Successful!');

      // Redirect or handle the login success based on roles
      handleRedirectBasedOnRoles(['SOC Level 1']); // Replace with actual roles
    } catch (error) {
      console.error('Login failed', error.message);
      toast.error('Login failed. Check your credentials.');
      // Handle login error here
    }
  };

  // Function to handle redirects based on user roles
  const handleRedirectBasedOnRoles = (userRoles) => {
    // Implement logic to redirect users based on roles
    // For example, use React Router to navigate to different dashboards
    // This is just a placeholder; adjust it based on your actual routes
    // if (userRoles.includes('SOC Level 1')) {
    //   // Redirect to SOC Level 1 dashboard
    //   console.log('Redirecting to SOC Level 1 dashboard');
    // } else if (userRoles.includes('SOC Level 2')) {
    //   // Redirect to SOC Level 2 dashboard
    //   console.log('Redirecting to SOC Level 2 dashboard');
    // } else if (userRoles.includes('SOC Level 3')) {
    //   // Redirect to SOC Level 3 dashboard
    //   console.log('Redirecting to SOC Level 3 dashboard');
    // } else {
    //   // Handle other roles or redirect to a default dashboard
    //   console.log('Redirecting to the default dashboard');
    // }
    navigate('/dashboard');
  };

  return (
    <div style={styles.view}>
      <ToastContainer />
      <h2 style={styles.text}>LOGIN</h2>
      <div style={styles.inputContainer}>
        <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
  <FontAwesomeIcon icon={faLock} style={styles.icon} />
  <input
    type={showPassword ? 'text' : 'password'}
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    style={styles.input}
  />
  <FontAwesomeIcon
    icon={showPassword ? faEyeSlash : faEye}
    style={styles.icon}
    onClick={() => setShowPassword(!showPassword)}
  />
</div>
      <button style={styles.btn} onClick={handleLogin}>
        Login
      </button>
      <p style={styles.dont}>
        Don't have an account?{' '}
        <span style={styles.registerText} onClick={() => navigate('/register')}>Register here</span>
      </p>
    </div>
  );
};

const styles = {
  view: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '400px',
    backgroundColor: '#5500cb',
    borderRadius: '20px',
    elevation: '5',
    boxShadow: '2px 2px 5px black',
    padding: '20px',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '30px',
    marginBottom: '50px',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10px',
    width: '220px',
    backgroundColor: 'white',
    borderWidth: '0.5px',
    borderRadius: '5px',
    borderColor: 'gray',
    padding: '10px',
  },
  input: {
    flex: '1',
    marginLeft: '10px',
  },
  icon: {
    fontSize: '20px',
    color: 'black',
    cursor: 'pointer',
  },
  iconButton: {
    marginLeft: '10px',
  },
  btn: {
    backgroundColor: '#76cb00',
    color: 'white',
    fontWeight: 'bold',
    padding: '5px 17px',
    margin: '20px',
    borderRadius: '20px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#6a00fe',
    },
  },
  registerText: {
    color: '#cb5500',
    marginTop: '20px',
    cursor: 'pointer',
  },
  dont: {
    color: 'white'
  }
};

export default Login;
