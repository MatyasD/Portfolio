function setColorMode() {
    var elementBody = document.body;

    if (localStorage.getItem("colorMode") == "light") {
        elementBody.classList.add("light-mode");

    } else {
        elementBody.classList.remove("light-mode");
    }

};

setColorMode();