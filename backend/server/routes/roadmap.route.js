const {
    createRoadmap,
    getRoadmapById,
    getRoadmapsByStudentId,
    getRoadmaps,
    updateRoadmap,
    deleteRoadmap
} = require("../controllers/roadmap.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createRoadmap);
router.get("/", checkToken, getRoadmaps);
router.get("/:id", checkToken, getRoadmapById);
router.get("/student/:student_id", checkToken, getRoadmapsByStudentId);
router.put("/:id", checkToken, updateRoadmap);
router.delete("/:id", checkToken, deleteRoadmap);

module.exports = router;
