const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//PUT --> Ändra data DELETE --> Radera data bra att veta

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/', (req, res) => {
 res.send('testtest');
})
app.get('/profile', (req, res) => {
	console.log(req.query); //Används för GET requests
	req.body //Används i POST requests
	console.log(req.header)
	console.log(req.params) // Använder /profile där uppe
 res.status(404).send('Not found'); //Skickar info på sidan
});
app.post('/profile', (req, res) => {
	console.log(req.body)
 res.send("Sucess");
});

//Nedan används för att skicka CSS, HTML och JS filer med Express och Node
app.use(express.static(__dirname) + './public');

app.listen(3000); 