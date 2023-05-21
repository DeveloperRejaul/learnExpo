const {
    deleteVideoController,
    updateVideoController,
    createVideoController,
    getVideoController,
} = require("../controller/videoController");

const router = require("express").Router();

router.get("/", getVideoController);
router.post("/", createVideoController);
router.put("/", updateVideoController);
router.delete("/:id", deleteVideoController);

module.exports = router;
