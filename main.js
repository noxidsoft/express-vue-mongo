const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

const port = 3000;

app.get('/', (req, res) => {
    res.render('home', { title: 'Title is passed from the server!' });
});

app.listen(port, () => {
    console.log(`The server is listening on ${port}`);
});