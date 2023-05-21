const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
    title: { type: String },
    thumbLine: { type: String },
    video: { type: String },
    avatar: { type: String },
    author: { type: String },
    duration: { type: String },
    views: { type: Number },
});

const Video = mongoose.model("video", VideoSchema);
module.exports = { Video };
