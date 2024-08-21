/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let quien = ["El perro", "Mi tia", "El repartidor", "Mi pajaro", "Mi conejo"];
  let accion = ["se comio", "me rompio", "me perdio"];
  let que = ["mi tarea", "mi telefono", "el auto"];
  let cuando = [
    "antes de la clase",
    "cuando estaba durmiendo",
    "cuando me estaba ejercitando",
    "durante el almuerzo",
    "mientras estaba rezando"
  ];

  function getRandomText(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  let quienTexto = getRandomText(quien);
  let accionTexto = getRandomText(accion);
  let queTexto = getRandomText(que);
  let cuandoTexto = getRandomText(cuando);

  let oracion =
    quienTexto + " " + accionTexto + " " + queTexto + " " + cuandoTexto + ".";
  console.log(oracion);

  document.getElementById("excuse").innerHTML = oracion;
};
