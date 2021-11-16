const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :
    ``).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

console.log(input().split(' '))

let test = input().split(' ').map(Number);
let a = input().split(' ').map(Number);
let b = input().split(' ').map(Number);

const solution = (a, b) => {

    console.log()
}

solution(a, b)