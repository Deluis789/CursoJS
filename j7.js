// function saludar(){
//     respuesta=prompt("¿hola luis? como te fue hoy?");
//     if(respuesta=="bien"){
//     alert("que genial");
//     }else{
//     alert(" Que pena");
//     }
// }
// saludar();//PARA EJECUTAR LA FUNCION

//////FUNCION RETURN/////////////////////
// function saludo(){
//     alert("hola");
//     return ("okeay");
// }
//  let sal=saludo();
//  document.write(sal);

//////////////FUNCIONES CON PARAMETROS////
function suma(num1,num2){
    let res=num1+num2;
    document.write(res);
    document.write("<br>");
}
suma(12,32);
suma(7,82);
//ejemplo 2//
// function saludar(nombre){
//     let frase= `hola  ......${nombre}`;
//     document.write(frase);
// }
//saludar("jorge");
// const saludar= function(nombre){
//     let frase="hola "+nombre;///OTRA FORMA 2 
//     document.write(frase);
// }
// saludar("luis");

//FUNCIONES FLECHA OTRA FORMA DE CREAR UNA FUNCION
const saludar= (nombre)=>{
    let frase="hola que tal ? "+nombre;///OTRA FORMA 3
    document.write(frase);
}
    saludar("Jorge luis");

