
//Dependencies 
const express = require('express');
const router = require('./routers')
const { clog } = require('./middleware/clog');


//SETS UP  the express app
const app = express();
const PORT = process.env.PORT || 3000;


//Static Path set to public folder (images,CSS,etc)
app.use(express.static('public'));


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clog);

// API
app.use(router);


//PORT PATH
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);