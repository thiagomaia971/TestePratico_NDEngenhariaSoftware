define(["require", "exports", "./ClienteRepository"], function (require, exports, ClienteRepository_1) {
    "use strict";
    var UnitOfWork = (function () {
        function UnitOfWork() {
            this._url = "http://localhost:61662/api";
            this.Clientes = new ClienteRepository_1.ClienteRepository(this._url);
        }
        return UnitOfWork;
    }());
    exports.UnitOfWork = UnitOfWork;
});
//# sourceMappingURL=UnitOfWork.js.map