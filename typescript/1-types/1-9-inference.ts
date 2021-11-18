{
    /**
     * type inference (타입 추론)
     * 웬만하면 타입을 명시하는게 좋다.
     *  */

    let text = 'hello';
    // text = 1; // x
    text = 'world'

    // 함수 파라메터에 타입을 안넣으면 any 타입으로 추론됨.
    function print(message = 'hello') {
        console.log(message);
    }

    function add(x: number, y: number) {
        return x + y;
    }

    const result = add(1, 2); // number로 타입 추론됨
}