//Un array es un contenedor
//ejemplo una caja donde esta almacenado diferntes tipos de alimentos
let frutas=["banana","manzana","pera"];
document.write(frutas[0]);
document.write("<br>")

//Arrays Asociativos
//sintaxis
 let pc = {
    nombre:"Luis",
    procesador:"intel core i5",
    ram:"16gb",
    espacio:"1tb"
 };

 let nombre=pc["nombre"];
 let procesador=pc["procesador"];
 let ram=pc["ram"];
 let espacio=pc["espacio"];
 let frase=`El nombre de mi PC es: <b>${nombre}</b> <br>
            El procesador es : <b>${procesador}</b> <br>
            Y la memoria ram es: <b>${ram}</b> <br>
            El espacio del dico es de: <b>${espacio}</b> <br>`;
  document.write(frase);

  ///Bulques e Iteracion
  //sentencia while 
   let num=1;
   while(num<=5){
      num++;
      document.write(num+"<br>");
   }