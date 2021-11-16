{
  /**
   * Type Aliases
   * 새로운 타입으로 정의가 가능
   */

  // Text의 타입을 string으로 지정
  type Text = string;
  const name: Text = 'osh';
  const address: Text = 'korea';

  type Num = number;

  // object 타입 또한 정의 가능
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'osh',
    age: 12,
    // test: 'dog',  // error
  };

  /**
   * String Literal Types
   * 타입을 문자열로 지정이 가능
   */
  type Name = 'name';
  let oshName: Name;
  // oshName = 'sdfsdfsadf' // 할당 불가능
  oshName = 'name';

  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
}
