

const frutas=[]
let cantidad = 5
do{
    let entrada= prompt ("Por favor escriba aqui el nombre de la fruta o verdura que desee agregar a su compra ")
    frutas.push (entrada.toUpperCase())
    console.log(frutas.length)
} while (frutas.length != cantidad)

const nuevalista = frutas.concat([])
    
alert  (nuevalista.join ("\n"))  




    






   

    







