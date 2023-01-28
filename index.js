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
    let id=acc
    let producto=new porductManager(id,titulo,descripcion,precio,thumbnail,code,stock)
    productos.push(producto)
    return acc++
}


// function validarCode(numAValidar){
//     const found = array1.find(numAValidar => numAValidar > productos.code);
//     console.log(found)

// }

function getElementById(id){
    if(id<=productos.length){
        console.log(productos[id-1])
    }else{
        console.log('Aun no contamos con ese producto')
    }
}


