var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bloggy-style');

var con = mongoose.connection;

con.once('open', () => console.log(`Connected to MongoDB on ${con.host}:${con.port}`));

con.on('error', (err) => {
    console.error(`Database err: ${err}`);
});