

const express = require('express')

const cors = require('cors')

const logic = require('./Services/logics')

const pdsServer =express()

pdsServer.use(cors({
    origin:'http://localhost:3000'
}))

pdsServer.use(express.json())

pdsServer.listen(8000,()=>{
    console.log("pdsServer listening on the port 8000");
})


pdsServer.get('/get-all-products',(req,res)=>{
    logic.getAllProducts().then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

pdsServer.get('/get-an-product/:id',(req,res)=>{
    logic.getAnProduct(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

pdsServer.delete('/delete-product/:id',(req,res)=>{
    logic.deleteProduct(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})