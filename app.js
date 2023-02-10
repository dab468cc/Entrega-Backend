
const fs=require('fs')
const { resolve } = require('path')
const express=require('express')
const app=express()

const PORT=8080

// app.use(express.urlencoded({extended:true}))

 
function crearArray(){
    return new Promise(resolve=>{
        fs.readFile('./array.json','utf-8',(error,resultado)=>{
            if(error)return console.log('error al leer el archivo')
            resolve(JSON.parse(resultado))
        })
    })
}

async function mostrarArray(){
    const productos=await crearArray()
    console.log(productos[0])
    mostrarProductos(productos)
    mostrarProductosPid(productos)
    } 
    mostrarArray()

app.listen(PORT,()=>{
    console.log(`API RUNNING ON PORT ${PORT}`)
})

function mostrarProductos(array){
    app.get(`/products`,(req,res)=>{
    res.send(array)
})
}
function mostrarProductosPid(array){
    app.get(`/products/:pid`,(req,res)=>{
    res.send(array[0])
})
}


  