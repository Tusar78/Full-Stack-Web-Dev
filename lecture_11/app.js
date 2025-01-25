// const arr = [1,2,3,4]

// let index = 0;
// const next =()=> {
//     return arr[index++]
// }

// console.log(next());
// console.log(next());
// console.log(next());
// console.log(next());


// const myName = [1,2,3,4,5]
// const myNameIterator = myName[Symbol.iterator]()
// console.log(myNameIterator.next());
// console.log(myNameIterator.next());
// console.log(myNameIterator.next());
// console.log(myNameIterator.next());
// console.log(myNameIterator.next());
// console.log(myNameIterator.next());


// const range = {
//     start: 0,
//     stop: 50,
//     step: 5
// }

// range[Symbol.iterator] = function() {
//     let current = this.start
//     let stop = this.stop;
//     let step = this.step;

//     return {      
//         next(){
//             const obj = {
//                 value: current > stop ? undefined : current,
//                 done: current > stop
//             }
//             current += step;
//             return obj;
//         }
//     }
// }

// const myIterator = range[Symbol.iterator]();
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());

// for (const v of range) {
//     console.log(v);
    
// }
 
// function* range(start = 0, stop = 100, step=5) {
//     for (i = start; i < stop; i += step) {
//         yield i;
//     }
// }
// const rangeIt = range(1, 20, 5);
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());


function* idGenerator() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

const personId = idGenerator();

const std1 = {
    id: personId.next(),
    name: 'Tusar',
    age: 25,
}
const std2 = {
    id: personId.next(),
    name: 'Aopo',
    age: 24,
}
const std3 = {
    id: personId.next(),
    name: 'Salman',
    age: 23,
}

const myF = () => {
    const neA = [];
    for (let i = 0; i < 1000; i++) {
        neA.push(i);
    }

    return neA;
}
myF()

const std4 = {
    id: personId.next().value,
    name: 'Jannat',
    age: 23
}

console.log(std1);
console.log(std2);
console.log(std3);
console.log(std4);
