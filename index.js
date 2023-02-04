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
    
    // console.log(productos[id-1])
    
}

function dealteProduct(id){
    if(id<=productos.length){
        productos.splice((id-1),1)
    }else{
        console.log('Aun no contamos con ese producto')
    }
    
}


// getProductos()
addProduct('pan','pan duelce',2,'nana','abc123',10)
addProduct('paja','pan muy duelce',2,'nana','paj89',10)
addProduct('pan','pan duelce',2,'nana','abc123',10)
addProduct('paja','pan muy duelce',2,'nana','paj89',10)
addProduct('pan','pan duelce',2,'nana','abc123',10)
addProduct('paja','pan muy duelce',2,'nana','paj89',10)
addProduct('pan','pan duelce',2,'nana','abc123',10)
addProduct('paja','pan muy duelce',2,'nana','paj89',10)

// getProductos()
dealteProduct(35)

getProductos()

// console.log(productos[0].code)
// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// meses.splice(3,1);
// console.log(meses);
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