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
//Promesa 
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error!, algo ha ocurrido');
            }
        }, 2000);
    });

}

createPost({ title: 'Publicación 3', body: 'Esta es la publicación 3' }).then(getPosts)
    .catch(err => console.log(err));