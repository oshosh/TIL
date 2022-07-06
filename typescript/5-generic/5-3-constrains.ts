{
  //either: a or b
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay(): void {
      console.log("full time!!!");
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay(): void {
      console.log("part time!!!");
    }
    workPartTime() {}
  }
  
  // bad code
  function pay(employee: Employee): Employee {
    employee.pay(); 
    return employee;
  }

  // constrains
  function payGeneric<T extends Employee>(employee: T): T {
    employee.pay(); // 코드에서는 employee의 T의 타입을 추론 할 수 없는 문제가 생김 <T extends Employee>
    return employee;
  }
  
  // T의 값 중에 있는 key로만 사용함.
  function getValue<T, K extends keyof T>(obj: T, str: K): T[K] {
    return obj[str];
  }
    
  const osh = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  osh.workFullTime();
  bob.workPartTime();

  // 위에 까지는 fulltime 인지 parttime인지 구분이 가능했으나
  // implements Employee 자체는 fulltime 인지 parttime인지 구분이 안되어 as 를 활용해버리는 일이 나타남..

  //  bad code
  // const oshAfterPay = pay(osh) as FullTimeEmployee;
  // oshAfterPay.workFullTime;
  const oshAfterPay = pay(osh);
  const bobAfterPay = pay(bob);

  // good code
  const oshGenericAfterPay = payGeneric(osh);
  
  const obj = {
    name: "osh",
    age: 20,
  };

  const obj2 = {
    animal: "dog",
  };

  console.log(getValue(obj, "name")); // osh
  console.log(getValue(obj, "age")); // 20
  console.log(getValue(obj2, "animal")); // dog
  // console.log(getValue(obj2, "score")); // score는 obj2의 키가 없기 때문에 error
}
