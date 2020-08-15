const {
    createResultaat,
    getResultaatById,
    getResultaten,
    updateResultaat,
    deleteResultaat
} = require("../models/resultaat.model");

module.exports = {
    createResultaat: (req, res) => {
        const body = req.body;

        createResultaat(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error!"
                })
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },
    getResultaatById: (req, res) => {
        const resultaat_id = req.params.id;
        getResultaatById(resultaat_id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    succes: 0,
                    message: "Resultaat bestaat niet!"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getResultaatByAssignmentId: (req, res) => {
        const assignment_id = req.params.assignment_id;
        getResultaatByAssignmentId(assignment_id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    succes: 0,
                    message: "Resultaat bestaat niet!"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getResultaatByStudentId: (req, res) => {
        const student_id = req.params.student_id;
        getResultaatByStudentId(student_id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    succes: 0,
                    message: "Resultaat bestaat niet!"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getResultaten: (req, res) => {
        getResultaten((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.status(204).json({
                    success: 0,
                    message: " Er bestaan op dit moment nog geen resultaten! "
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    updateResultaat: (req, res) => {
        const body = req.body;
        const resultaat_id = req.params.id;
        getResultaatById(resultaat_id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    succes: 0,
                    message: "resultaat bestaat niet!"
                });
            } else {
                updateResultaat(body, resultaat_id, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    return res.status(200).json({
                        success: 1,
                        message: "update Succesvol!"
                    });
                });
            }
        });


    },
    deleteResultaat: (req, res) => {
        const resultaat_id = req.params.id;
        getResultaatById(resultaat_id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "Resultaat bestaat niet!"
                });
            } else {
                deleteResultaat(resultaat_id, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    return res.status(200).json({
                        success: 1,
                        message: "Resultaat succesvol verwijderd!"
                    });
                });
            }
        });
    }
}