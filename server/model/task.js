const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    id: { type: String, require: true },
    title: { type: String },
    color: { type: Array, default: [null] },
    checked: { type: Boolean, default: false },
});

const Task = mongoose.model("task", TaskSchema);
module.exports = { Task };
