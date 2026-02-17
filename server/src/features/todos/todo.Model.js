import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false   // optional + default value
    }
});

// Create Model
const todoModel = mongoose.model("Todo", todoSchema);

// Export Model
export default todoModel;