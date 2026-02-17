import todoModel from "./todo.model.js";

export const createTodo = async (req, res) =>{
    try{
        const {text, isCompleted} = req.body;
         const newTodo = await todoModel.create({
            text,
            isCompleted
        });
        res.status(201).json(newTodo);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}


// UPDATE TODO
export const updateTodo = async (req, res) => {
    try {
        const updatedTodo = await todoModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(updatedTodo);
    } catch (error) {
        const message= "Error in updating the todo"
        res.status(500).json({ message: error.message });
    }
};


// GET ALL TODOS
// GET ACTIVE TODOS ONLY
export const getTodos = async (req, res) => {
    try {
        const todos = await todoModel.find({
            $or : [
                {isDeleted : false},
                {isDeleted : {$exists:false}}
            ]
        });
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// SOFT DELETE TODO
export const deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await todoModel.findByIdAndUpdate(
            req.params.id,
            { isDeleted: true },   // mark as deleted
            { new: true }
        );

        res.status(200).json(deletedTodo);
    } catch (error) {
        res.status(500).json({
            message: "Error in deleting the todo",
            error: error.message
        });
    }
};
