const pool = require("../../config/config");

module.exports = {
  createKlas: (data, callBack) => {
    pool.query(
      'insert into klas(naam, jaar, klassendocent_id) values(?,?,?)',
      [
          data.naam,
          data.jaar,
          data.klassendocent_id
        ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getKlassen: callBack => {
    pool.query(
      `select * from klas`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getKlasById: (id, callBack) => {
    pool.query(
      `select * from klas where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateKlas: (data, id, callBack) => {
    pool.query(
      'update klas set naam = ?, jaar = ?, klassendocent_id = ? where id = ?',
      [
        data.naam,
        data.jaar,
        data.klassendocent_id,
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
  deleteKlas: (id, callBack) => {
    pool.query(
      `delete from klas where id = ?`,
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
