const {
    deleteTagController,
    updateTagController,
    createTagController,
    getTagController,
} = require("../controller/tagController");

const router = require("express").Router();

router.get("/", getTagController);
router.post("/", createTagController);
router.put("/", updateTagController);
router.delete("/:id", deleteTagController);

module.exports = router;
