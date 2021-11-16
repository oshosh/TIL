{
    /**
     * Javascript
     * Primitive: number, string, boolen, bigint, symbol, null, undefined
     * Object: function, array...
     */

    // number
    const num: number = -6;

    // string
    const str: string = 'hello';

    // boolean
    const boal: boolean = false;

    // undefined
    let name: undefined; // X

    // union type과 함께 쓰임
    let age: number | undefined;
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return undefined;
    }

    // null
    let person: null; // X

    // union type과 함께 쓰임
    let person2: string | null;

    // unknown (가능하면 쓰지 않는게 좋다.)
    // javascript 라이브러리와 혼용하는 경우 리턴하는 타입에 대하여 모호거나 알 수 없을때 사용을 한다.
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any (가능하면 쓰지 않는게 좋다.)
    // 어떤 타입이든 사용이 가능하도록 쓰이는 형태를 말함
    let anything: any = 0;
    anything = 'hello';

    // void
    // 아무것도 리턴하지 않을 경우
    // void의 경우는 생략하거나 회사의 스타일 가이드에 따라 명시하는게 좋다.
    function print(): void {
        console.log('hello');
        return;
    }

    let unusable: void = undefined // X

    // never
    // 함수에서 절대로 리턴을 하지 않을 경우를 명시할때 사용 (error 메세지를 던진다거나 while을 이용한 무한 반복문)
    function throwError(message: string): never {
        // message -> server (log) 
        throw new Error(message)
        while (true) { }
    }
    let neverEnding: never; // X

    // object

    // 가능하면 구체적으로 명시하여 사용
    let obj: object // X
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({ name: 'osh' });
    acceptSomeObject({ animal: 'dog' });
}


