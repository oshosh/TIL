const solution = (data) => {

};

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let data = [];
rl.on('line', function (line) {
    data = line.split(' ').map((el) => el);
    rl.close();
}).on('close', function () {
    solution(data);
    process.exit();
});