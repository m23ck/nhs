const pool = require("../../config/config");

module.exports = {
  createAssignment: (data, callBack) => {
    pool.query(
      'insert into assignment(naam, start_datum, inlever_datum, vak_id, punten, herkansingspunten, roadmap_id) values(?,?,?,?,?,?,?)',
      [
          data.naam,
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
  updateAssignment: (data, id, callBack) => {
    pool.query(
      'update assignment set naam = ?, start_datum = ?, inlever_datum = ?, vak_id = ?, punten = ?, herkansingspunten = ?, roadmap_id = ? where id = ?',
      [
        data.naam,
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
