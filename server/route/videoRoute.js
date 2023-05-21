const {
    deleteVideoController,
    updateVideoController,
    createVideoController,
    getVideoController,
} = require("../controller/videoController");
const upload = require("../middleware/image.middleware");

const router = require("express").Router();

router.get("/", getVideoController);
router.post("/", upload.array("author", 3), createVideoController);
router.put("/", updateVideoController);
router.delete("/:id", deleteVideoController);

module.exports = router;
