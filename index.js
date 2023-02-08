const fs=require('fs')


let productos=[]

class porductManager {
    constructor(id,titulo,descripcion,precio,thumbnail,code,stock){
        this.titulo=titulo,
        this.descripcion=descripcion,
        this.precio=precio,
        this.thumbnail=thumbnail,
        this.code=code,
        this.stock=stock
        this.id=id
    }
}


function getProductos(){
    console.log(productos)
}

let acc=1
function addProduct(titulo,descripcion,precio,thumbnail,code,stock){
    if (!titulo || !descripcion || !precio || !thumbnail || !code || !stock) {

        console.log('Se requieren todos los campos');
        
        return;
        
    }else{
        let id=acc
        let producto=new porductManager(id,titulo,descripcion,precio,thumbnail,code,stock)
        productos.push(producto)
        return acc++
        
        }
    
}

function getElementById(id){
    if(id<=productos.length){
        console.log(productos[id-1])
    }else{
        console.log('Aun no contamos con ese producto')
    }
}

function updateProduct(id,campo,cambio){
    
    if(campo==='id'){
        console.log('este valor no puede ser cambiado')
    }else{
        let paU=productos[id-1][campo]
        paU=cambio
        productos[id-1][campo]=paU
        productos.push(paU)
    }        
}



function dealteProduct(id){
    if(id<=productos.length){
        productos.splice((id-1),1)
    }else{
        console.log('Aun no contamos con ese producto')
    }
    
}

// ------FUNCIONES FS-------

function crearArchivo(array){
    fs.writeFile('./array.json',JSON.stringify(array),(error)=>{
        if(error)return console.log('error al escribir el archivo')
    })
}

function leerArchivo(){
    fs.readFile('./array.json','utf-8',(error,resultado)=>{
        if(error)return console.log('error al leer el archivo')
        console.log(JSON.parse(resultado))
    })
}
function agregarContendio(objeto){
    fs.appendFile('./array.json',JSON.stringify(objeto),(error)=>{
        if(error)return console.log('error al actualizar el archivo')
    })
}

function eliminarArchivo(){
    fs.unlink('./array.json',(error)=>{
        if(error)return console.log('error al borrar el archivo')
    })
}



// --------EJECUCION------


addProduct('pan','pan dulce',6,'thumbnail','123abc',6)
addProduct('leche','leche',8,'thumbnail','123das',3)
addProduct('jugo','jugo',7,'thumbnail','143asd',9)
crearArchivo(productos)
leerArchivo()
eliminarArchivo()


// ---------PROBLEMAS--------
// preguntar por que al crear el array no se escriben bien las incluciones

// ----Pendientes

// ----validar el codigo
// validarCode('abc123')
// console.log(productos[0].code)
// function validarCode(numAValidar){
//     const found = array1.find(numAValidar => numAValidar > productos.code);
//     console.log(found)

// }




// function validarCode(code){
//     productos.forEach(porductManager.code=codeEx)
//         if(code===codeEx){
//             console.log('codigo existente')
//         }
        // else{
        //     console.log('producto creado')
        // }
        // return
    
// }

// ----Pendientes
// ----ver por que se puchea tambien el valor indivivual de paU