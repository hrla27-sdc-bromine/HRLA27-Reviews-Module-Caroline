const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');
const sequelize = require('sequelize');
const port = 3005;
const app = express();

// const Product = require('../database-sql/model.js');
const { Reviews } = require('../database-sql/model.js');
// const Reviews = require('../database/model.js');
app.use(parser.json());
app.use(parser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}.`));
//postgreSQL database
app.get('/reviews/:productId', (req, res) => {
  let { productId } = req.params;
  console.log(productId);
  Reviews.findAll({
      limit: 2,
      where: {
        "productId": productId
      }
    })
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
});

app.get('/reviews/:productId/stats', (req, res) => {
  console.log('in stats')
  let { productId } = req.params;
  Reviews.findAll({
      where: {
        "productId": productId
      }
    })
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
});


app.get('/reviews/:productId/helpful/:n', (req, res) => {
  console.log('in helpful')
  let { productId, n } = req.params;
  Reviews.findAll({
      limit: (JSON.parse(n)),
      where: {
        "productId": productId,
        yes: {
          $gt: {
            $col: 'no'
          }
        }
      }
    })
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
});

app.get('/reviews/:productId/relevant', (req, res) => {
  console.log('in relevant')
  let { productId } = req.params;
  Reviews.findAll({
    // limit: (JSON.parse(n)),
    where: {
      "productId": productId,
      no: { $lt: 20 }
    }
  })
  .then(data => res.status(200).send(data))
  .catch(error => res.status(404).send(error));
});

app.get('/reviews/:productId/newest/:n', (req, res) => {
  let { productId, n } = req.params;
  Reviews.findAll({ 
    limit: (JSON.parse(n)),
    where: {
      "productId": productId
    },
    order: [['date', 'DESC'],],
  })
  .then(data => res.status(200).send(data))
  .catch(error => res.status(404).send(error));

});

app.get('/reviews/:productId/stars/:n', (req, res) => {
  let {
    productId,n
  } = req.params;
  let { starRating } = req.body;
  Reviews.findAll({
      limit: (JSON.parse(n)),
      where: {
        "productId": productId,
        "starRating": starRating
      },
      order: [
        ['starRating', 'DESC'],
      ],
    })
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
    
  })
  
  app.get('/reviews/:productId/more', (req, res) => {
    console.log('in more')
    let {
      productId
    } = req.params;
    Reviews.findAll({
        where: {
          "productId": productId
        }
      })
      .then(data => res.status(200).send(data))
      .catch(error => res.status(404).send(error));
  });
// app.get('/reviews/:product_id', (req, res) => {
//   console.log(req.params);
//   let { product_id } = req.params;
//   Reviews.find({ product_id: JSON.parse(product_id) })
//     .limit(2)
//     .then(data => res.status(200).send(data))
//     .catch(error => res.status(404).send(error));
// });

// app.get('/reviews/:review_id/stats', (req, res) => {
//   let { review_id } = req.params;
//   Reviews.find({ review_id })
//     .then(data => res.status(200).send(data))
//     .catch(error => res.status(404).end(error));
// });

// app.get('/reviews/:review_id/helpful/:n', (req, res) => {
//   let { review_id, n } = req.params;
//   Reviews.find({ review_id })
//     .$where('this.yes > this.nope')
//     // .limit(2)
//     .limit(JSON.parse(n))
//     .then(data => res.status(200).send(data))
//     .catch(error => res.status(404).end(error));
// });

// app.get('/reviews/:review_id/relevant/:n', (req, res) => {
//   let { review_id, n } = req.params;
//   Reviews.find({ review_id })
//     .$where('this.yes + this.nope >= 110')
//     // .limit(2)
//     .limit(JSON.parse(n))
//     .then(data => res.status(200).send(data))
//     .catch(error => res.status(404).end(error));
// });
// app.get('/reviews/:review_id/newest/:n', (req, res) => {
//   let { review_id, n } = req.params;
//   Reviews.find({ review_id })
//     .sort({ date: -1 })
//     // .limit(2)
//     .limit(JSON.parse(n))
//     .then(data => res.status(200).send(data))
//     .catch(error => res.status(404).end(error));
// });

// app.post('/reviews/:review_id/stars/:n', (req, res) => {
//   let { review_id, n } = req.params;
//   let { stars } = req.body;
//   let parsedStars = stars.sort();

//   let min = parsedStars[0];
//   let max = parsedStars[parsedStars.length - 1];

//   Reviews.find({})
//     .where('review_id')
//     .equals(review_id)
//     .where('rating')
//     .gte(min)
//     .lte(max)
//     .sort({ rating: -1 })
//     .limit(JSON.parse(n))
//     .then(data => res.status(200).send(data))
//     .catch(error => res.status(404).end(error));
// });

// app.get('/reviews/:review_id/more', (req, res) => {
//   let { review_id } = req.params;
//   Reviews.find({ review_id })
//     .limit(5)
//     .then(data => res.status(200).send(data))
//     .catch(error => res.status(404).send(error));
// });