import type { NextPage } from "next";
import { useStore } from "src/state/todo";

const Home: NextPage = () => {
  const todos = useStore((state) => state.todos);
  const toggleTodo = useStore((state) => state.toggleTodo);

  return (
    <div>
      <h3>TODO一覧</h3>
      {todos.map(todo => (
        <div key={todo.id}>
          <label style={{ fontSize: "1rem" }}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
          </label>
        </div>
      ))
      }
    </div >
  );
};

export default Home;
