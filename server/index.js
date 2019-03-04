const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');

const port = 3005;
const app = express();

const Product = require('../database-sql/model.js');
const Reviews = require('../database-sql/model.js');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}.`));

app.get('/reviews/:review_id', (req, res) => {
  let { review_id } = req.params;
  Reviews.find({ review_id })
    .limit(2)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
});

app.get('/reviews/:review_id/stats', (req, res) => {
  let { review_id } = req.params;
  Reviews.find({ review_id })
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).end(error));
});

app.get('/reviews/:review_id/helpful/:n', (req, res) => {
  let { review_id, n } = req.params;
  Reviews.find({ review_id })
    .$where('this.yes > this.nope')
    .limit(2)
    // .limit(JSON.parse(n))
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).end(error));
});

app.get('/reviews/:review_id/relevant/:n', (req, res) => {
  let { review_id, n } = req.params;
  Reviews.find({ review_id })
    .$where('this.yes + this.nope >= 110')
    .limit(2)
    // .limit(JSON.parse(n))
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).end(error));
});

app.get('/reviews/:review_id/newest/:n', (req, res) => {
  let { review_id, n } = req.params;
  Reviews.find({ review_id })
    .sort({ date: -1 })
    .limit(2)
    // .limit(JSON.parse(n))
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).end(error));
});

app.post('/reviews/:review_id/stars/:n', (req, res) => {
  let { review_id, n } = req.params;
  let { stars } = req.body;
  let parsedStars = stars.sort();

  let min = parsedStars[0];
  let max = parsedStars[parsedStars.length - 1];

  Reviews.find({})
    .where('review_id')
    .equals(review_id)
    .where('rating')
    .gte(min)
    .lte(max)
    .sort({ rating: -1 })
    .limit(JSON.parse(n))
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).end(error));
});

app.get('/reviews/:review_id/more', (req, res) => {
  let { review_id } = req.params;
  Reviews.find({ review_id })
    .limit(5)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
});
