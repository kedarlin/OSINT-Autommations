import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userRole, setUserRole] = useState(''); // Added userRole state

  const handleRegister = async () => {
    if (email === '') {
      toast.error('Email is Required!');
      return;
    }
    if (password === '' || confirmPassword === '') {
      toast.error('Enter Password field!');
      return;
    }
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (!emailRegex.test(email)) {
      toast.error('Enter correct Email ID');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await storeUserData(user.uid);

      toast.success('Registered Successfully!');
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error.message);
      toast.error('Registration failed. Please try again.');
    }
  };
  const storeUserData = async (uid) => {
    const db = getFirestore();
    const userRef = collection(db, 'users');
    await addDoc(userRef, {
      uid,
      email,
      role: userRole,
    });
  };

  return (
    <div style={styles.view}>
      <ToastContainer />
      <h2 style={styles.text}>REGISTER</h2>
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

      <div style={styles.inputContainer}>
        <FontAwesomeIcon icon={faLock} style={styles.icon} />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <FontAwesomeIcon icon={faUser} style={styles.icon} />
        <input
          type="text"
          placeholder="User Role (e.g., SOC Level 1)"
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
          style={styles.input}
        />
      </div>
      <button style={styles.btn} onClick={handleRegister}>
        Register
      </button>
      <p style={styles.dont}>
        Already have an account?{' '}
        <span style={styles.loginText} onClick={() => navigate('/login')}>Login here</span>
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
  label: {
    marginLeft: '10px',
    color: 'gray',
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
    padding: '19px',
    margin: '10px',
    borderRadius: '20px',
    cursor: 'pointer',
  },
  loginText: {
    color: '#FF0000',
    marginTop: '20px',
    cursor: 'pointer',
  },
  dont: {
    color: 'white',
  },
};
export default Register;
