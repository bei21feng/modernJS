const posts = [{
        title: 'Post One',
        body: 'this is post one'
    },
    {
        title: 'Post Two',
        body: 'this is post two'
    }
]

// sync
// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post);
//     }, 2000);
// }

// function getPosts() {
//     setTimeout(() => {
//         let output;
//         posts.forEach(element => {
//             output += `<li>${element.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({
//     title: 'Post Three',
//     body: 'this is post three'
// });
// getPosts();

//async
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(() => {
        let output;
        posts.forEach(element => {
            output += `<li>${element.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({
    title: 'Post Three',
    body: 'this is post three'
}, getPosts);