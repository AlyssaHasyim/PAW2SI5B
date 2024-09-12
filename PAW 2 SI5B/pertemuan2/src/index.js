const express = require("express")
const app = express()
const port = 3000

app.get('path', (req, res) => {
    res.send('Hellow Word');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});