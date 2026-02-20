function WhenButtonClecked(){
    let value1 = document.getElementById(value1).value;
    let value2 = document.getElementById(value2).value;
    let operation = document.getElementById(operation).value;
    let result = null;
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    switch (operation) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "*":
            result = value1 * value2;
            break;
        case "/":
            result = value1 / value2;
            break;
    }
    document.getElementById("results").innerText = result;

}