import "./todo-item.style.css";
import { IconPencil, IconTrash } from "../icons";
import { use } from "react";
import TodoContext from "../TodoProvider/TodoContext";

export function ToDoItem({ item }) {
  const { toggleTodoCompleted, deleteTodo, openFormTodoDialog } =
    use(TodoContext);

  const styles = ["todo-item"];

  if (item.completed) {
    styles.push("completed");
  }

  return (
    <li className={styles.join(" ")}>
      <p className="date">
        {new Date(item.createdAt).toLocaleDateString("pt-BR")}
      </p>
      <div className="details">
        <input
          aria-label={`Marcar como ${item.completed ? "não concluído" : "concluído"}`}
          type="checkbox"
          className="checkbox"
          defaultChecked={item.completed}
          onClick={() => toggleTodoCompleted(item)}
        />
        <p className="description">{item.description}</p>
        <div className="actions">
          <button className="btn" onClick={() => deleteTodo(item)}>
            <IconTrash className="icon-trash" />
          </button>
          <button className="btn" onClick={() => openFormTodoDialog(item)}>
            <IconPencil className="icon-pencil" />
          </button>
        </div>
      </div>
    </li>
  );
}
