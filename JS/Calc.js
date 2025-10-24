let result = 0;

//Array<ButtonHTMLElement>
let allBtn = document.querySelectorAll("button");

allBtn.forEach((btn) => {
    console.log(btn);
    
    //btn.innerText = "ciao";

    btn.addEventListener("click", (event) => {
        console.log(event.target);
    })
})

function somma(a, b) {
    return a + b;

}

function sottrazione(a, b) {
    return a - b;
}

function moltiplicazione(a, b) {
    return a * b;
}

function divisione(a, b) {
    return a / b;
}
