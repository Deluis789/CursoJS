///Ejercicio 1 
// let gratis = false;

// const validarCliente = (tiempo) => {
//     let edad = prompt("¿Cual es tue edad");
//     if (edad>18){
//     if(tiempo>=2 && tiempo <7 && gratis==false){  
//         alert("Puedes pasar gratis eres la primera persona depues de las 2 AM ");
//         gratis= true;
//     }else{
//         alert(`Son las ${tiempo}:00 Hrs puedes pasar pero compras entrada`);
//     }
    
//     }else{
//         alert("No puedes pasar no eres mayor de 18 años");
//          }
// }

// validarCliente(20);
// validarCliente(4);

////////////////////////////////////////////////////////////////////////
// Ejercicio 2
//////////////////////////////////////////////////////////////////////

// let cantidad = prompt("¿Cuantos alumnos son:");
// let alumnosTotales = [];
// for(i=0;i<cantidad;i++){
//     alumnosTotales[i]=[prompt("Nombre del alumno "+(i+1)),0];
// }

// const tomarAsistencia = (nombre,p)=>{
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P"){
//         alumnosTotales[p][1]++;
//     }
// }
// for (i=0;i<30;i++){
//     for(alumno in alumnosTotales){
//         tomarAsistencia(alumnosTotales[alumno][0],alumno);
//     }
// }
// for(alumno in alumnosTotales) {
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//     ___________________Presentes: ${alumnosTotales[alumno][1]}<br>
//     ___________________Ausentes: ${30 - alumnosTotales[alumno][1]} `;
//     if(30 - alumnosTotales[alumno][1] > 18){
//         resultado+="<b style = 'color:red'>REPROBADO POR INASISTENCIAS </b><br><br>";
//     }else {
//         resultado+="<br><br>";
//     }
//     document.write(resultado);
// }

/////////////////////////////////////////////////////////////////////////
////////////////Ejercicio 3/////////////////////////////////////////////

const suma = (num1,num2)=>{
    return parseInt(num1)+parseInt(num2);
}
const resta = (num1,num2)=>{
    return parseInt(num1)-parseInt(num2);
}

const multiplicacion = (num1,num2)=>{
    return parseInt(num1)*parseInt(num2);
}

const division = (num1,num2)=>{
    return parseInt(num1)/parseInt(num2);
}
alert("¿Que operacion deseas realizar?");
let ope = prompt("1: suma , 2: resta , 3: multiplicacion , 4: division");
if(ope == 1){
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segndo numero para sumar");
    resultado = suma (numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if(ope==2){
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = resta (numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if(ope==3){
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = multiplicacion (numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if(ope==4){
    let numero1 = prompt("Primer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    resultado = division (numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else{
    alert("No se ha encontrado la operacion");
}


