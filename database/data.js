const db = require('./model.js');
const faker = require('faker');
const fs = require('fs');
const path = require('path');
const {
  descriptionGenerator,
  headerGenerator,
  // idGenerator,
  fiveStarGenerator,
  dateGenerator,
  recommendGen,
  helpfulCountGen
} = require('./generator.js');

generateReviews = () => {
  let reviews = [];
  let loopLength = Math.ceil(Math.random() * 10)
  for (let i = 0; i < loopLength; i++) {
    let review = {
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
  return reviews; 
};


// const writeToTxt= function () {
  // for (var i = 0; i < 10; i++) {
  //   const file = fs.createWriteStream(`sample${i}.txt`);
  //   var testing = JSON.stringify(generateReviews(1));
  //   file.write(testing);
  //   console.log(testing);
  // }
for (var i = 0; i < 1; i++) {
  function writeOneMillionTimes(data, callback) {
    
    const file = fs.createWriteStream(`samples${i}.txt`);
    var x = 1e7;
    var j = 0;
    write();

    function write() {
      var ok = true;
      do {
        x -=1;
        j++;
        var data = JSON.stringify({product_id:j, review:generateReviews()});
        if (x === 0) {
          file.write(data, ()=> console.log('done'));
        } else {
          ok = file.write(data);
        }
      } while (x > 0 && ok);
      if (x > 0) {
        file.once('drain', write);
      }
    }
  }
}

writeOneMillionTimes();


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