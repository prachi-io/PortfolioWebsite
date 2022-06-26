const express = require('express');
const port = 3000;
const hostname = "localhost";

const app = express();
app.use(express.json());

app.get('/list' , (req , res) => {
    let l = req.body.list;
    let sum = 0;
    for (let i = 0 ; i < l.length ; i++) {
        if (typeof l[i] !== "number") {
            res.status(400).send({"Error ": "Not a Number"});
        }
        else {
            sum = sum + l[i];
        }
    }
    res.status(200).send({"sum" : sum});
});

app.listen(port , hostname , () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});