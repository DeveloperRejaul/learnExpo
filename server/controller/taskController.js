const { Task } = require("../model/task");

const createTaskController = async (req, res) => {
    const { title, id } = req.body;

    try {
        const newTask = await Task.create({
            id,
            title: title,
        });

        res.status(200).send({ newTask });
    } catch (error) {
        console.log(error);
    }
};

const getTaskController = async (req, res) => {
    const { limit, page, search } = req.query;
    const skip = Number(limit) * Number(page);

    try {
        if (search === undefined) {
            const totalLength = (await Task.find()).length;
            const newTask = await Task.find()
                ?.skip(Number(skip))
                ?.limit(Number(limit));
            res.status(200).send({ newTask, totalLength });
        } else if (search !== undefined) {
            const newTask = await Task.find({
                title: { $regex: search, $options: "i" },
            })
                ?.skip(Number(skip))
                ?.limit(Number(limit));
            res.status(200).send({ newTask });
        }
    } catch (error) {
        console.log(error);
    }
};

const deleteTaskController = async (req, res) => {
    const { id } = req.params;
    try {
        const newTask = await Task.deleteOne({ id });
        res.status(200).send({ newTask });
    } catch (error) {
        console.log(error);
    }
};

const updateTaskController = async (req, res) => {
    const { id, color, selected, title } = req.body;

    try {
        const newTask = await Task.findOneAndUpdate(
            { id },
            {
                $set: {
                    color,
                    selected,
                    title,
                },
            },
            { new: true }
        );
        res.status(200).send({ newTask });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createTaskController,
    deleteTaskController,
    getTaskController,
    updateTaskController,
};
