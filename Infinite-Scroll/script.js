const postContainer = document.getElementById('post-container')
const loading = document.querySelector('.loader')
const filter = document.getElementById('filter')

let limit = 3;
let page = 1;

async function getPosts() {
    const res = await fetch(
        `
        https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    )

    const data = await res.json();
    return data;
}

async function showPosts() {
    const post = await getPosts();

    post.forEach(post => {
        const postEl = document.createElement('div')
        postEl.classList.add('post');
        postEl.innerHTML = `
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-tittle">${post.tittle}</h2>
                <p class="post-body">${post.body}</p>
            </div>
        `
        postContainer.appendChild(postEl)
    })
}

showPosts()