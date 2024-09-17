const express = require('express');
const app = express();
const port = 3000;

const route = require("./routes/index");
app.get('/', (req, res) => {
    res.send('Hello Dunia!');
});

app.use(route);

// app.get('/Mahasiswa', (req, res) => {
//     res.send("Get Data Mahasiswa");
// });

// app.post('/Mahasiswa', (req, res) => {
//     res.send("Post Mahasiswa");
// });

// app.put('/Mahasiswa/:npm', (req, res) => {
//     res.send("Put Mahasiswa " + req.params.npm);
// });

// app.delete('/Mahasiswa/:npm', (req, res) => {
//     res.send("Delete Mahasiswa " + req.params.npm);
// });

app.listen(3000, () => {
    console.log('Example app listening on port port!' + 3000);
});

//Run app, then load http://localhost:port in a browser to see the output.