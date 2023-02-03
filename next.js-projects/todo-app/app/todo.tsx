"use client"

import { useRouter } from "next/navigation";

async function update(id: string, isDone: boolean, refresh: Function) {
  await fetch(`/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });

  refresh();
}

async function deleteTodo(id: string, refresh: Function) {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });

  refresh();
}

export default function ({ todo }: { todo: ToDo }) {
  const router = useRouter();

  return (
    <>
      <input type="checkbox" name="todo.name" checked={todo.isDone} onChange={(e) => update(todo.id, e.target.checked, router.refresh)} />
      <span>{todo.name}</span>
      <button onClick={() => deleteTodo(todo.id, router.refresh)}>Delete</button>
    </>
  )
}

export interface ToDo {
  id: string;
  isDone: boolean;
  name: string;
}