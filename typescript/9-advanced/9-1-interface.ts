{
  // 타입과 인터페이스는 대부분 거의 비슷하게 사용 할 수 있으나 몇가지 차이점이 있다.
  type PositionType = {
    x: number;
    y: number;
  };

  // interface 연달아 쓰기
  interface PositionInterface {
    x: number;
    y: number;
  }

  interface PositionInterface {
    z: number;
  }

  const obj1: PositionType = {
    x: 1,
    y: 1,
  };

  // 오직 인터페이스만 여러번 붙쳐서 사용 가능함
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  class Pos1 implements PositionType {
    x = 1;
    y = 1;
  }

  class Pos2 implements PositionInterface {
    x = 1;
    y = 1;
    z = 1;
  }

  interface ZPositionInterface extends PositionInterface {
    z: number;
  }

  type ZPositionType = PositionType & {
    z: number;
  };

  // Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };

  type Name = Person["name"]; // string
  type NumberTye = number; // 타입 지정
  type Direction = "left" | "right"; //union
}
