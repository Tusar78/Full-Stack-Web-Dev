// let names = ['Aopo', 'Tusar', 'Salman', 'Jannat', 'Asha'];
// let index = -1;
// let name = names[++index];

// setInterval(()=> {
//     name = names[index++]
//     console.log(name, name.length);
    
//     if (index === names.length) {
//         index = 0;
//     }
// }, 1000)

const student1 = {
    name: "Aopo",
    secondName: "Roy",
    email: "aopo@gmail.com",
    age: 25,
    attend: true
}
const student2 = {
    name: "Tusar",
    secondName: "Ali",
    email: "tusar@gmail.com",
    age: 25,
    attend: true
}
const student3 = {
    name: "Salman",
    secondName: "Mahmud",
    email: "salman@gmail.com",
    age: 25,
    attend: true
}

const allStudents = [student1, student2, student3]


for (let i = 0; i < allStudents.length; i++) {
    // console.log(allStudents[i]);
        // console.log(`Sending Mail to ${allStudents[i].email}`);
    
}

// const sendEmail = email => {
//     console.log(`Sending Mail to ${email}`);
// }
// sendEmail(students.email);

const generateRandomNumber = (min, max) => {
    const num = Math.floor(Math.random() * min + (max-min));
    return num;
}

const rs = console.log(generateRandomNumber(5, 10));
console.log(rs);

