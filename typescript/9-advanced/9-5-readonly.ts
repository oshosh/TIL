{
  type ToDo = {
    title: string;
  };

  const todo: Readonly<ToDo> = {
    title: "Delete inactive users",
  };

  // todo.title = "Hello"; // 읽기 전용 속성이므로 'title'에 할당할 수 없습니다.
}
