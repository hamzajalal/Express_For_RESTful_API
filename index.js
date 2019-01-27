const express = require('express');
const app = express();

const movies = [
    { id: 1, name: 'movie1' },
    { id: 2, name: 'movie2' },
    { id: 3, name: 'movie3' },
];

app.get('/api/movies', (req, res) => {
    res.send(movies);
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