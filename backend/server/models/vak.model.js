const pool = require("../../config/config");

module.exports = {
  createVak: (data, callBack) => {
    pool.query(
      'insert into vak(naam) values(?)',
      [data.naam],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getVakken: callBack => {
    pool.query(
      `select * from vak`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getVakById: (id, callBack) => {
    pool.query(
      `select * from vak where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateVak: (data, id, callBack) => {
    pool.query(
      'update vak set naam = ? where id = ?',
      [
        data.naam,
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
  deleteVak: (id, callBack) => {
    pool.query(
      `delete from vak where id = ?`,
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
