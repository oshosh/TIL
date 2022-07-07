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
    description: "typescript",
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };

  type MyPick<T extends object, K extends keyof T> = { [Key in K]: T[Key] };

  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = MyPick<Todo, "title" | "completed">;

  const todo = {
    title: "Clean room",
    completed: false,
  };

  const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
  type tuple = readonly ["tesla", "model 3", "model X", "model Y"];
  type TupleToObject<T extends readonly [...T]> = { [K in T[number]]: K };

  type result = TupleToObject<typeof tuple>;
  type result2 = TupleToObject<tuple>;
  // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

  const str = "223";

  type FirstLetterOf2<T extends string> =
    T extends `${string}${infer TFirst}${string}` ? TFirst : never;

  type result3 = FirstLetterOf2<typeof str>;

  type UnpackPromiseArray<P> = P extends Promise<infer K>[] ? K : any;
  const arr = [Promise.resolve(1)];
  type ExpectedBoolean = UnpackPromiseArray<typeof arr>; // -> boolean

  function generateId(seed: number) {
    return seed + 5;
  }

  type Id = ReturnType<typeof generateId>;
  lookupEntity(generateId(10)); // 이제 에러 안난다

  // generateId의 리턴 타입에 따라 id의 타입도 바뀐다
  function lookupEntity(id: Id) {
    // id값으로 엔티티를 쿼리한다
  }
}
