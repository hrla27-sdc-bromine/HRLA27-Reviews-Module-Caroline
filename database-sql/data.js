const db = require('./model.js');
const faker = require('faker');
const fs = require('fs');
const path = require('path');
const CSV = require('csv-string');
const {
  fiveStarGenerator,
  dateGenerator,
  recommendGen,
  helpfulCountGen
} = require('./generator.js');

generatorProducts = () => {
  let productName= faker.commerce.productName();
  return `${productName} \n`;
}

generateReviews = (id) => {
  let review=[];
  let loopLength = Math.ceil(Math.random() * 10);

  for (let i = 0; i < loopLength; i++) {
    temp = []
    temp.push(id);
    temp.push(faker.internet.userName());
    temp.push(faker.random.word());
    temp.push(faker.random.word());
    temp.push(dateGenerator());
    temp.push(fiveStarGenerator());
    temp.push(fiveStarGenerator());
    temp.push(fiveStarGenerator());
    temp.push(fiveStarGenerator());
    temp.push(fiveStarGenerator());
    temp.push(recommendGen());
    temp.push(helpfulCountGen());
    temp.push(helpfulCountGen());
    review.push(temp);
  }
  return CSV.stringify(review);
};
// const writeToTxt= function () {
// for (var i = 0; i < 10; i++) {
//   const file = fs.createWriteStream(`sample${i}.txt`);
//   var testing = JSON.stringify(generateReviews(1));
//   file.write(testing);
//   console.log(testing);
// }
// const productFile = fs.createWriteStream('productstesting.csv');
// const reviewFile = fs.createWriteStream('reviews.csv');

//   function writeOneMillionTimes(data, callback) {
//     var x = 1e7;
//     var j = 0;
//     write();

//     function write() {
//       var ok = true;
//       do {
//         x--;
//         j++;
//         // var data = 
//         //   productName = generatorProducts();
//         var data2 = 
//           review = generateReviews(j);
//         if (x === 0) {
//           // productFile.write(data, () => console.log('done'));
//           reviewFile.write(data2, ()=> console.log('done'));
//         } else {
//           // ok = productFile.write(data);
//           ok = reviewFile.write(data2);
//         }
//       } while (x > 0 && ok);
//       if (x > 0) {
//         // productFile.once('drain', write);
//         reviewFile.once('drain',write);
//       }
//     }
//   }

// writeOneMillionTimes();


// const writeToTxt= function () {
// for (var i = 0; i < 10; i++) {
//   const file = fs.createWriteStream(`sample${i}.txt`);
//   var testing = JSON.stringify(generateReviews(1));
//   file.write(testing);
//   console.log(testing);
// }
// const productFile = fs.createWriteStream('products.csv');
// const reviewFile = fs.createWriteStream('reviews.csv');

//   function writeOneMillionTimes(data, callback) {
//     var x = 1e7;
//     var j = 0;
//     write();

//     function write() {
//       var ok = true;
//       do {
//         x--;
//         j++;
//         var data = 
//           productName = generatorProducts();
//         var data2 = 
//           review = generateReviews(j);
//         if (x === 0) {
//           productFile.write(data, () => console.log('done'));
//           reviewFile.write(data2, ()=> console.log('done'));
//         } else {
//           ok = productFile.write(data);
//           ok = reviewFile.write(data2);
//         }
//       } while (x > 0 && ok);
//       if (x > 0) {
//         productFile.once('drain', write);
//         reviewFile.once('drain',write);
//       }
//     }
//   }

// writeOneMillionTimes();


// const readFromTxt = function (review_id) {
//   return new Promise((resolve, reject) => {
//     const src = fs.createReadStream(`samples${review_id}.txt`)
//     let doc = '';
//     src.on('data', (chunk) => {
//       doc += chunk
//     })
//     src.on('end', () => {
//       let recordsArray = doc.split('\n') //
//       recordsArray.pop(); // eliminates the newline on the very last reccord
//       recordsArray = recordsArray.map((rec) => {
//         return JSON.parse(rec)
//       });
//       resolve(recordsArray)
//     })
//   })
// }
// readFromTxt();
//   file.end();
// }
// writeToTxt();

// const insertData = () => db.insertMany(reviews);//


// const seed = async ()=>{
//   for(let i=0; i < 1000; i++){
//     generateReviews(10000);
//     await insertData();
//     console.log(i);
//   }
//   console.log('completed');
// }
// // seed();
// module.exports