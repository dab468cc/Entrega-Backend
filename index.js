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


addProduct('dona glaseada','pan dulce',5,'thumbnail','1234',6)
addProduct('dona de chocolate','pan dulce',6,'thumbnail','4312',3)
addProduct('dona de nuez','pan dulce',6,'thumbnail','1324',9)
addProduct('dona de miel','pan dulce',6,'thumbnail','4212',6)
addProduct('pastel de fresa','pan dulce',5,'thumbnail','2134',3)
addProduct('pastel de nutela','pan dulce',5,'thumbnail','4231',9)
addProduct('cafe americano','bebida',10,'thumbnail','4232',6)
addProduct('capuchino','bebida',12,'thumbnail','1424',3)
addProduct('leche','bebida',8,'thumbnail','2134',9)
addProduct('chocolatada','bebida',10,'thumbnail','4214',9)

// getProductos()

crearArchivo(productos)
leerArchivo()

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