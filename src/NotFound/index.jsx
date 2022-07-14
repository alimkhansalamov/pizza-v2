import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';
const NotFound = () => {
  return (
    <div className={styles.root}>
      <span className={styles.icon}>🧐</span>
      <i class="fa fa-frown-o" aria-hidden="true"></i>
      <h1>Sorry, this page does not exist!</h1>
      <br />
      <p>You can always return to homepage!</p>

      <Link to="/">
        <button>Return</button>
      </Link>
    </div>
  );
};

export default NotFound;
