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

  function pay(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  // constrains
  function payGeneric<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
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
}
