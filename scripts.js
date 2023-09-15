/*
document.addEventListener("DOMContentLoaded", function(){
    createKeypad();
})

function createKeypad() {
    let keypad = document.querySelector(".keypad");
    keypad.style.gridTemplateRows = "repeat(4, 1fr)";
    keypad.style.gridTemplateColumns = "repeat(4, 1fr)";

    for(let i = 16; i >= 1; i--) {
        let div = document.createElement("div");
        div.innerHTML = `${i}`;

        if(i === 16) {
            div.innerHTML = "7";
        } else if(i === 15) {
            div.innerHTML = "8";
        } else if(i === 14) {
            div.innerHTML = "9";
        }
        keypad.insertAdjacentElement("beforeend", div);
    }
}
*/