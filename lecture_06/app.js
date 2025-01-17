const numbers = [2, 5, 6, 7, 89, 100];

let sumSeries = "";
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (i != numbers.length - 1) {
        sumSeries += numbers[i] + ' + ';        
    } else {
        sumSeries += numbers[i];        
    }
  sum += numbers[i];
}

console.log(`${sumSeries} = ${sum}`);
