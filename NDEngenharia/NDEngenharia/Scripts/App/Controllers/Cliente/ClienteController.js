"use strict";
var UnitOfWork_1 = require("../../Repositories/UnitOfWork");
var ClienteController = (function () {
    function ClienteController() {
        this.unitOfWork = new UnitOfWork_1.UnitOfWork();
        console.log("carregou o CLienteController");
    }
    return ClienteController;
}());
exports.ClienteController = ClienteController;
//# sourceMappingURL=ClienteController.js.map