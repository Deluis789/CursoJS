  ///Bulques e Iteracion
  //sentencia while 
  /*let num=0;
  while(num<=5){
     num++;
     document.write(num+"<br>");
  }
  ///////
  // do while//primero se haceluego se pregunta
//let numero=0;
//   do{
//     document.write(numero+"<br>");
//     numero++;
//   }
//   while(numero >6)
///break sirve para que se detenga el while
  /*while(numero<1000){
    numero++;
    document.write(numero);
    if(numero==10){
        break;
    }
  }*/

  /////////////////////////
  ////////FOR///////////////BUCLE DETERMINADO 
  /*SINTAXIS 
    declaramos variable-inicializamos;condicion;iteramos*/
/*for(let i=0;i<6;i++){
  document.write(i + "<br>");
}
for(let i=6;i>=0;i--){
  document.write(i+"<br>");
}*/
// for (let i=0;i<20;i++){
//     if(i==13){
//       continue; ///PARA QUE SALTE EL NUMERO
//     }
//     document.write(i+"<br>");
// }
///////////////////////////
/////FOR IN////////////////
/*let animales=["gato","perro","loro"];
animales.edad=20;
for(hh in animales){
  document.write(hh+"<br>"); ///la diferencia es 
  //qyue aqui necesitamos animales 
}
///////////////////////////////////
/////////FOR OFF////////////////////
document.write("<br>");
/////////////////////////////
for(hh of animales){
  document.write(hh+"<br>");
  ////y aqui solo necesitamos imprimir el hh
}*/
/////////////////////////////////////
/////SENTENCIA LABEL////////////////asocia buqlue a cualquier nombre
array1=["maria","jose","luis"];
array2=["pedro","marcelo",array1];

forTotal://// es como un contenedor total
for(let array in array2){
  if (array==2){
    for(let array of array1){
      if(array =="maria"){
        continue forTotal;
      }
      document.write(array +"<br>");
    }
  }else{
    document.write(array2[array]+"<br>");
  }
}


