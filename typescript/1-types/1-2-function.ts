{
    // // 일반 JS
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // // Typescript
    // function add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // // 일반 JS
    // function jsFetchNum(id) {
    //     // code...
    //     // code...

    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // // TS
    // function fetchNum(id: string): Promise<number> {
    //     // code...
    //     // code...
    //     // code...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // JS -> TS
    // Optional parameter
    function printName(firstName: string, lastName?: string) {
        console.log(firstName)
        console.log(lastName)
    }

    function printName2(firstName: string, lastName: string | undefined) {
        console.log(firstName)
        console.log(lastName)
    }

    printName('Steve', 'Jobs');
    printName('Oh');
    printName('Anna', undefined) // 문제 없음...

    printName2('Oh', undefined);

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    // Rest parameter
    function addNumbers(...rest: Array<number>): number {
        return rest.reduce((acc, cur) => acc + cur, 0)
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5));
}










