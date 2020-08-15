const pool = require("../../config/config");


module.exports = {
    createGebruiker: (data, callBack) => {
        pool.query(
            'insert into gebruiker(gebruiker_type_id, naam, achternaam, email, jaar_inschrijving, telefoon, adres, wachtwoord) values(?,?,?,?,?,?,?,?)',
            [
                data.gebruiker_type_id,
                data.naam,
                data.achternaam,
                data.email,
                data.jaar_inschrijving,
                data.telefoon,
                data.adres,
                data.wachtwoord
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getGebruikers: callBack => {
        pool.query(
            `select * from gebruikers inner join type on gebruikers.type_id=type.type_id`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getGebruikerById: (id, callBack) => {
        pool.query(`select * from gebruiker inner join type on gebruikers.type_id=type.id where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateGebruiker: (data, id, callBack) => {
        pool.query('update gebruiker set gebruiker_type_id = ?, naam = ?, achternaam = ?, email = ?, jaar_inschrijving = ?, telefoon = ?, adres = ?, wachtwoord = ? where id = ?',
            [
                data.gebruiker_type_id,
                data.naam,
                data.achternaam,
                data.email,
                data.jaar_inschrijving,
                data.telefoon,
                data.adres,
                data.wachtwoord,
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
    deleteGebruiker: (id, callBack) => {
        pool.query(
            `delete from gebruikers where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getGebruikerByEmail: (email, callBack) => {
        pool.query(
            'select * from gebruikers where email = ?',
            [email],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );

    }
};