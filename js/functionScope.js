// var 의 유효 범위 - 함수 스코프
var a = 0;

// 즉시 실행 함수 (Immediately-invoked function expression)
(function () {
    a++;
    console.log(a);
})();

console.log(a);

// 즉시 실행 함수를 블록이라 가정을 하고 b를 호출했을때
// 블록 내부의 b는 0으로 호출 되나 밖에서 b를 증가시키고 접근했을때 호출이 안됨
(function () {
    var b = 0;
    console.log(b);
})();

// 오류 발생 !
//b++;
//console.log(b);
console.log('----------------------------------------')
var c = 0;
{
    c++;
    console.log(c);
}

{
    var d = 0;
    console.log(d);
    console.log(c)
}
console.log(d);
