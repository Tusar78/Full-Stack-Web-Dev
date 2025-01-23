// Asynchronous means user ke boka banano

// function main() {
//     setTimeout(()=> {
//         console.log('Inner setTimeout');
//     }, 0)

//     test();
// }

// function test() {
//     console.log('Inner Test');
// }

// main();

// callback hell

/**
 * 1. Find user by username
 * 2. Find post by userid
 * 3. find latest post
 * 4. find comments by post id
 * 5. find latest comment
 * 6. find username of the last commented user
 */

/**
 * /users?username=[username]
 * /posts?user_id=[user_id]
 * /comments?post_id=[post_id]
 * /users?username=[username]
 */

// Callback hell
/*
function get(path, cb) {
    const data = {}; // somwhow process it
    cb(data)
}

function getUserNameFromComment(username) {
    get(`/users?username=${username}`, user => {
        get(`/posts?user_id=${user.id}`, post => {
            get(`/comments?post_id=${post[0].id}`, comments => {
                get(`/users?username=${comments[0].username}`, user => {
                    console.log(user);                    
                })
            })
        })
    })
}

getUserNameFromComment('Tusar')
*/


const promise = new Promise((resolve, reject) => {
  const isSuccess = true;

  setTimeout(() => {
    if (isSuccess) {
      resolve({id: 1, name: 'Tusar'});
    } else {
      reject("Task failed!");
    }
  }, 1000);
});

promise
  .then((result) => process(result))
  .catch((error) => console.log(error));


const process = data => {
    console.log(data);    
}