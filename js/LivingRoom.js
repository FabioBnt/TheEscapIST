function playAmongUsAudio(url){
    new Audio(url).play();
}

function openPopupTemoignage() {
    var popup = document.getElementById("popupStory");
    popup.classList.toggle("show");
}