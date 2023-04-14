// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const array1 = [17, 21, 23];
const array2 = [12, 5, -5, 0, 4];

const printForecast = (array) => {
  let textArray = [];
  for (let i = 0; i < array.length; i++) {
    const text = `${array[i]}°C in ${i + 1} days... `;
    textArray.push(text);
  }
  return textArray.join('');
};

console.log(printForecast(array1));
console.log(printForecast(array2));
