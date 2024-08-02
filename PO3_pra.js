////EJERCICIO 1 Y 2////////////////////
///////////////////////////////////////
/*
class celulares {
    constructor(color, peso,tamaño,  rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño=tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }

    presionarBoton() {
        if (this.encendido == false) {
            alert("El celular Esta Prendido");
            this.encendido = true;
        } else {
            alert("El celular Esta Apagado");
            this.encendido = false;
        }
    }
    reinicio(){
        if(this.encendido == true){
            alert("El celular esta reiniciando");
        }else{
            alert("El celular esta apagado");
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resolucion de : ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`Grabando video en ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return`
        Color:<b>${this.color}</b><br>
        Peso:<b>${this.peso}</b><br>
        Tamaño:<b>${this.tamaño}</b><br>
        Resolucion de CAmara:<b>${this.resolucionDeCamara}</b><br>
        Memoria Ram:<b>${this.memoriaRam}</b><br>
        `; 
    }
}*/
////EJERCICIO 2//////////////////////
//////////////////////////////////////
/*class celularAltaGama extends celulares{
    constructor(color, peso,tamaño,  rdc, ram,rdce){
        super(color,peso,tamaño,rdc,ram,rdce);
        this.resolucionDeCamaraExtra=rdce;
    }
    grabarVideoLento(){
        alert("Estas grabando en Camara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar el reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo()+`Resolucion de camara extra ${this.resolucionDeCamaraExtra}<br>/`;
    }
}
celu1= new celulares("Rojo","150g","5plg","HD","4GB");
celu2= new celulares("Negro","170g","5.4plg","Full HD","3GB");
celu3= new celulares("Blanco","146g","4.5plg","Full HD","2GB");

celu1.presionarBoton();
celu1.tomarFoto();
celu1.grabarVideo();
celu1.reinicio();
celu1.presionarBoton();

celu1=new celularAltaGama ("rojo","130g","5.2p","4k","3GB","HD");
celu2=new celularAltaGama ("Verde","230g","5.6p","4k","5GB","HD");
document.write(`
 ${celu1.infoAltaGama()}<br>
 ${celu2.infoAltaGama()}<br>
 `); */

class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    instalar() {
        if (this.instalada == false) {
            alert("App instalada Correctamente");
            this.instalada = true
        }
    }
    desinstalar() {
        if (this.instalada == true) {
            alert("La app se desinstalo Correctamente");
            this.instalada = false;
        }
    }
    abrir() {
        if (this.iniciada == false && this.instalada == true) {
            alert("App iniciada");
            this.iniciada = true;
        }
    }
    cerrar() {
        if (this.iniciada == true && this.instalada == true) {
            alert("App cerrada")
        }
    }
    appInfo() {
        return`Descargas:<b>${this.descargas}</b><br>
        Puntuacion:<b>${this.puntuacion}</b><br>
        Peso:<b>${this.peso}</b><br>
       `;

    }
}
app1 = new App("16.000", "5 estrellas", "945Mb");
app2 = new App("800", "3.2 estrellas", "945Mb");
app3 = new App("600.000", "5 estrellas", "900Mb");
app4 = new App("16.000", "2.1 estrellas", "900Mb");
app5 = new App("16.000", "5 estrellas", "900Mb");
app6 = new App("16.000", "2.1 estrellas", "945Mb");
app7 = new App("16.000", "5 estrellas", "900Mb");

document.write(`
 ${app1.appInfo()}<br>
 ${app2.appInfo()}<br>
 ${app3.appInfo()}<br>
 ${app4.appInfo()}<br>
 ${app5.appInfo()}<br>
 ${app6.appInfo()}<br>
 ${app7.appInfo()}<br>
 `);


