const pool = require("../../config/config");

module.exports = {
  createRoadmap: (data, callBack) => {
    pool.query(
      'insert into roadmap(naam, start_datum, eind_datum) values(?,?,?)',
      [
          data.naam,
          data.start_datum,
          data.eind_datum
        ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getRoadmaps: callBack => {
    pool.query(
      `select * from roadmap`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getRoadmapById: (id, callBack) => {
    pool.query(
      `select * from roadmap where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateRoadmap: (data, id, callBack) => {
    pool.query(
      'update roadmap set naam = ?, start_datum = ?, eind_datum = ? where id = ?',
      [
        data.naam,
        data.start_datum,
        data.eind_datum,
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
  deleteRoadmap: (id, callBack) => {
    pool.query(
      `delete from roadmap where id = ?`,
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
