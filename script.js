let number1 = '';
let number2 = '';
let operator = '';

const result = document.querySelector('#result');

const appendNumber = (num) => {
    result.value += num;
}

const clearResult = () => {
    result.value = '';
    number1 = '';
    number2 = '';
    operator = '';
}

const setOperator = (op) => {
    if (result.value !== '' && !operator) {
        number1 = parseFloat(result.value);
        operator = op;
        result.value += op;
    }
}

const calculate = () => {
    if (result.value !== '' && operator) {
        const parts = result.value.split(operator);
        if (parts.length === 2) {
            number1 = parseFloat(parts[0]);
            number2 = parseFloat(parts[1]);
            let res = 0;

            switch (operator) {
                case '+':
                    res = number1 + number2;
                    break;
                case '-':
                    res = number1 - number2;
                    break;
                case '*':
                    res = number1 * number2;
                    break;
                case '/':
                    if (number2 === 0) {
                        res = 'Infinity';
                    } else {
                        res = number1 / number2;
                    }
                    break;
                default:
                    return;
            }

            result.value = res;
            number1 = '';
            number2 = '';
            operator = '';
        }
    }
}