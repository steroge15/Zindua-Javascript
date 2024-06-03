// Write a javascript function that fetches posts from an API and displays all the posts. Each post should have the title and the body.
// Use asynchronous functions using the async keyword
// Here is the API link: https://jsonplaceholder.typicode.com/posts
// Style you work

// async function fetchPosts(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let data = await response.json
//     console.log (data)


async function fetchAndDisplayPosts(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        const divMyDiv = document.getElementById("post-con");
        const postCon = document.getElementById("post-con");
        posts.forEach(post => {
            const postElement = document.createElement("div")
           postElement.classList.add("post");
           const titleElement = document.createElement("h2")
           titleElement.textContent = post.title;
           const bodyElement = document.createElement("p");
           bodyElement.textContent = post.body;
           postElement.appendChild(titleElement)
           postElement.appendChild(bodyElement)
           divMyDiv.appendChild(postElement)
           
        });
    }catch(error) {
        console.error('error fetching and displaying posts:', error.message);
    }
}
fetchAndDisplayPosts();