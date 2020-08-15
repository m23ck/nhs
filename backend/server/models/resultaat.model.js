const pool = require("../../config/config");

module.exports = {
  createResultaat: (data, callBack) => {
    pool.query(
      'insert into resultaat(assignment_id, student_id, type, status) values(?,?,?,?)',
      [
          data.assignment_id,
          data.student_id,
          data.type,
          data.status,
        ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getResultaten: callBack => {
    pool.query(
      `select * from resultaat`,
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
      `select * from resultaat where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getResultaatByAssignmentId: (assignment_id, callBack) => {
    pool.query(
      `select * from resultaat where assignment_id = ?`,
      [assignment_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getResultaatByStudentId: (student_id, callBack) => {
    pool.query(
      `select * from resultaat where student_id = ?`,
      [student_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateResultaat: (data, id, callBack) => {
    pool.query(
      'update resultaat set naam = ?, jaar = ?, resultaatsendocent_id = ? where id = ?',
      [
        data.naam,
        data.jaar,
        data.resultaatsendocent_id,
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
  }
};
