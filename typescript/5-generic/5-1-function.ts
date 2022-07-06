{
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("no valid number");
    }
    return arg;
  }
  
  const result = checkNotNull<number>(123);
  console.log(result);
}
