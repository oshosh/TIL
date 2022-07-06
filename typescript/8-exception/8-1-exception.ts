{
  function readFile(fileName: string): string {
    if (fileName === "not exist!") {
      throw new Error(`file not exist ${fileName}`);
    }
    return "file contents";
  }

  function closeFile(fileName: string) {}

  const fileName = "not exist!";

  // catch 이후에도 나머지 코드를 실행하는 경우가 있으니
  // 정리해야하는 코드가 있다면 finally에서 처리하는거로..
  function run() {
    try {
      console.log(readFile(fileName));
    } catch (error) {
      console.log("caught!");
      return;
    } finally {
      closeFile(fileName);
      console.log("finally");
    }
  }
  run();
}
