import React, { Component } from 'react';
import styles from '../styles/filters.css';

const highlight = {
  color: 'black',
  border: 'solid 0.5px black',
  borderBottomWidth: '3px'
};

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleRelevant: true,
      toggleHelpful: false,
      toggleNewest: false
    };
  }

  handleRelevantClick() {
    this.setState({
      toggleRelevant: true,
      toggleHelpful: false,
      toggleNewest: false
    });
  }

  handleHelpfulClick() {
    this.setState({
      toggleRelevant: false,
      toggleHelpful: true,
      toggleNewest: false
    });
  }

  handleNewestClick() {
    this.setState({
      toggleRelevant: false,
      toggleHelpful: false,
      toggleNewest: true
    });
  }

  render() {
    let { toggleRelevant, toggleHelpful, toggleNewest } = this.state;
    return (
      <div>
        <div className={styles.filterButtons}>
          <div
            onClick={() => {
              this.handleRelevantClick();
              this.props.filterByRelevant();
            }}
            className={styles.relevant}
            style={toggleRelevant ? highlight : null}
          >
            RELEVANT
          </div>
          <div
            onClick={() => {
              this.handleHelpfulClick();
              this.props.filterByHelpful();
            }}
            className={styles.helpful}
            style={toggleHelpful ? highlight : null}
          >
            HELPFUL
          </div>
          <div
            onClick={() => {
              this.handleNewestClick();
              this.props.filterByNewest();
            }}
            className={styles.newest}
            style={toggleNewest ? highlight : null}
          >
            NEWEST
          </div>
        </div>
      </div>
    );
  }
}
export default Filters;
