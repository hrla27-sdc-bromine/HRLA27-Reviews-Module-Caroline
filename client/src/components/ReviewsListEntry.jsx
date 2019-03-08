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

  let date = input.slice(4, 15);
  // console.log(date);
  // let monthNumber = date.slice(5, 7).replace(/^0+/, '') - 1;
  // let year = date.slice(0, 4);
  // let day = date.slice(8, 11).replace(/^0+/, '');
  // let month = monthNames[monthNumber];
  // console.log('month',monthNumber);
  // return `${month} ${day}, ${year}`;
  return `${date}`;
};

const ReviewsListEntry = props => {
  let { starRating, date, header, text, username, yes, no } = props.review;
  console.log(starRating);
  return (
    <div>
      <br />
      <br />
      <div className={styles.feedTop}>
        <StarRatings
          starRating={5}
          starDimension="14px"
          starSpacing="0.1px"
          starRatedColor="red"
        />
        <div className={styles.date}>{dateConversion(date)}</div>
      </div>
      <br />
      <div className={styles.header}>{header}</div>
      <br />
      <div className={styles.description}>{text}</div>
      <br />
      <div className={styles.userContainer}>
        <div className={styles.user}>{username}</div>
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
          <div className={styles.noCount}>({no})</div>
        </div>
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default ReviewsListEntry;
