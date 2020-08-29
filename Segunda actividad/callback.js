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
getPosts();