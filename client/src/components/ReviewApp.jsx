import React, { Component } from 'react';
import Reviews from './Reviews.jsx';
import Filters from './Filters.jsx';
import Feedback from './Feedback.jsx';
import Buttons from './Buttons.jsx';
import styles from '../styles/reviewApp.css';
import RatingBreakdown from './RatingBreakdown.jsx';
import axios from 'axios';

class ReviewApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      reviews: [],
      stats: [],
      reviewsOnDisplay: 2
    };
    this.filterByRelevant = this.filterByRelevant.bind(this);
    this.filterByHelpful = this.filterByHelpful.bind(this);
    this.filterByNewest = this.filterByNewest.bind(this);
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
    this.filterByStar = this.filterByStar.bind(this);
  }

  componentDidMount() {
    this.onStartUp();
  }

  onStartUp() {
    Promise.all([axios.get('/reviews'), axios.get('/reviews/stats')])
      .then(([data1, data2]) => {
        this.setState({
          id: data1.data[0].review_id,
          reviews: data1.data,
          stats: data2.data
        });
      })
      .catch(error => console.error(error));
  }

  /* FIlTER BY RELEVANT, HELPFUL, NEWEST */
  filterByRelevant() {
    let { id, reviewsOnDisplay } = this.state;
    axios
      .get(`/reviews/${id}/relevant/${reviewsOnDisplay}`)
      .then(({ data }) => this.setState({ reviews: data }))
      .catch(error => console.error(error));
  }

  filterByHelpful() {
    let { id, reviewsOnDisplay } = this.state;
    axios
      .get(`/reviews/${id}/helpful/${reviewsOnDisplay}`)
      .then(({ data }) => this.setState({ reviews: data }))
      .catch(error => console.error(error));
  }

  filterByNewest() {
    let { id, reviewsOnDisplay } = this.state;
    axios
      .get(`/reviews/${id}/newest/${reviewsOnDisplay}`)
      .then(({ data }) => this.setState({ reviews: data }))
      .catch(error => console.error(error));
  }

  /* FILTER BY STAR RATING */
  filterByStar(array) {
    let { id, reviewsOnDisplay } = this.state;
    axios
      .post(`/reviews/${id}/stars/${reviewsOnDisplay}`, { stars: array })
      .then(({ data }) => this.setState({ reviews: data }))
      .catch(error => console.error(error));
  }

  /* PAGINATION - LOAD MORE REVIEWS */
  loadMoreReviews() {
    let { id, reviews } = this.state;
    axios
      .get(`/reviews/${id}/more`)
      .then(({ data }) => this.setState({ reviews: [...reviews, ...data] }))
      .then(() =>
        this.setState({ reviewsOnDisplay: this.state.reviews.length })
      )
      .catch(error => console.error(error));
  }

  render() {
    let { id, stats, reviews } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.ratingsAndReviews}>RATINGS & REVIEWS</div>
        <div className={styles.row}>
          <div className={styles.leftContainer}>
            <RatingBreakdown
              id={id}
              stats={stats}
              filterByStar={this.filterByStar}
            />
            <Feedback reviews={stats} />
          </div>
          <div className={styles.placeholder} />
          <div className={styles.rightContainer}>
            <div className={styles.sortOn}>SORT ON</div>
            <Filters
              filterByHelpful={this.filterByHelpful}
              filterByRelevant={this.filterByRelevant}
              filterByNewest={this.filterByNewest}
            />
            <Reviews reviews={reviews} />
            <br />
            <br />
            <Buttons loadMoreReviews={this.loadMoreReviews} />
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewApp;
