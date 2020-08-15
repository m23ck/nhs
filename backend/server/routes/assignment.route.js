const {
    createAssignment,
    getAssignmentById,
    getAssignments,
    updateAssignment,
    deleteAssignment
} = require("../controllers/assignment.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createAssignment);
router.get("/", checkToken, getAssignments);
router.get("/:id", checkToken, getAssignmentById);
router.put("/:id", checkToken, updateAssignment);
router.delete("/:id", checkToken, deleteAssignment);

module.exports = router;
