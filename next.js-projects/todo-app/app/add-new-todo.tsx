"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";


async function addTodo(name: string, refresh: Function) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  refresh();
}

export default function () {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={async () => {
          addTodo(name, router.refresh);
          setName('');
        }}>Add</button>
    </div>
  )
}