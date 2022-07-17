{
  const obj = {
    name: "osh",
  };
  obj.name;
  obj["name"];

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // Name is string type
  const text: Name = "1231";

  type Gender = Animal["gender"]; // "male" | "female"

  // Animal의 키 중에서 사용하겠다..
  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key1: Keys = "age";
  const key2: Keys = "gender";
  const key3: Keys = "age";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "osh",
    gender: "male",
  };
}
