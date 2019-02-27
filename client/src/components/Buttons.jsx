import React from 'react';
import styles from '../styles/buttons.css';

const Buttons = props => {
  return (
    <div className={styles.container}>
      <div
        onClick={() => props.loadMoreReviews()}
        className={styles.loadContainer}
      >
        <div className={styles.load}>LOAD MORE</div>
        <div className={styles.arrow}>&#10230;</div>
      </div>
      <div className={styles.container2}>
        <div className={styles.write}>WRITE A REVIEW &#10230;</div>
      </div>
    </div>
  );
};

export default Buttons;
