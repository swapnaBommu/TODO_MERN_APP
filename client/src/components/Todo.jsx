import {useState} from 'react'
import { useTodos } from "../context/TodoContext.jsx";


const Todo = () => {
  const { todos, addTodo, deleteTodo,updateTodo } = useTodos();
  console.log("Todos:", todos);

  const [text, setText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  // ADD / UPDATE
  const handleSubmit = () => {
    if (!text.trim()) return;

    if (isEdit) {
      updateTodo(editId, { text });// update
      setIsEdit(false);
      setEditId(null);
    } else {
      addTodo(text);              // add
    }

    setText("");
  };

  // PREFILL INPUT
  const handleEdit = (todo) => {
    setText(todo.text);   // fill input
    setIsEdit(true);      // switch mode
    
    setEditId(todo._id); // store id
    console.log(todo._id)
  };

  const handleToggle = (todo) => {
    updateTodo(todo._id, {
      ...todo,
      isCompleted: !todo.isCompleted
    });
  };

  return (
    <div className="glassContainer">
  <h2 className="title"> Todo</h2>

  <div className="glassInputBox">
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      placeholder="Enter todo..."
    />

    <button onClick={handleSubmit}>
      {isEdit ? "Update" : "Add"}
    </button>
  </div>

  <div className="todoList">
    {todos.map((todo) => (
      <div className="glassCard" key={todo._id}>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => handleToggle(todo)}
        />

        <span
          className={
            todo.isCompleted
              ? "todoText completed"
              : "todoText"
          }
        >
          {todo.text}
        </span>

        {!todo.isCompleted && (
          <button
            className="editBtn"
            onClick={() => handleEdit(todo)}
          >
            Edit
          </button>
        )}

        <button
          className="deleteBtn"
          onClick={() =>
            deleteTodo(todo._id)
          }
        >
          Delete
        </button>
      </div>
    ))}
  </div>
</div>

  );
};

export default Todo;
