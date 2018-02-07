"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persistance_1 = require("./persistance");
const errors_1 = require("../../utils/errors");
var ResultatRoutes;
(function (ResultatRoutes) {
    function getById(req, res) {
        const id = req.params["id"];
        if (!id)
            return new errors_1.AuditException(403, errors_1.AuditException.MISSING_PARAM).toResponse(res);
        new persistance_1.ResultatsPersistance()
            .getById(id)
            .then((resultat) => {
            if (!resultat)
                return new errors_1.AuditException(404, errors_1.AuditException.NOT_FOUND).toResponse(res);
            return res.json(resultat);
        })
            .catch(err => {
            return new errors_1.AuditException(500, err).toResponse(res);
        });
    }
    ResultatRoutes.getById = getById;
    function get(req, res) {
        new persistance_1.ResultatsPersistance()
            .getAll()
            .then((resultats) => {
            if (!resultats)
                return new errors_1.AuditException(404, errors_1.AuditException.NOT_FOUND).toResponse(res);
            return res.json(resultats);
        })
            .catch(err => {
            return new errors_1.AuditException(500, err).toResponse(res);
        });
    }
    ResultatRoutes.get = get;
    function getByEcran(req, res) {
        const id = req.params["id"];
        if (!id)
            return new errors_1.AuditException(403, errors_1.AuditException.MISSING_PARAM).toResponse(res);
        new persistance_1.ResultatsPersistance()
            .getByEcran(id)
            .then((resultats) => {
            if (!resultats)
                return new errors_1.AuditException(404, errors_1.AuditException.NOT_FOUND).toResponse(res);
            return res.json(resultats);
        })
            .catch(err => {
            return new errors_1.AuditException(500, err).toResponse(res);
        });
    }
    ResultatRoutes.getByEcran = getByEcran;
    function create(req, res) {
        let resultat = req.body;
        new persistance_1.ResultatsPersistance()
            .create(resultat)
            .then((resultat) => {
            return res.json(resultat);
        })
            .catch(err => {
            return new errors_1.AuditException(500, err).toResponse(res);
        });
    }
    ResultatRoutes.create = create;
    function deleteFromId(req, res) {
        const id = req.params["id"];
        if (!id)
            return new errors_1.AuditException(403, errors_1.AuditException.MISSING_PARAM).toResponse(res);
        new persistance_1.ResultatsPersistance()
            .deleteFromId(id)
            .then((deletedId) => {
            return res.json({
                anomalie_id: deletedId
            });
        })
            .catch(err => {
            return new errors_1.AuditException(500, err).toResponse(res);
        });
    }
    ResultatRoutes.deleteFromId = deleteFromId;
})(ResultatRoutes = exports.ResultatRoutes || (exports.ResultatRoutes = {}));
//# sourceMappingURL=routes.js.map