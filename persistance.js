"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../db/index");
class EcransPersistance {
    constructor() {
        this.queries = {
            getById: "SELECT * FROM ecrans WHERE ecran_id = (?)",
            getAll: "SELECT * FROM ecrans",
            create: "INSERT INTO ecrans (ecran_nom, document_id) VALUES (?, ?)",
            delete: "DELETE FROM ecrans WHERE ecran_id = (?)"
        };
    }
    getById(id) {
        return new Promise((resolve, reject) => {
            index_1.MysqlConnection.pool.getConnection((err, con) => {
                if (err)
                    return reject(err);
                con.query(this.queries.getById, id, (err, rows) => {
                    con.release();
                    if (err)
                        return reject(err);
                    return resolve(rows[0]);
                });
            });
        });
    }
    getAll() {
        return new Promise((resolve, reject) => {
            index_1.MysqlConnection.pool.getConnection((err, con) => {
                if (err)
                    return reject(err);
                con.query(this.queries.getAll, (err, rows) => {
                    con.release();
                    if (err)
                        return reject(err);
                    return resolve(rows);
                });
            });
        });
    }
    create(ecran) {
        return new Promise((resolve, reject) => {
            index_1.MysqlConnection.pool.getConnection((err, con) => {
                if (err)
                    return reject(err);
                con.query(this.queries.create, [ecran.ecran_nom, ecran.document_id], (err, result) => {
                    con.release();
                    if (err)
                        return reject(err);
                    ecran.ecran_id = result.insertId;
                    return resolve(ecran);
                });
            });
        });
    }
    deleteFromId(id) {
        return new Promise((resolve, reject) => {
            index_1.MysqlConnection.pool.getConnection((err, con) => {
                if (err)
                    return reject(err);
                con.query(this.queries.delete, id, (err, result) => {
                    con.release();
                    if (err)
                        return reject(err);
                    return resolve(id);
                });
            });
        });
    }
}
exports.EcransPersistance = EcransPersistance;
//# sourceMappingURL=persistance.js.map