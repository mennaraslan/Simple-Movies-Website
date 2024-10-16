import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link style={styles.navLink} to="/home">
            <FontAwesomeIcon icon={faHome} style={styles.icon} /> Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link style={styles.navLink} to="about">
            <FontAwesomeIcon icon={faInfoCircle} style={styles.icon} /> About
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link style={styles.navLink} to="profile">
            <FontAwesomeIcon icon={faUser} style={styles.icon} /> Profile
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;


const styles = {
  navbar: {
    backgroundColor: 'red',
    padding: '10px 20px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '8px',
  },
}