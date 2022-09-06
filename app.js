const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/homePage.html');
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/aboutPage.html');
});

app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/worksPage.html');
});

app.listen(3000, () => console.log('Started on port 3000'));