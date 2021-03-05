const bf = new Audio("sounds/bf.mp3");
const t = new Audio("sounds/t.mp3");
const kch = new Audio("sounds/kch.mp3");
const scratch = new Audio("sounds/scratch.mp3");
const yo = new Audio("sounds/yo.mp3");
const setBeat = new Audio("sounds/setbeat.mp3");
for (var i = 0; i < document.querySelectorAll(".set button, spanJ").length; i++)

{ document.querySelectorAll(".set button")[i].addEventListener("click",
 function() { 
     var innerText = this.innerText; 
     keyBoard(innerText);
     toggleDrum(innerText)
     }
     );
}
document.addEventListener("keypress", function (event){
    keyBoard(event.key);
toggleDrum(event.key)
})
function keyBoard (keyBoard) {
    switch (keyBoard) {
        case "w":
            bf.play();
            break;
    case "a": 
    t.play();
    break;
    case "s":
        kch.play();
        break;
        case "d":
            scratch.play();
            break;
            case "j":
                yo.play();
                break;
                case "k":
                    setBeat.play();
            break;
    }
}
function toggleDrum(key) {
let active = document.querySelectorAll("." + key);
active.forEach(element => {
element.classList.add("key-active") 
setTimeout(() => {
    element.classList.remove("key-active") 
}, 200);
})}