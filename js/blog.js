const data = 'json/blog.json';
const cards = document.querySelector('.cards');

fetch(data)
.then(function(response) {
    return response.json();
})
.then(function(jsonObject) {
    // console.table(jsonObject);
    const blog_posts = jsonObject['blog_posts'];
    blog_posts.forEach(displayBlogposts);
});

function displayBlogposts(blog) {

    // Create elements to add to the document
    let card = document.createElement('section');
    let heading = document.createElement('h2');
    let image = document.createElement('img');
    let description = document.createElement('p');
    let button = document.createElement('a');

    heading.textContent = `${blog.heading}`;
    image.textContent = `${blog.imageurl}`;
    description.textContent = `${blog.description}`;
    button.textContent = `${blog.button}`;

    image.setAttribute('src', blog.imageurl);
    image.setAttribute('alt', `Image of ${blog.description}`);
    image.setAttribute('loading', 'lazy');

    button.setAttribute('href', blog.siteurl);

    // Add or append the section(card) with the main element

    card.appendChild(image);
    card.appendChild(heading);
    card.appendChild(description);
    card.appendChild(button);

    // Add or appendt he existing HTML div with the cards class with the section(card)

    document.querySelector('div.cards').appendChild(card);
}