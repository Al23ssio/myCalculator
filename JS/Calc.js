//let result = 0;

//Array<ButtonHTMLElement>
let allBtn = document.querySelectorAll("button");

let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");
let result = document.getElementById("result");

allBtn.forEach((btn) => {
    console.log(btn);
    
    //btn.innerText = "ciao";

    btn.addEventListener("click", (event) => {
        console.log(event.target.attributes);
        
        var operation = event.target.attributes["operation"].value;
        console.log("OP: ", operation);
        

        let a = parseFloat(val1.value);
        //console.log(typeof a);
        let b = parseFloat(val2.value);

        let res = performOperation(a, b, operation);

        let memory = document.getElementById("memory");
        
        result.innerText = res;
    })
})

function performOperation(a, b, operation) {
    switch(operation) {
        case "+":
            return somma(a, b);
        case "-":
            return sottrazione(a, b);
        case "*":
            return moltiplicazione(a, b);
        case "/":
            return divisione(a, b);
        default:
            return Error("Operazione non valida");
    }
}

function myLog(a, b, operation) {
    this.val1 = a;
    this.val2 = b;
    this.operation = operation;

    this.fnLoad = function() {
        console.log("LOAD: ", this.val1, this.val2);
        
        val1.value = this.val1;
        val2.value = this.val2;
    }
}

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
