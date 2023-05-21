const {
    createTaskController,
    deleteTaskController,
    getTaskController,
    updateTaskController,
} = require("../controller/taskController");

const router = require("express").Router();

router.get("/", getTaskController);
router.post("/", createTaskController);
router.put("/", updateTaskController);
router.delete("/:id", deleteTaskController);

module.exports = router;
