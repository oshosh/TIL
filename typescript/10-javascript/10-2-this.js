{
  console.log(this);

  function simpleFunc() {
    console.log(this);
  }
  simpleFunc();
  console.clear();

  class Counter {
    count = 0;
    increase = function () {
      console.log(this);
    };
  }

  const counter = new Counter();
  counter.increase();

  const caller = counter.increase;
  const bindCaller = counter.increase.bind(Counter);
}
