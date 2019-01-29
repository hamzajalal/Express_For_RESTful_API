const Joi = require('joi');
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
    const { error } = validateMovie(req.body);
    // If invalid, return 400 - Bad Request
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

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


app.put('/api/movies/:id', (req,res) => {
    // Look for the movie
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    // If not existing, then return 404
    if(!movie) res.status(404).send('The movie with the given Id was not found.');
    
    // Validate
    const { error } = validateMovie(req.body);
    // If invalid, return 400 - Bad Request
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }     
    // Update the Movie
    movie.name = req.body.name;
    // Return the updated movie
    res.send(movie);
});

function validateMovie(movie) {
    const schema = {
        name: Joi.string().min(2).required()
    };

    return Joi.validate(movie, schema);
}
// app.delete()

const port = process.env.PORT || 3000; //export PORT=5000
app.listen(port, () => console.log(`Listening on Port ${port}...`));