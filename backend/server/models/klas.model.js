const pool = require("../../config/config");

module.exports = {
  createKlas: (data, callBack) => {
    let former_klas_id
    pool.query(
      'insert into klas(naam, klassendocent_id) values(?,?)',
      [
          data.naam,
          data.klassendocent_id
        ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results, results.insertId);
        former_klas_id = results.insertId
      }
    );
    pool.query(
      'insert into jaar_klas(klas_id, richting_id, jaar) values(?,?,?)',
      [ 
        former_klas_id,
          data.richting_id,
          data.jaar
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
