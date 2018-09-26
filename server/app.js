const express = require('express')

const bodyParser = require('body-parser')

const api = require('./routes/api')


const cors = require('cors')

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

const PORT = 3300;

app.use('/api', api);

app.get('/', function (req, res) {
    // res.json({ "mesaage": "kay hey ye" })
    res.send("hello from server");
})


app.listen(PORT, function (err) {
    console.log(err);
    console.log("server running on localhost " + PORT)
})
