// Initialisation des variables globales
var nb_msg = -1;
var nb_car = 0;
var chaine = "";
var id;

function changeMessage() {
  nb_msg++;
  if (nb_msg <= nb_car) {
    document.getElementById("instructions").innerHTML = chaine.substr(
      0,
      nb_msg
    );
  } else {
    clearInterval(id);
  }
}

function afficheMessage(monTexte) {
  nb_msg = -1;
  chaine = monTexte;
  nb_car = chaine.length;
  id = setInterval("changeMessage()", 20);
}
var clickX;
var clickY;

const image = document.getElementById("imageSrc").getBoundingClientRect();

function printMousePos(event) {
	clickX = event.clientX;
	clickY = event.clientY;

	const image = document.getElementById("imageSrc").getBoundingClientRect();

	const posClickX = (clickX - image.x) * 100 / image.width;
	const posClickY = (clickY - image.y) * 100 / image.height;

	console.log(posClickX, posClickY);

}

document.addEventListener("click", printMousePos);


