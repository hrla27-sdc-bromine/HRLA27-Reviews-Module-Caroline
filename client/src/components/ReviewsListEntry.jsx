import React from 'react';
import StarRatings from 'react-star-ratings';
import styles from '../styles/reviewListEntry.css';

let dateConversion = input => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  let date = input.slice(0, 10);
  let monthNumber = date.slice(5, 7).replace(/^0+/, '') - 1;
  let year = date.slice(0, 4);
  let day = date.slice(8, 11).replace(/^0+/, '');
  let month = monthNames[monthNumber];
  return `${month} ${day}, ${year}`;
};

const ReviewsListEntry = props => {
  let { rating, date, header, description, user, yes, nope } = props.review;

  return (
    <div>
      <br />
      <br />
      <div className={styles.feedTop}>
        <StarRatings
          rating={rating}
          starDimension="14px"
          starSpacing="0.1px"
          starRatedColor="black"
        />
        <div className={styles.date}>{dateConversion(date)}</div>
      </div>
      <br />
      <div className={styles.header}>{header}</div>
      <br />
      <div className={styles.description}>{description}</div>
      <br />
      <div className={styles.userContainer}>
        <div className={styles.user}>{user}</div>
        <div className={styles.verified}> - Verified Purchaser</div>
      </div>
      <br />
      <div className={styles.bottomEntry}>
        <div className={styles.reply}>Reply</div>
        <div className={styles.helpful}>
          <div className={styles.helpfulMsg}>Was this review helpful?</div>
          <div className={styles.yes}>Yes</div>
          <div className={styles.yesCount}>({yes})</div>
          <div className={styles.no}>No</div>
          <div className={styles.noCount}>({nope})</div>
        </div>
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default ReviewsListEntry;
