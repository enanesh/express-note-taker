const res = require('express/lib/response');
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
} = require('../helpers/fsUtilis');


const getNotes = (req, res, next) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
};

const writeNotes = (req, resp, next) => {
    readAndAppend('./db/db.json').then((data) => res.jason(JSON.parse(data)));
}



module.exports = {
    getNotes,writeNotes
};