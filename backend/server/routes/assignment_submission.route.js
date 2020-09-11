const {
    createAssignmentSubmission,
    getAssignmentSubmissionById,
    getAssignmentSubmissionByAssignmentId,
    getAssignmentSubmissionByStudentId,
    getSpecificAssignmentSubmissions,
    getAssignmentSubmissions,
    changeAssignmentSubmissionStatus,
    deleteAssignmentSubmission
} = require("../controllers/assignment_submission.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createAssignmentSubmission);
router.get("/", checkToken, getAssignmentSubmissions);
router.get("/:id", checkToken, getAssignmentSubmissionById);
router.get("/assignment/:assignment_id", checkToken, getAssignmentSubmissionByAssignmentId);
router.get("/student/:student_id", checkToken, getAssignmentSubmissionByStudentId);
router.get("/:klas_id/:roadmap_id/:status", checkToken, getSpecificAssignmentSubmissions);
router.put("/:id", checkToken, changeAssignmentSubmissionStatus);
router.delete("/:id", checkToken, deleteAssignmentSubmission);

module.exports = router;
