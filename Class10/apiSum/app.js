const express = require('express');
const port = 3000;
const hostname = "localhost";

const app = express();
app.use(express.json());

app.get('/sum' , (req , res) => {
    let x = req.body.firstNum;
    let y = req.body.secondNum;
    let z = x + y;
    console.log(z);
    if (isNaN(typeof (z))) {
        res.status(400).send({"Error ": "Not a Number"});
    }
    else {
        res.status(200).send({"sum" :x + y});
    }
});

app.listen(port , hostname , () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});