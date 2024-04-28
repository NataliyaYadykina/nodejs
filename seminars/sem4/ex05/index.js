const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello!</h1>');
});

app.post('/post', (req, res) => {
    console.log(req.body);
    res.send('<h1>This is a post request!</h1>');
});

app.put('/put', (req, res) => {
    console.log(req.body);
    res.send('<h1>This is a put request!</h1>');
});

app.delete('/delete', (req, res) => {
    console.log(req.body);
    res.send('<h1>This is a delete request!</h1>');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});