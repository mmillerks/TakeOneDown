const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});


//Index 
app.get('/fruits', function(req, res) {
    res.render('fruits/Index', { fruits: fruits });
});

app.get('/vegetables', function(req, res) {
    res.render('vegetables/Index', { vegetables: vegetables });
});