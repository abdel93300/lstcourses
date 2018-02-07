"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../db/index");
class ResultatsPersistance {
    constructor() {
        this.queries = {
            getById: "SELECT * FROM view_resultats WHERE id = (?)",
            getByEcran: "SELECT * FROM view_resultats WHERE ecran_id= (?)",
            getAll: "SELECT * FROM view_resultats",
            create: "INSERT INTO resultats(test_id,ecran_id,status_id,testeur_id,anomalie_id,environnement_nom) VALUES (?,?,?,?,?,?)",
            delete: "DELETE FROM resultats WHERE resultat_id = (?)"
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
    getByEcran(id) {
        return new Promise((resolve, reject) => {
            index_1.MysqlConnection.pool.getConnection((err, con) => {
                if (err)
                    return reject(err);
                con.query(this.queries.getByEcran, id, (err, rows) => {
                    con.release();
                    if (err)
                        return reject(err);
                    return resolve(rows);
                });
            });
        });
    }
    create(resultat) {
        return new Promise((resolve, reject) => {
            index_1.MysqlConnection.pool.getConnection((err, con) => {
                if (err)
                    return reject(err);
                con.query(this.queries.create, [resultat.test_id, resultat.ecran_id, resultat.status_id, resultat.testeur_id, resultat.anomalie_id, resultat.environnement_nom], (err, result) => {
                    con.release();
                    if (err)
                        return reject(err);
                    resultat.resultat_id = result.insertId;
                    return resolve(resultat);
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
exports.ResultatsPersistance = ResultatsPersistance;
//# sourceMappingURL=persistance.js.map