const {
    createResultaat,
    getResultaatById,
    getResultaatByAssignmentId,
    getResultaatByStudentId,
    getResultaten,
    updateResultaat,
    deleteResultaat
} = require("../controllers/resultaat.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createResultaat);
router.get("/", checkToken, getResultaten);
router.get("/:id", checkToken, getResultaatById);
router.get("/:assignment_id", checkToken, getResultaatByAssignmentId);
router.get("/:student_id", checkToken, getResultaatByStudentId);
router.put("/:id", checkToken, updateResultaat);
router.delete("/:id", checkToken, deleteResultaat);

module.exports = router;
