import { FC, useContext } from "react";
import { TodoContext } from "src/pages/_app";

export const TodoCounter: FC = () => {
  const { todos } = useContext(TodoContext);
  return (
    <h1>TODO: {todos.length}件</h1>
  );
};
