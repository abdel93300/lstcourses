"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
class MysqlConnection {
    static startConection() {
        this.connectionConfig = `mysql://root:pith.2016@10.161.1.34/uaudit`;
        this.pool = mysql_1.createPool(this.connectionConfig);
    }
}
exports.MysqlConnection = MysqlConnection;
//# sourceMappingURL=index.js.map