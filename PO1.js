//AVANCE///
//-CLASE
//-ATRIBUTO
//-METODO
//-CONSTRUCTOR
//-INSTANCIACIÓN


class frutas {
    constructor (tipo,cantidad){
        this.tip= tipo;
        this.cantidad = cantidad;
        this.info= `Soy una ${tipo} con una cantidad de ${cantidad}`;
    }
    ///ESTO ES UN METODO YA QUE ESTA DENTRO DE LA CLASE  SI ESTUVIERA AFUERA SERIA FUNCION
    verInfo(){
        document.write(this.info+"<br>");
    }

}
let man = new frutas("Manzana",3);
let plat = new frutas("Platano",4);
let fru = new frutas("Frutilla",35);

man.verInfo();
plat.verInfo();
fru.verInfo();