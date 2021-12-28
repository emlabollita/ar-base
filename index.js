const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/', function (req, res) { 
    res.sendFile(path.join(__dirname, 'public/index.html'));
    console.log("__dirname: ",__dirname);
});

app.get('/modelviewer', function (req, res) { 
    res.sendFile(path.join(__dirname, 'public/modelviewer.html'));
    console.log("__dirname: ",__dirname);
});

app.listen(port, function () { 
    console.log("Server Running in port: ", port);
});