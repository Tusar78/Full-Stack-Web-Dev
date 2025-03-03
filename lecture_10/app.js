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

// const promise = new Promise((resolve, reject) => {
//   const isSuccess = true;

//   setTimeout(() => {
//     if (isSuccess) {
//       resolve({id: 1, name: 'Tusar'});
//     } else {
//       reject("Task failed!");
//     }
//   }, 1000);
// });

// promise
//   .then((result) => process(result))
//   .catch((error) => console.log(error));

// const process = data => {
//     console.log(data);
// }

// function wait(ms) {
//     const promise = new Promise(resolve => {
//         setTimeout(resolve, ms);
//     })

//     return promise
// }

// wait(1000).then(()=> console.log('Done 1000'))
// wait(2000).then(()=> console.log('Done 2000'))
// wait(3000).then(()=> console.log('Done 3000'))

/**
 * /users?username=[username]
 * /posts?user_id=[user_id]
 * /comments?post_id=[post_id]
 * /users?username=[username]
 */

// const get = (url) => {
//   const promise = new Promise((resolve, reject) => {
//     const isSuccess = true;
//     if (url) {
//       resolve(url);
//     } else {
//       reject();
//     }
//   });

//   return promise;
// };

// // promise.then(data => console.log(data))

// get(`/users?username=tusar`)
//   .then((user) => {
//     return get(`/posts?user_id=${user.id}`);
//   })
//   .then((posts) => {
//     const lastPost = posts[0];
//     return get(`/comments?post_id=${lastPost.id}`);
//   })
//   .then((comments) => {
//     const lastComment = comments[0];
//     return get(`/users?username=${lastComment.username}`);
//   })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((e) => console.log(e));

// const get = (url) => Promise.resolve(url);

// const getUserName = async (username) => {
//   try {
//     const mainUser = await get(`/users?username=${username}`);
//     const posts = await get(`/posts?user_id=${mainUser.id}`);
//     const comments = await get(`/comments?post_id=${posts[0].id}`);
//     const user = await get(`/user?username=${comments[0].username}`);
//     console.log(user);
//   } catch (e) {
//     console.log(e);
//   }
// };

// getUserName("Tusar");

const axios = require("axios");

const USERS = `https://jsonplaceholder.typicode.com/users`;
const COMMENTS = `https://jsonplaceholder.typicode.com/comments`;
const POST = `https://jsonplaceholder.typicode.com/posts`;

const getComments = async (name) => {
  const { data: user } = await axios.get(`${USERS}?username=${name}`);  
  const {data: posts} = await axios.get(`${POST}?userId=${user[0].id}`)
  const {data: comments} = await axios.get(`${COMMENTS}?postId=${posts[0].id}`)
  console.log(comments[0].email);  
  
};

getComments("Delphine");
