const main = require('../index');
// to make the family pay structes easier to work with I put all the objects in an array
//where the family name = key || payment and rate information =  value
let familyAndPriceArray = [
  { A: { 6: 15, 5: 20 } },
  { B: { 5: 12, 2: 8, 4: 16 } },
  { C: { 4: 21, 7: 15 } }
];

function hPayingFam(arrOfPrices) {
  let map = {};

  for (let obj in arrOfPrices) {
    //extract family name from array of objects
    let mapKey = Object.keys(arrOfPrices[obj]);
    //extract family payment and rate information as array
    let mapValue = Object.values(arrOfPrices[obj]);

    //creating a map where the key is the family name and their total pay per night is the value
    if (!map[mapKey]) {
      map[mapKey] = main.nightlyRate(...mapValue);
    }
  }

  //finding the highest paying family
  let max = Object.values(map).sort((a, b) => b - a)[0];
  let highestPayingFamily = Object.keys(map).find(key => map[key] === max);
  return highestPayingFamily;
}

console.log(hPayingFam(familyAndPriceArray));
