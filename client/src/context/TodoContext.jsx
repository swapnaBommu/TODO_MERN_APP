import { createContext,useState,useEffect,useContext } from "react";
import axios from "axios";

const TodoContext = createContext();

export const TodoProvider = ({children}) =>{
    const [todos, setTodos] = useState([]);

    // GET TODOS
    const fetchTodos = async () => {
        const res = await axios.get("http://localhost:5000/api/todos");
        setTodos(res.data);
    };

    const addTodo = async (text) =>{
        const res = await axios.post("http://localhost:5000/api/todos",
            {text, isCompleted:false}
        );
        fetchTodos();
    }

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:5000/api/todos/${id}`);

        setTodos((prev) =>
            prev.filter((todo) => todo._id !== id)
        );
    };

    const updateTodo = async (id, updatedData) => {
        await axios.put(
            `http://localhost:5000/api/todos/${id}`,
            updatedData 
        );

        fetchTodos();
    };



  useEffect(() => {
    fetchTodos();
  }, []);
  
  return ( <TodoContext.Provider value={{todos,addTodo,deleteTodo,fetchTodos,updateTodo}}>{children}</TodoContext.Provider>)

}

// Custom hook
export const useTodos = () => useContext(TodoContext);