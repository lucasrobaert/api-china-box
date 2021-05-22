const express = require('express')
const router = express.Router()
const Produto = require('../models/produto')

router.get("/", (req, res) =>{
    res.send("GET")
})

router.post("/", async (req, res) =>{

    const produtExists = await Produto.findOne({
         name: req.body.name 
    });
    if(produtExists){
        return res.status(400).json({error: "Já existe um produto com esse nome"})
    }
        

    await Produto.create(req.body).then((doc) =>{
        return res.status(201).json({success: true, doc})
    }).catch((err) => {
        return res.status(400).json({success: false, err})
    })
})

router.delete("/:id", (req, res) =>{

    const {id} = req.params

    res.send("Delete request to the homepage")
})

router.get("/:id", (req, res) =>{
    const { id }  = req.params

    res.send("Get by id")
})

router.patch("/:id", (req, res) =>{
    const { id } = req.params

    res.send("Update")
})



module.exports  = router