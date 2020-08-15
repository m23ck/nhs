const {
    createGebruiker,
    getGebruikerById,
    getGebruikers,
    updateGebruiker,
    deleteGebruiker,
    getGebruikerByEmail,
    login
} = require("../controllers/gebruiker.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createGebruiker);
router.get("/", checkToken, getGebruikers);
router.get("/:id", checkToken, getGebruikerById);
router.get("/:email", checkToken, getGebruikerByEmail);
router.put("/:id", checkToken, updateGebruiker);
router.delete("/:id", checkToken, deleteGebruiker);
router.post('/login', login);

module.exports = router;
