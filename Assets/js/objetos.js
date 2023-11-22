const animal={
    nombre:"Felix",
    tipo:"gato",
    edad:"4",
    comer(){
        console.log("El gato está comiendo")
    }
}
//mostrar objeto completo
console.log(animal)


const mascota={
    nombre:"Felix",
    tipo:"gato",
    edad:"4",
    comer(){
//acceder a las propiedades de un objeto
        console.log(`${mascota.nombre} está comiendo`);
//Usando la palabra reservada this
        console.log(`${this.nombre} está comiendo`);
    }
}

console.log(mascota)
//invocar métodos de un objeto
mascota.comer();