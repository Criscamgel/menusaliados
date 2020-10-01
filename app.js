const express = require('express');
const app = express();
let menu;


let fs = require('fs');

fs.readFile('./files/menu.json', (error, data) => {
    menu = JSON.parse(data);
});

app.get('/menus', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(menu);
});

app.listen(3000);