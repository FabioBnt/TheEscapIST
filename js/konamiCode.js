let keys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    65: "a",
    66: "b"
};

let konamiCode = ["up","up","down","down","left","right","left","right","b","a"];

document.addEventListener("keydown", checkCode, false);

let keyCount = 0;

let timerID;

function checkCode(event) {
    console.log(event.keyCode);
    let keyPressed = keys[event.keyCode];
    if (keyPressed === konamiCode[keyCount]) {
        keyCount++;

        window.clearTimeout(timerID);
        timerID = window.setTimeout(resetKeyState, 5000)

        if (keyCount === konamiCode.length) {
            codeActivated();
            resetKeyState();
        }
    } else {
        resetKeyState();
    }
}

function codeActivated(){
    alert("Konami Code Activated ! :D");
}

function resetKeyState(){
    keyCount = 0;
}