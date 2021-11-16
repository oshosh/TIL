const solution = (str) => {
    let result = '';

    return console.log(result);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function (line) {
    solution(line)
    rl.close();
}).on("close", function () {
    process.exit();
});