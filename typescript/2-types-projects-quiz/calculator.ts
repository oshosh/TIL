/**
 * Let's make a calculator 🧮
 */

type Cmd = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(cmd: Cmd, a: number, b: number) {
    let result = 0

    if (cmd === 'add') {
        result = a + b
    } else if (cmd === 'divide') {
        result = a / b
    } else if (cmd === 'multiply') {
        result = a * b
    } else if (cmd === 'remainder') {
        result = a % b
    } else {
        result = a - b
    }

    return result
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
