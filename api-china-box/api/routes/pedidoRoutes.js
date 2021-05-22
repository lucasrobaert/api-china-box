const express = require('express')
const router = express.Router()

router.get("/", (req, res) =>{
    res.send("GET")
})

router.delete("/:id", (req, res) =>{

    const {id} = req.params

    res.send("Delete request to the homepage")
})

router.get("/:id", (req, res) =>{
    const { id }  = req.params

    res.send("Get by id")
})

router.post("/", (req, res) =>{
    res.send("Save success")
})



module.exports  = router