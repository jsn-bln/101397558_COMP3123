const express = require('express')

const app = express();

const PORT = 8080;


app.get("/hello",(req, res) => {
    res.status(200).send("Hello Express JS");
})

app.get("/user",(req, res) => {
   const { firstname, lastname} = req.query

    const payload = {
        firstname,
        lastname
    }

    res.status(200).json(payload);

})

app.post("/user/:firstname/:lastname", (req, res) => {
    const { firstname, lastname} = req.params

    const payload = {
        firstname, 
        lastname
    }

    res.status(200).json(payload)

})



app.listen(PORT, () => console.log(`Server running on Port:${PORT}`))