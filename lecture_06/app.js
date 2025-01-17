// const numbers = [2, 5, 6, 7, 89, 100];

// let sumSeries = "";
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (i != numbers.length - 1) {
//         sumSeries += numbers[i] + ' + ';
//     } else {
//         sumSeries += numbers[i];
//     }
//   sum += numbers[i];
// }

// console.log(`${sumSeries} = ${sum}`);

// const nums = [1, 2, 3, 4, 5, 6];

// const double = [];

// for (let i = 0; i < nums.length; i++) {
//     double.push(nums[i] * 2);
// }

// console.log(double);

// const dbl = nums.map(num => num * 2);
// console.log(dbl);

// const numbers = [2, 5, 6, 7, 89, 100];
// numbers.forEach(function (v, i, arr) {
//     console.log(v, i, arr);
// })

// numbers.map(function() {
//     console.log(arguments);
// })

// const arr = [1, 2, 3, null, false, 4, 5, "", "test", 6, 7];

// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     if (!arr[j] || typeof arr[j] !== "number") {
//       arr[j] = arr[j + 1];
//       arr[j + 1] = undefined;
//     }
//   }

//   if (arr[i] == undefined) {
//     count++;
//   }
// }

// arr.length -= count;

// console.log(arr);

const arr = [
	{ id: 1, value: 10 },
	{ id: 2, value: 20 },
	{ id: 3, value: 30 },
	{ id: 4, value: 40 },
	{ id: 5, value: 50 }
]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].id == 3) {
//         arr[i].value = 300
//     }    
// }

// console.log(arr);


// const updatedArray = arr.find(item => item.id == 3)
// updatedArray.value = 300;

// console.log(arr);
// console.log(updatedArray);

// const a = { a: 10 };
// const b = { a: 10 };
// const c = a;
// console.log(a === c); 
// console.log(a == b);

// // delete using filter
// const updatedArr = arr.filter(item => item.id !== 3);
// console.log(updatedArr);
// console.log(arr);

// const dlIndx = arr.findIndex(a => a.id === 3);
// arr.splice(dlIndx, 1)
// console.log(arr);


// const updatedArr1 = arr.map(item => item.id = 'tusar');
// console.log(updatedArr1);

// const numbers = [1, 2, 3, 4, false, '', NaN, 5, 6];

// // const filteredArr = numbers.filter(num => num)
// // console.log(filteredArr);

// const filteredArray = numbers.filter(v => v).map(n => n.toString());
// console.log(filteredArray);


// const numbers = [1, 2, 3, 4, 5, 6];

// const sum = numbers.reduce((curr, acc) => {
//     return curr + acc;    
// }, 0)

// console.log(sum);


const numbers = [1, 2, 3, 4, false, '', NaN, 5, 6];

const result = numbers.reduce((acc, curr, index) => {
    if (index === 0) {
        acc += '['
    }
    if(curr) {
        acc += curr.toString() + (index < numbers.length - 1 ? ', ': '');
    }
    if (index === numbers.length - 1) {
        acc += ']'
    }
    return acc;
}, '')

console.log(result);