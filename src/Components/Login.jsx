import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';
import { Link } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUserData } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    setUserData({ username, password })
    navigate('/home')
  }

  return (
    <div style={styles.loginContainer}>
      <h2 style={styles.header}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={{ color: 'white' }}>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={{ color: 'white' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
        <p style={{textAlign: 'center',
    color: 'white'}}>Don't have an account</p>
        <Link style={{marginLeft:'100px'}} to="/register">
          Register here
        </Link>
      </form>
    </div>
  )
}

const styles = {
  loginContainer: {
    backgroundColor: 'black',
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #303030',
    borderRadius: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginTop: '150px',
  },
  header: {
    textAlign: 'center',
    color: 'white',
    fontSize: '2rem',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    borderRadius: '15px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}

export default Login;
