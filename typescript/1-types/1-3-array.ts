{
    // Array
    const fruits: string[] = ['🍅', '🍌'];
    const scroes: Array<number> = [1, 3, 4];

    // 주어진 데이터를 변경하는것을 막거나 안하기 위해서는 string[]과 함께 readonly를 사용하지만
    // Array<string>은 readonly가 불가능하다.
    function printArray(fruits: readonly string[]) {

    }

    // readonly 배열 튜플만 가능
    // function printArray2(fruits: readonly Array<string>) {

    // }

    // Tuple -> interface, type alias, class 로 대체하는게 좋다.
    // 각각 튜플에 해당하는 타입에 접근하기 위해서는 student[0] 이러한 형태로 index로 접근하면 
    // 가독성부분이 매우 떨어지기 때문에 불편하다.

    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123

    // Object Destructuring를 사용하면 좀 보기 좋다.
    // 하지만 name 혹은 age와 같은 형태로 결정지어 쓰기때문에 단점은 있다.
    const [name, age] = student;

}