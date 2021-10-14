// 변수의 유효 범위 (scope)
// const , let => 블록({}) 스코프
// 공간 밖에서는 알수가 없음

// 블록
{
    const name = "Mark";
    console.log(name);
}

// 오류
//console.log(name);

// 밖에서 안으로
let age = 37;
{
    age++;
    console.log(age);
}
console.log(age);

// 중첩
{
    {
        {
            console.log(age);
        }
    }
}
console.log('----------------------------------------------')