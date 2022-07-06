{
  interface Either<T, K> {
    left: () => T;
    right: () => K;
  }

  class SimpleEither<T, K> implements Either<T, K> {
    constructor(private leftValue: T, private rightValue: K) {}
    left(): T {
      return this.leftValue;
    }
    right(): K {
      return this.rightValue;
    }
  }
    
  const either = new SimpleEither<string, number>("하이", 5);
  console.log(either.left());
  console.log(either.right());
}
