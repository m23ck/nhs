const pool = require("../../config/config");

module.exports = {
  createAssignment: (data, callBack) => {
    pool.query(
      'insert into assignment(assignment_naam, omschrijving, start_datum, inlever_datum, vak_id, punten, herkansingspunten, roadmap_id) values(?,?,?,?,?,?,?,?)',
      [
          data.assignment_naam,
          data.omschrijving,
          data.start_datum,
          data.inlever_datum,
          data.vak_id,
          data.punten,
          data.herkansingspunten,
          data.roadmap_id
        ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getAssignments: callBack => {
    pool.query(
      `select * from assignment`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getAssignmentById: (id, callBack) => {
    pool.query(
      `select * from assignment where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getAssignmentsByRoadmapId: (roadmap_id, callBack) => {
    pool.query(
      `select assignment.id as id, assignment.assignment_naam, assignment.omschrijving, assignment.start_datum, assignment.inlever_datum, assignment.punten, assignment.herkansingspunten, roadmap.roadmap_naam from assignment LEFT JOIN vak ON vak.id = vak_id LEFT JOIN roadmap ON roadmap_id = roadmap.id where assignment.roadmap_id = ? `,
      [roadmap_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateAssignment: (data, id, callBack) => {
    pool.query(
      'update assignment set assignment_naam = ?, omschrijving = ?, start_datum = ?, inlever_datum = ?, vak_id = ?, punten = ?, herkansingspunten = ?, roadmap_id = ? where id = ?',
      [
        data.assignment_naam,
        data.omschrijving,
        data.start_datum,
        data.inlever_datum,
        data.vak_id,
        data.punten,
        data.herkansingspunten,
        data.roadmap_id,
        id
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteAssignment: (id, callBack) => {
    pool.query(
      `delete from assignment where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
