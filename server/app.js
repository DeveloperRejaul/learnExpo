require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoute = require("./route/taskRoute");
const app = express();
const port = process.env.PORT || 3001;
const connectMongoDB = async () => {
    try {
        await mongoose.connect(
            process.env.DB_URL || "mongodb://127.0.0.1:27017/todo"
        );
        console.log("data base connected");
    } catch (error) {
        console.log(error.message);
    }
};
connectMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/task", taskRoute);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
