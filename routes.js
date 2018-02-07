"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persistance_1 = require("./persistance");
const errors_1 = require("../../utils/errors");
var EcranRoutes;
(function (EcranRoutes) {
    function getById(req, res) {
        const id = req.params["id"];
        if (!id)
            return new errors_1.AuditException(403, errors_1.AuditException.MISSING_PARAM).toResponse(res);
        new persistance_1.EcransPersistance()
            .getById(id)
            .then((ecran) => {
            if (!ecran)
                return new errors_1.AuditException(404, errors_1.AuditException.NOT_FOUND).toResponse(res);
            return res.json(ecran);
        })
            .catch(err => {
            return new errors_1.AuditException(500, err).toResponse(res);
        });
    }
    EcranRoutes.getById = getById;
    function get(req, res) {
        new persistance_1.EcransPersistance()
            .getAll()
            .then((testeurs) => {
            if (!testeurs)
                return new errors_1.AuditException(404, errors_1.AuditException.NOT_FOUND).toResponse(res);
            return res.json(testeurs);
        })
            .catch(err => {
            return new errors_1.AuditException(500, err).toResponse(res);
        });
    }
    EcranRoutes.get = get;
    function create(req, res) {
        let ecran = req.body;
        new persistance_1.EcransPersistance()
            .create(ecran)
            .then((ecran) => {
            return res.json(ecran);
        })
            .catch(err => {
            return new errors_1.AuditException(500, err).toResponse(res);
        });
    }
    EcranRoutes.create = create;
    function deleteFromId(req, res) {
        const id = req.params["id"];
        if (!id)
            return new errors_1.AuditException(403, errors_1.AuditException.MISSING_PARAM).toResponse(res);
        new persistance_1.EcransPersistance()
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
    EcranRoutes.deleteFromId = deleteFromId;
})(EcranRoutes = exports.EcranRoutes || (exports.EcranRoutes = {}));
//# sourceMappingURL=routes.js.map