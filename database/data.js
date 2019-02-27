const db = require('./model.js');
const faker = require('faker');

const {
  descriptionGenerator,
  headerGenerator,
  idGenerator,
  fiveStarGenerator,
  dateGenerator,
  recommendGen,
  helpfulCountGen
} = require('./generator.js');

let reviews = [];

generateReviews = n => {
  for (let i = 0; i < n; i++) {
    let review = {
      review_id: idGenerator(20),
      user: faker.internet.userName(),
      header: headerGenerator(),
      description: descriptionGenerator(),
      date: dateGenerator(),
      rating: fiveStarGenerator(),
      size: fiveStarGenerator(),
      width: fiveStarGenerator(),
      comfort: fiveStarGenerator(),
      quality: fiveStarGenerator(),
      recommended: recommendGen(),
      yes: helpfulCountGen(),
      nope: helpfulCountGen()
    };
    reviews.push(review);
  }
};

generateReviews(500);

const insertData = () => db.insertMany(reviews);
insertData();
