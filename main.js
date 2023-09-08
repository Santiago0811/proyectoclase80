nombre_alumno_array = [];
function enviar()
{
 var nombre_1 = document.getElementById("nombre_1").value;
 var nombre_2 = document.getElementById("nombre_2").value; 
 var nombre_3 = document.getElementById("nombre_3").value;
 var nombre_4 = document.getElementById("nombre_4").value;
  
nombre_alumno_array.push(nombre_1);
nombre_alumno_array.push(nombre_2);
nombre_alumno_array.push(nombre_3);
nombre_alumno_array.push(nombre_4);
console.log(nombre_alumno_array);

document.getElementById("vernombres").innerHTML = nombre_alumno_array;
document.getElementById("botonenviar").style.display = "none";
document.getElementById("botonordenar").style.display = "inline-block"; }
function ordenar() 
{ 
    nombre_alumno_array.sort();
     console.log(nombre_alumno_array);
      document.getElementById("vernombres").innerHTML = nombre_alumno_array;
     }