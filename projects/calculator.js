const display = document.querySelector("p");
const buttons = document.getElementsByTagName("button");


for (i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute("onclick", "action(this)")
}


function action(button) {


    let symbol = button.innerHTML;

    if (symbol == "=") {
        display.innerHTML = eval(display.innerHTML);
    } else if (symbol == "AC") {
        display.innerHTML = "";
    } else {
        if (symbol == 0) {
            display.innerHTML = symbol;
        } else {
            display.innerHTML += symbol;
        }
    }

}