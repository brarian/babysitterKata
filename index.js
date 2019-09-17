//11 hours per family
//using an object because it makes sense in mapping hours to rates
//the {key = the block of hours the babysitter works : value = the rate for that block}
//easy to manipulate
const A = { 6: 15, 5: 20 };
const B = { 5: 12, 2: 8, 4: 16 };
const C = { 4: 21, 7: 15 };

const keysOfObjects = obj => Object.keys(obj).map(i => Number(i));
const valuesOfObjects = obj => Object.values(obj).map(i => Number(i));

function nightlyRate(obj) {
  let keys = keysOfObjects(obj);
  let values = valuesOfObjects(obj);

  let sum = 0;
  for (let i in keys) {
    sum += keys[i] * values[i];
  }

  return sum;
}

console.log(nightlyRate(A));
console.log(nightlyRate(B));

console.log(nightlyRate(C));

module.exports = {
  A,
  B,
  C,
  keysOfObjects,
  valuesOfObjects,
  nightlyRate
};
