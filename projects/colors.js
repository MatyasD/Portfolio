const rectangles = document.getElementsByTagName("button");
const points = document.getElementById("points");
const hex = document.getElementById("hex");
let rightAnswers = 0;

function generateColors() {

    for (i = 0; i < rectangles.length; i++) {
        let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        rectangles[i].style.backgroundColor = randomColor;
        hex.innerHTML = randomColor;
    }


}




function createRound() {
    var randomNumber = Math.floor(Math.random() * 4);
    rectangles[randomNumber].classList.add("right-answer")
    rectangles[randomNumber].setAttribute("onclick", "nextRound()")

}




function nextRound() {

    for (i = 0; i < rectangles.length; i++) {
        if (rectangles[i].classList.contains("right-answer")) {
            rectangles[i].classList.remove("right-answer");
            rectangles[i].removeAttribute("onclick")

        } else {

        }
    }

    points.innerHTML = rightAnswers;
    rightAnswers += 1;
    generateColors();
    createRound();
}

nextRound();




console.log()


console.log(rectangles)

// rectangles[randomNumber].style.backgroundColor = randomColor;


