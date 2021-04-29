const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bdPasswords = process.env.DB_PASS 

app.use(express.json())

app.get('/', (req, res) =>{
    console.log("GET executado")
    res.send('Hello World!')
})

app.post('/', function (req, res) {
  res.status(201).send('POST request to the homepage')
})

app.delete('/', function (req, res) {
    res.status(204).send('POST request to the homepage')
  })


app.delete('/products/:id', function(req, res) {
  const { id } = req.params;
  res.send(`Delete record with id id`);
});

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}!`)
})