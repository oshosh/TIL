{
  // 타입에 대한 정의가 너무 난발적으로 정의가 되고 있음
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type VideoOptional = {
    title?: string;
    author?: string;
    description?: string;
  };

  type VideoReadOnly = {
    readonly title?: string;
    readonly author?: string;
    readonly description?: string;
  };

  // map type
  type Optional<T> = {
    // T라는 키중에 안에 P라는거는.....
    // for...in하고 똑같다고 보면 된다.
    [P in keyof T]?: T[P];
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional2 = Optional<Video>;
  type VideoOptional3 = ReadOnly<Video>;

  const videoOp: VideoOptional2 = {
    title: "hi",
    // animal: "??", // error
  };
  videoOp.title = "hello";

  const videoRo2: VideoOptional3 = {
    title: "hi",
    author: "osh",
    description: "typescript",
  };
  console.log(videoRo2.title);
  // videoRo2.title = "123"; // 읽기 전용 속성으로 할당 불가 error

  type Nullable<T> = { [P in keyof T]: T[P] | null };

  const obj2: Nullable<Video> = {
    title: null,
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
