const generateRandomNumbers = (max, cb) => {
  const random1 = Math.round(Math.random() * max);
  const random2 = Math.round(Math.random() * max);

  return cb(random1, random2);
};

const sumRand = generateRandomNumbers(10, (num1, num2) => {
    return num1 ** num2;
})

console.log(sumRand);

