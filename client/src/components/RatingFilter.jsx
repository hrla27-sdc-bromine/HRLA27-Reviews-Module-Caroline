import React from 'react';
import styles from '../styles/RatingFilter.css';

const RatingFilter = props => {
  return (
    <div>
      <div className={styles.showContainer}>
        <div className={styles.showingReviews}>Showing reviews:</div>
        <div className={styles.eachRating}>
          {props.array.map((number, index) => {
            return (
              <div className={styles.individual} key={index}>
                {number} STARS
              </div>
            );
          })}
        </div>
        <div className={styles.remove} onClick={() => props.emptyFilters()}>
          Remove all filters
        </div>
      </div>
      <br />
    </div>
  );
};

export default RatingFilter;
