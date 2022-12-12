const express = require('express');
const router = express.Router();
const path = require('path');
const notes = require('./notes');
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtilis');


// GET Route for homepage
router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);


//GET Route for notes page
router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

router.get('/api/notes', notes.getNotes);


//POST Route for notes page

router.post('/api/notes', (req, res) => {
    console.log(req.body);

    const { title, text, id } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding  Note');
    }
});


router.delete('/api/notes/:id', (req, res) => {
    const NoteId = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            // Make a new array of all tips except the one with the ID provided in the URL
            const result = json.filter((db) => db.id !== NoteId);

            // Save that array to the filesystem
            writeToFile('./db/db.json', result);

            // Respond to the DELETE request
            res.json(`Item ${NoteId} has been deleted 🗑️`);
        });
});



module.exports = router;