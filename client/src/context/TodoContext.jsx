import { createContext,useState,useEffect,useContext } from "react";
import axios from "axios";

const TodoContext = createContext();

export const TodoProvider = ({children}) =>{
    const [todos, setTodos] = useState([]);
    const API_BASE_URL = "https://todo-mern-app-ktek.onrender.com/api/todos";
    // GET TODOS
    const fetchTodos = async () => {
        const res = await axios.get(API_BASE_URL);
        setTodos(res.data);
    };

    const addTodo = async (text) =>{
        const res = await axios.post(API_BASE_URL,
            {text, isCompleted:false}
        );
        fetchTodos();
    }

    const deleteTodo = async (id) => {
        await axios.delete(`${API_BASE_URL}/${id}`);

        setTodos((prev) =>
            prev.filter((todo) => todo._id !== id)
        );
    };

    const updateTodo = async (id, updatedData) => {
        await axios.put(
            `${API_BASE_URL}/${id}`,
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