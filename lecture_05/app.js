// const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7]

// const newArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number') {
//         delete arr[i]
//     }
// }

// arr.forEach(ar => {
//     arr.
// })

// console.log(arr);


const names = [
	'HM Nayeem',
	'Aditya Chakraborty',
	'Abu Rayhan',
	'Shaker Hossain',
	'Akib Ahmad',
	'Alvi Chowdhury',
];

let index = 0;
let person = names[index]

setInterval(() => {
    person = names[index++]
    console.log(person, person.length);

    if(index === names.length) {
        index = 0;
    }

    
    
}, 1000)