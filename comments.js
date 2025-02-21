// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const cors = require('cors');
const fs = require('fs');

app.use(bodyParser.json());
app.use(cors());

// Read comments from file
function readComments() {
    const data = fs.readFileSync('comments.json', 'utf8');
    return JSON.parse(data);
}

// Write comments to file
function writeComments(comments) {
    fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
}

// Get all comments
app.get('/comments', (req, res) => {
    const comments = readComments();
    res.json(comments);
});