/*CARACTERISTICAS DE LA POO 
-Abstraccion =>Esto hace que se reduzca lo maximo un objeto es decir que se reduce las propiedades
-Modularidad =>Esto es separar para dar solucion de mejor forma 
-Encapsulamiento => Esto sirver para privatisar los metodos 
-Polimorfismo => El polimorfismo es obtener los mismos objetos solo que con diferentes propiedades */
//EJEMPLO ////


///HERENCIA////
// class animales {
//     constructor (especie,edad,color){
//         this.especie=especie;
//         this.edad=edad;
//         this.color=color;
//     }
// }
// //Herencia

// class perro extends animales{
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color)
//         this.raza=raza;
//     }
//     ladrar(){
//         alert("¡WAWW");
//     }
// }
// let perrito = new perro("perro",5,"Negro","Sharpei");

// perrito.ladrar();

///SETER Y GETER/// 
//EL SETTER=> Sirve para modificar un objeto y actuan como  propiedad 
//EL GETTER=> Sirve para  obtener valores de un objeto

//EJEMPLO //
class frutas {
    constructor(nombre,tipo,cantidad){
        this.nombre=nombre;
        this.tipo=tipo;
        this.cantidad=cantidad;
        this.info=`soy una ${nombre} de tipo ${tipo} y somos ${cantidad} `;
    }

}
 class Manzana extends frutas {
    constructor(nombre,tipo,cantidad,color){
        super(nombre,tipo,cantidad);
        this.color= "";
    }
    set setColor(newColor){
        this.color=newColor;
    }
    get getColor(){
        return this.color;
    }
 }
 const manzana = new Manzana("Manzana","Fruta",3,"Rojo");

 manzana.setColor="Verde"

 document.write(manzana.getColor);