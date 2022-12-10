
//Dependencies 
const { Console } = require('console');
const express = require('express');
const path = require('path');


//SETS UP  the express app
const app = express();
const PORT = process.env.PORT || 3001;


//Static Path set to pub;lic folder (images,CSS,etc)
app.use(express.static('public'));


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// GET Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);


//GET Route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);



//
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);