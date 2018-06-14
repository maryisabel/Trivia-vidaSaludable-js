// Declaramos variables de las respuestas y del resultado final
var firstAnswer = '';
var secondAnswer = '';
var thirdAnswer = '';
var fourthAnswer = '';
var result = 0;

// innerHTML se usa para reemplazar completamente el contenido de un elemento
// value nos devuelve el valor del elemento
function enter() {
  welcome.style.fontSize = "25pt";
  welcome.style.color = "#66CC99";
  document.getElementById("name").innerHTML = document.getElementById("firstname").value;
  document.getElementById("ask").innerHTML = "\u00BFDeseas jugar?";
  document.getElementById("welcome").style.display = "block";
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "block";
}

function play() {
  var answerForPlay = document.getElementsByName("answer0")[0].checked;
  if (answerForPlay === false) {
      document.getElementById("section2").style.display = "none";
      document.getElementById("welcome").style.display = "none";
      ask.style.fontSize = "30pt";
      document.getElementById("ask").innerHTML = "Ohhh que pena :(";
  }
  if (answerForPlay === true) {
      document.getElementById("section2").style.display = "none";
      document.getElementById("welcome").style.display = "none";
      document.getElementById("ask").innerHTML = "Primera pregunta:";
      document.getElementById("section3").style.display = "block";
  }
}

function question1() {
  var answer = document.getElementsByName("answer1")[0].checked;
  document.getElementById("ask").innerHTML = "Segunda pregunta:";
  document.getElementById("section3").style.display = "none";
  document.getElementById("section4").style.display = "block";
  if (answer === true) {
    firstAnswer = "Beber agua";
    result = result + 1;
    text1_1.style.backgroundColor = "#00FA9A";
  }
  if (answer === false) {
    firstAnswer = "Beber gaseosa";
    result = result + 2;
    text1_2.style.backgroundColor = "#00FA9A";
  }
  return firstAnswer;
}

function question2() {
  var answer = document.getElementsByName("answer2")[0].checked;
  document.getElementById("ask").innerHTML = "Tercera pregunta:";
  document.getElementById("section4").style.display = "none";
  document.getElementById("section5").style.display = "block";
  if (answer === true) {
    secondAnswer = "Papas fritas-Pizza";
    result = result + 1;
    text2_1.style.backgroundColor = "#00FA9A";
  }
  if (answer === false) {
    secondAnswer = "Ensalada-Pollo a la plancha";
    result = result + 2;
    text2_2.style.backgroundColor = "#00FA9A";
  }
}

function question3() {
  var answer = document.getElementsByName("answer3")[0].checked;
  document.getElementById("ask").innerHTML ="Cuarta pregunta:";
  document.getElementById("section5").style.display = "none";
  document.getElementById("section6").style.display = "block";
  if (answer === true) {
    thirdAnswer = "Hacer ejercicios";
    result = result + 1;
    text3_1.style.backgroundColor = "#00FA9A";
  }
  if (answer === false) {
    thirdAnswer = "Ver televisi\u00F3n";
    result = result + 2;
    text3_2.style.backgroundColor = "#00FA9A";
  }
}

function question4() {
  var answer = document.getElementsByName("answer4")[0].checked;
  document.getElementById("section6").style.display = "none";
  document.getElementById("section7").style.display = "block";
  if (answer === true) {
    fourthAnswer = "6-8 horas";
    result = result+1;
    text4_1.style.backgroundColor = "#00FA9A";
  }
  if (answer === false) {
    fourthAnswer = "3-5 horas";
    result = result + 2;
    text4_2.style.backgroundColor = "#00FA9A";
  }
  if (result > 0 && result < 6) {
      document.getElementById("ask").innerHTML ="Felicitaciones!!!! Eres una persona muy saludable.";
  } else {
      document.getElementById("ask").innerHTML ="Cuidado! Tu salud puede estar en riesgo, trata de llevar una vida saludable.";
  }
  ask.style.color = "#BC8F8F";
  ask.style.fontSize = "15pt";
}
