let operation = document.getElementById('operation');
let result = document.getElementById('result');
let calcbutton = document.getElementById('calcbutton');

function calculation(){
    let value1 = parseFloat(document.getElementById('value1').value);
    let value2 = parseFloat(document.getElementById('value2').value);
    operator = operation.value;

    if (value1 === '' || isNaN(value1) || value2 === '' || isNaN(value2)) {
        alert('Некорректный ввод значений. Пожалуйста, убедитесь, что вы вводите числа.');
        return;
    }
    let resultValue;
    switch (operator) {
        case "+":
            resultValue = value1 + value2;
            break;
        case "-":
            resultValue = value1 - value2;
            break;
        case "*":
            resultValue = value1 * value2;
            break;
        case "/":
            if (value2 === 0) {
                alert('Деление на ноль запрещено');
                return;
            }
            resultValue = value1 / value2;
            break;
    }
    result.textContent = `${value1} ${operator} ${value2} = ${resultValue}`;
}

calcbutton.addEventListener('click', calculation);