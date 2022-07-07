import type { NextPage } from "next";
import { useTodos, useTodosDispatch } from "src/state/todo";

const Home: NextPage = () => {
  const todos = useTodos();
  const { toggleIsDone } = useTodosDispatch();

  return (
    <div>
      <h3>TODO一覧</h3>
      {todos.map(todo => (
        <div key={todo.id}>
          <label style={{ fontSize: "1rem" }}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => toggleIsDone(todo.id)}
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
