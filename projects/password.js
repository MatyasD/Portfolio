const symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*?0123456789";
const password = document.querySelector("p")


function generate() {

    password.innerHTML = "";

    for (i = 0; i <= 12; i++) {

        let randomPosition = Math.round(Math.random() * symbols.length)
        password.innerHTML += symbols.charAt(randomPosition)

    }

}




