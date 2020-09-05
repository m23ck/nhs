const pool = require("../../config/config");

module.exports = {
  createKlas: async (data, callBack) => {
    let former_klas_id;

    let klasID = await new Promise((resolve, reject) => {
      pool.query(
        "insert into klas(klas_naam, klassendocent_id) values(?,?);",
        [data.klas_naam, data.klassendocent_id],
        (error, results, fields) => {
          if (error) {
            reject(error);
            return callBack(error);
          }
          resolve(results.insertId);
          // callBack(null, results);
        }
      );
    });

    console.log(klasID);

    pool.query(
      "insert into jaar_klas(klas_id, richting_id, jaar) values(?,?,?)",
      [klasID, data.richting_id, data.jaar],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getKlassen: (callBack) => {
    pool.query(
      `SELECT * From jaar_klas INNER JOIN klas ON jaar_klas.klas_id = klas.id INNER JOIN richting ON jaar_klas.richting_id = richting.id INNER JOIN gebruiker ON klas.klassendocent_id = gebruiker.id`
      // `SELECT klas.id as klasid, klas.naam as klasnaam, jaar_klas.jaar as jaar richting.naam as richtingnaam, docent.naam as docentnaam, docent.voornaam as docentvoornaam From ((jaar_klas, klas, richting INNER JOIN klas ON jaar_klas.klas_id = klasid) INNER JOIN richting ON jaar_klas.richting_id = richting.id)`
     , [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
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
      "update klas set klas_naam = ?,klassendocent_id = ? where id = ?",
      [data.naam, data.jaar, data.klassendocent_id, id],
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
  },
};
