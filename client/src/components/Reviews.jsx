import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';

const Reviews = props => {
  return (
    <div>
      {props.reviews.map((review, index) => (
        <ReviewsListEntry review={review} key={index} />
      ))}
    </div>
  );
};

export default Reviews;
