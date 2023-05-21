const { Video } = require("../model/video");
const { getVideoDurationInSeconds } = require("get-video-duration");
const convertSecondsToTime = require("../utils/convertSecondsToTime");

const createVideoController = async (req, res) => {
    try {
        const { title, author } = req.body;
        const url = req.protocol + "://" + req.get("host") + "/";
        const thumbLine = url + req.files[0].filename;
        const video = url + req.files[1].filename;
        const avatar = url + req.files[2].filename;
        const seconds = await getVideoDurationInSeconds(video);
        const duration = convertSecondsToTime(Number(seconds));
        const newVideo = await Video.create({
            title,
            thumbLine,
            video,
            avatar,
            author,
            duration,
        });

        await res.status(200).send({ newVideo });
    } catch (error) {
        console.log(error);
    }
};

const deleteVideoController = async (req, res) => {};
const getVideoController = async (req, res) => {};
const updateVideoController = async (req, res) => {};

module.exports = {
    createVideoController,
    deleteVideoController,
    getVideoController,
    updateVideoController,
};
