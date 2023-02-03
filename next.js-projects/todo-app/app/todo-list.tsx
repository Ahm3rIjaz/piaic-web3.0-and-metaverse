import Todo, { ToDo } from "./todo";

const getTodos = async () => {
  let todos = await fetch("http://localhost:3001/api/todo/list");
  return todos.json();
};

export default async function () {
  const { todos } = await getTodos();
  return (
    <div>
      <ul>
        {todos.map((todo: ToDo) => {
          return (
            <li key={todo.id}>
              <Todo todo={todo}></Todo>
            </li>
          )
        })}
      </ul>
    </div>
  )
}