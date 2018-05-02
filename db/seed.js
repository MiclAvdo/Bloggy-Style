require('./../config/database.js');
const Post = require('./../models/post.js');

// Step 1. Delete all documents in posts collections
const del = Post.remove({});

// Step 2. create new posts
del.then(function() {
    return Post.create([
        {
            title: "Node is KOOL",
            content: "jk! Node is the KOOLEST",
            upvotes: 6,
            downvotes: 9,
        },{
            title: "Crushin Sandos n Bangin Dingers",
            content: "HOORAH",
            upvotes: 4,
            downvotes: 20,
        }
    ])
})

// Step 3. create new comments for posts
.then(function(posts) {
    posts[0].comments.push({ content: "Hell Yah Brother" });
    posts[0].save();

    posts[1].comments.push({ content: "I second that emotion" });
    posts[1].save();

    return posts;
})

// Step 4. terminate the process (CS term for a program thats running)
.then(function(posts) {
    console.log("Posts:", posts);
    require('mongoose').connection.close();
    process.exit();
})

// Step 5. Add catch to handle seeding errors
.catch(function(err) {
    console.log('Error seeding', err);
    require('mongoose').connection.close();
    process.exit();
});