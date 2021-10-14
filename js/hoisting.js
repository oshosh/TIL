age = 6;
age++;
console.log(age)

var age;


// console.log(name)
let name;
console.log(name)

name = 'Mark'
console.log(name)


let foo = 1; // 전역 변수

{
    console.log(foo); // ReferenceError: foo is not defined
    let foo = 2; // 지역 변수
    // console.log(foo)
}