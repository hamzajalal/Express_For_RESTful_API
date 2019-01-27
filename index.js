const express = require('express');
const app = express();

app.use(express.json());

const movies = [
    { id: 1, name: 'movie1' },
    { id: 2, name: 'movie2' },
    { id: 3, name: 'movie3' },
];

app.get('/api/movies', (req, res) => {
    res.send(movies);
});

app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        name: req.body.name
    };
    movies.push(movie);
    res.send(movie);
});

app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if(!movie) res.status(404).send('The movie with the given Id was not found.');
    res.send(movie);
});
// app.post()
// app.put()
// app.delete()

const port = process.env.PORT || 3000; //export PORT=5000
app.listen(port, () => console.log(`Listening on Port ${port}...`));