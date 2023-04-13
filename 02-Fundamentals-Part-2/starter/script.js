'use strict';
// Coding Challenge #1
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3)

// const dolphinScore1 = calcAverage(44, 23, 71);
// const koalaScore1 = calcAverage(65, 54, 49);

// const dolphinScore2 = calcAverage(85, 54, 41);
// const koalaScore2 = calcAverage(23, 34, 27);

// function checkWinner(avgDolphin, avgKoala) {
//   if(avgDolphin >= (2 * avgKoala)) {
//     return `Dolphins win (${avgDolphin} vs. ${avgKoala})`
//   }
//   else if(avgKoala >= (2 * avgDolphin)) {
//     return `Koalas win (${avgKoala} vs. ${avgDolphin})`
//   }
//   else {
//     return "No Winner !!"
//   }
// }

// console.log(checkWinner(dolphinScore1, koalaScore1));
// console.log(checkWinner(dolphinScore2, koalaScore2));

// Coding Challenge #2

// function calcTip(bill) {
//   if(bill >= 50 && bill < 300) {
//     return bill * 0.15;
//   }
//   else {
//     return bill * 0.20;
//   }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips);
// console.log(totals);

// Coding Challenge #3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
}

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
}

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

function higherBMI(mark, john) {
  if(mark > john) {
    return `Mark's BMI (${mark}) is higher than John's (${john})`
  }
  else {
    return `John's BMI (${john}) is higher than Mark's (${mark})`
  }
}

console.log(higherBMI(mark.bmi, john.bmi));

// Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  if(bill >= 50 && bill < 300) {
    return bill * 0.15;
  }
  else {
    return bill * 0.20;
  }
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip)
}

console.log(tips);
console.log(totals);

function calcAverage (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(bills));
