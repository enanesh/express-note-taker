const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtilis');


const getNotes = (req, res, next) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
};



module.exports = {
    getNotes
};