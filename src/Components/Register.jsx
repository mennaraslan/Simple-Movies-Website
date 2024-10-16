import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';
import Login from './Login';
import { Link } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/login')
  }

  return (
    <div style={styles.loginContainer}>
      <h2 style={styles.header}>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={{ color: 'white' }}>Username</label>
          <input
            type="text"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={{ color: 'white' }}>Email</label>
          <input
            type="email"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={{ color: 'white' }}>Password</label>
          <input
            type="password"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={{ color: 'white' }}>Mobile Number</label>
          <input type="tel" pattern="[0-9]{11}" required style={styles.input}/>
        </div>
        <div style={styles.formGroup}>
          <label style={{ color: 'white' }}>Date of Birth</label>
          <input
            type="date"
            required
            style={styles.input}
          />
        </div>
        
        <button type="Register" style={styles.button}>
          Register
        </button>
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

export default Register;
