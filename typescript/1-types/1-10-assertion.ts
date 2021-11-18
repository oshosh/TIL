{
    /**
     * Type Assertions (타입 표명 = 타입 단언)
     * 프로그래머가 직접 컴퍼일러한테 특정 변수에 대하여 힌트를 주는것으로 
     * 정말로 백퍼센트 정확할 경우에만 사용해야한다.
     */

    function jsStrFunc(): any {
        return 'hello';
    }
    const result = jsStrFunc();

    // casting
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)) // X

    function findNumbers(): number[] | undefined {
        return undefined
    }
    const numbers = findNumbers();
    // numbers.push(2) // X

    // !를 넣어 정말로 numbers는 배열안에 값이 있다고 표현할때 사용한다.
    numbers!.push(2)
    // 혹은 아래와 같이 쓰인다 undefined가 절대 될 수 없다고 장담할때
    const numbers2 = findNumbers()!;

}