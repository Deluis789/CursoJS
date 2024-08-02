//CONCATENACIÓN
saludo="hola pedro <br>";
pregunta="como estas <br>";

frase =saludo+pregunta;
document.write(frase);

//PARA NUMEROS 
    /*numero1=5;
    numero2=8;
    res="<br>" +numero1 + numero2;
    document.write(res);*/


 //CONCAT

 /*numero1="<br>53";//Si o si tiene que aver un tipo string
 numero2=6;//esto puede ser un numero
 frase=numero1.concat(numero2);
 document.write(frase);*/

 ///CONCATENACION
  //nombre ="Luis Diaz";
  //frase=`soy ${nombre} y estoy caminando`
  //bactins o acento fuerte se saca alt+92 `
  //document.write(frase);

  //OPERADORE INTERMEDIOS

  //Operadores de comparacion(img)

//   let numero1= 23;
//   let numero2=13;  //ESTE TE DEVUELVE UN TIPO BOOLEANO TRUE O FALSE
//   let texto="texto1";
//   let texto2="23";

//   document.write("<br>");
//   document.write(numero2==numero2); //(==si son iguales)
//   document.write("<br>");
//   document.write(numero1!=numero2);///(== sin son diferentes)
//   document.write("<br>");
//   document.write(texto===texto2); ///esto es para ser estrictamente iguales hasta en que tipo es


 ///AND  OPERADOR
 num1=12;
 num2=24;
 afirmacion1=num1>num2;
 afirmacion2=num1!=num2;
document.write(afirmacion1 && afirmacion2);//EL and & solo devuelve tipo booleano el resuntado
 //OR (Este devuelve si hay un verdadero en cualquier de los lados devuelve verdader)
document.write("<br>");
 document.write(afirmacion1 || afirmacion2);
 //CAMBIO DE RESULTADO(!)
 document.write("<br>");
document.write(!afirmacion1);

// CAMEL CASE LETRAS EN CAMELLO
// EJEMPLO
// holaComoEstas

// CONDICIONALES
// ES UNA SENTENCIA EN BLOQUE{}

// if (true){//solo se ejecita cuando es true(verdadero)
//     alert("hola");
//}
nombre="jj"
if (nombre=="luis"){
    alert("tu nombre es papi");
}
else if(nombre=="diaz"){
    alert("tu nombre es buenardo");
}
else{
    alert("no tienes nombre ctm");
}
