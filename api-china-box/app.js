const express = require('express')
const mongoose = require('mongoose')
const produtosRoutes = require('./api/routes/produtoRoutes')
const pedidoRoutes = require('./api/routes/pedidoRoutes')


const app = express()
const port = process.env.PORT || 3000;
const bdPasswords = process.env.DB_PASS 
const dburl = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASS}@${process.env.BD_HOST}/${process.env.BD_NAME}?retryWrites=true&w=majority`


mongoose.connect(
  dburl, 
  {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  },
  (err) => {
    if(!err){
      console.log("Conectou")
    }else{
      console.log("Erro pra conectar")
    }
  }
)

app.use(express.json())

app.use("/produtos", produtosRoutes)
app.use("/pedido", pedidoRoutes)



app.listen(port, () =>{
    console.log(`Example app listening on port ${port}!`)
})