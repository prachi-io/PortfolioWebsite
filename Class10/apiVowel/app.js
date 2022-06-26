const express = require('express');
const port = 3000;
const hostname = "localhost";

const app = express();
app.use(express.json());

app.get('/vowel' , (req,res) => {
    let s = req.body.str;
    let count = 0;
    for (let i = 0 ; i < s.length ; i++) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            count++;
        }
    }
    console.log(count)
    res.status(200).send({"vowels" : count});
})

app.listen(port , hostname , () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});