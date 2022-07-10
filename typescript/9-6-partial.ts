{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priorty: "high" | "low";
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return {
      ...todo,
      ...fieldsToUpdate,
    };
  }

  const todo: ToDo = {
    title: "learn Typescript",
    description: "study hard",
    label: "study",
    priorty: "high",
  };

  console.log(
    updateTodo(todo, {
      priorty: "low",
    })
  );
  // { title: "learn Typescript", description: "study hard", label: "study", priorty: "low"}
    
}
