const express = require('express');
const router = express.Router();
const path = require('path');
const notes = require('./notes')


// GET Route for homepage
router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);


//GET Route for notes page
router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

router.get('/api/notes', notes.getNotes);


router.post('/api/notes', )

module.exports = router;