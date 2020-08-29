const posts = [
    { title: 'publicación 1', body: 'Esta es la publicación 1' },
    { title: 'publicación 2', body: 'Esta es la publicación 2' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'publicación 3', body: 'Esta es la publicación 3' }, getPosts)