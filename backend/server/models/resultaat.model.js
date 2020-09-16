const pool = require("../../config/config");

module.exports = {
  getResultaten: (callBack) => {
    pool.query(
      `SELECT
      gebruiker.naam,
      gebruiker.voornaam,
      assignment.assignment_naam,
      assignment.omschrijving,
      assignment.punten,
      roadmap.roadmap_naam,
      vak.vak_naam,
      klas.klas_naam
  FROM
      resultaat
  LEFT JOIN assignment_submission ON assignment_submission_id = assignment_submission.id
  LEFT JOIN gebruiker ON assignment_submission.student_id = gebruiker.id
  LEFT JOIN assignment ON assignment_submission.assignment_id = assignment.id
  LEFT JOIN roadmap ON assignment.roadmap_id = roadmap.id
  LEFT JOIN vak ON assignment.vak_id = vak.id
  LEFT JOIN klas_roadmaps ON roadmap.id = klas_roadmaps.roadmap_id
  LEFT JOIN jaar_klas ON klas_roadmaps.jaar_klas_id = jaar_klas.id
  LEFT JOIN klas ON jaar_klas.klas_id = klas.id`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getResultaatById: (id, callBack) => {
    pool.query(
      `SELECT
      gebruiker.naam,
      gebruiker.voornaam,
      assignment.assignment_naam,
      assignment.omschrijving,
      assignment.punten,
      roadmap.roadmap_naam,
      vak.vak_naam,
      klas.klas_naam
  FROM
      resultaat
  LEFT JOIN assignment_submission ON assignment_submission_id = assignment_submission.id
  LEFT JOIN gebruiker ON assignment_submission.student_id = gebruiker.id
  LEFT JOIN assignment ON assignment_submission.assignment_id = assignment.id
  LEFT JOIN roadmap ON assignment.roadmap_id = roadmap.id
  LEFT JOIN vak ON assignment.vak_id = vak.id
  LEFT JOIN klas_roadmaps ON roadmap.id = klas_roadmaps.roadmap_id
  LEFT JOIN jaar_klas ON klas_roadmaps.jaar_klas_id = jaar_klas.id
  LEFT JOIN klas ON jaar_klas.klas_id = klas.id where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  deleteResultaat: (id, callBack) => {
    pool.query(
      `delete from resultaat where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
