import React, { Component } from 'react';
import _ from 'lodash';
import styles from '../styles/feedback.css';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0,
      length: 0,
      sizePercentage: 0,
      widthPercentage: 0,
      comfortPercentage: 0,
      qualityPercentage: 0
    };
  }

  componentWillReceiveProps() {
    setTimeout(() => {
      this.calculatePercentage();
      this.getLength();
      this.getAverages();
    }, 0);
  }

  calculatePercentage() {
    let recommendations = this.props.reviews.map(review => review.recommended);
    let total = recommendations.length;
    let count = 0;

    recommendations.forEach(recommendation => {
      if (recommendation === true) count++;
    });

    let percentage = Math.round((count / total) * 100);
    this.setState({ percentage });
  }

  getLength() {
    let length = document.getElementById('container').clientWidth;
    this.setState({ length });
  }

  getAverages() {
    let { reviews } = this.props;
    let total = reviews.length;

    let sizesArr = reviews.map(review => review.size);
    let sizesSum = _.sum(sizesArr);
    let sizeAvg = sizesSum / total;
    let sizePercentage = sizeAvg / 5;
    if (isNaN(sizePercentage)) return 0;

    let widthArr = reviews.map(review => review.width);
    let widthSum = _.sum(widthArr);
    let widthAvg = widthSum / total;
    let widthPercentage = widthAvg / 5;
    if (isNaN(widthPercentage)) return 0;

    let comfortArr = reviews.map(review => review.comfort);
    let comfortSum = _.sum(comfortArr);
    let comfortAvg = comfortSum / total;
    let comfortPercentage = comfortAvg / 5;
    if (isNaN(comfortPercentage)) return 0;

    let qualityArr = reviews.map(review => review.quality);
    let qualitySum = _.sum(qualityArr);
    let qualityAvg = qualitySum / total;
    let qualityPercentage = qualityAvg / 5;
    if (isNaN(qualityPercentage)) return 0;

    this.setState({
      sizePercentage,
      widthPercentage,
      comfortPercentage,
      qualityPercentage
    });
  }

  setPosition(n, length) {
    let pixel = Math.floor(n * length);
    return pixel;
  }

  render() {
    let {
      percentage,
      sizePercentage,
      widthPercentage,
      comfortPercentage,
      qualityPercentage,
      length
    } = this.state;

    return (
      <div>
        <div className={styles.percentage}>{percentage}%</div>
        <div className={styles.description}>
          of customers recommend this product
        </div>
        <br />
        <div>
          <div className={styles.tag}>SIZE</div>
          <div id="container" className={styles.container}>
            <div className={styles.meter} />
            <div className={styles.meter} />
            <div className={styles.meter} />
            <div className={styles.meter} />
          </div>
          <div
            className={styles.triangle}
            style={{ left: this.setPosition(sizePercentage, length) }}
          />
          <div className={styles.tag2Div}>
            <div className={styles.tag2}>TOO SMALL</div>
            <div className={styles.tag2}>PERFECT</div>
            <div className={styles.tag2}>TOO LARGE</div>
          </div>
        </div>
        <div>
          <div className={styles.tag}>WIDTH</div>
          <div id="container" className={styles.container}>
            <div className={styles.meter} />
            <div className={styles.meter} />
            <div className={styles.meter} />
            <div className={styles.meter} />
          </div>
          <div
            className={styles.triangle}
            style={{ left: this.setPosition(widthPercentage, length) }}
          />
          <div className={styles.tag2Div}>
            <div className={styles.tag2}>TOO NARROW</div>
            <div className={styles.tag2}>PERFECT</div>
            <div className={styles.tag2}>TOO WIDE</div>
          </div>
        </div>
        <div>
          <div className={styles.tag}>COMFORT</div>
          <div id="container" className={styles.container}>
            <div className={styles.meter} />
            <div className={styles.meter} />
            <div className={styles.meter} />
            <div className={styles.meter} />
          </div>
          <div
            className={styles.triangle}
            style={{ left: this.setPosition(comfortPercentage, length) }}
          />
          <div className={styles.tag2Div}>
            <div className={styles.tag2}>UNCOMFORTABLE</div>
            <div className={styles.tag2}>COMFORTABLE</div>
          </div>
        </div>
        <div>
          <div className={styles.tag}>QUALITY</div>
          <div id="container" className={styles.container}>
            <div className={styles.meter} />
            <div className={styles.meter} />
            <div className={styles.meter} />
            <div className={styles.meter} />
          </div>
          <div
            className={styles.triangle}
            style={{ left: this.setPosition(qualityPercentage, length) }}
          />
          <div className={styles.tag2Div}>
            <div className={styles.tag2}>POOR</div>
            <div className={styles.tag2}>PERFECT</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
