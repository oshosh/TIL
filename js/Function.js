// const sum = new Function("a", "b", "c", "return a + b + c");
// console.log(sum(1, 2, 3));

// global.a = 5

// {
//     const a = 1;
//     const test = new Function('return a');
//     console.log(test())
// }

// {
//     const a = 2;
//     const test = function () {
//         return a;
//     }

//     console.log(test())
// }

// 2. 생성자 함수를 이용한 새로운 객체 생성
// function Person(name, age) {
//     console.log(this)
//     this.name = name;
//     this.age = age;
// }

// console.log(new Person('만수르', '22').age)

// const person2 = (name, age) => {
//     return { name, age }
// }

// console.log(person2('Mark', '33'))

// 3. 커링

// function add(a) {
//     return function (b) {
//         return a + b
//     };
// };

// var plus = add(5);
// console.log(plus(2))
// console.log(add(2)(5))

// const add2 = (a) => (b) => {
//     return a + b
// }

// console.log(add2(2)(5))

function curry(func) {
    // 함수
    console.log(func.length)
    return function curried(...args) {

        // number 인자 2개 >= 익명함수 갯수
        if (args.length >= func.length) {
            console.log(func.apply(this, args))
            return func.apply(this, args);
        } else {
            return function (...args2) {
                console.log(args.concat(args2))
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}


function sum(a, b, c) {
    return a + b + c
}

var number = curry(sum)
console.log(number(6)(2, 3))


//4. 콜백
function funcCall(callback) {
    console.log('나는 funcCall 이야')
    callback();
}

funcCall(function () {
    console.log('나는 callback 인데 ? ㅋ')
})

funcCall(() => {
    console.log('애로우 펑션도 된다구')
})

funcCall(() => {
    console.log('애로우 펑션도 된다구')
})

function ask(boolen, yes, no) {
    if (boolen) yes()
    else no()
}

function showOk() {
    console.log('call back yes 호출~')
}

function showNoob() {
    console.log('call back no 호출~')
}

ask(false, showOk, showNoob)