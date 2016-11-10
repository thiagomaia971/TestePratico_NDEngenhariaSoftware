define(["require", "exports", "../../Repositories/UnitOfWork"], function (require, exports, UnitOfWork_1) {
    "use strict";
    var ClienteController = (function () {
        function ClienteController() {
            this.unitOfWork = new UnitOfWork_1.UnitOfWork();
            this.carregarClientes();
        }
        ClienteController.prototype.carregarClientes = function () {
            var _this = this;
            this.unitOfWork.Clientes.getAll()
                .done(function (clientes) {
                _this.inserirBodyTable(clientes);
            });
        };
        ClienteController.prototype.inserirBodyTable = function (clientes) {
            if (clientes.length == 0) {
                $("#clientesBody").html("Nenhum cliente cadastrado");
            }
            else {
                clientes.forEach(function (cliente) {
                    var row = "";
                    row += "<tr>";
                    row += "<td>" + cliente.nome + "</td>";
                    row += "</tr>";
                });
            }
        };
        return ClienteController;
    }());
    exports.ClienteController = ClienteController;
});
//import { UnitOfWork } from "../../Repositories/UnitOfWork";
var ClienteController = (function () {
    //private unitOfWork: UnitOfWork;
    function ClienteController() {
        console.log("carregou o CLienteController");
        // this.unitOfWork = new UnitOfWork();
    }
    ClienteController.prototype.click = function () {
        console.log("tes");
        alert("asdas");
    };
    return ClienteController;
}());
//# sourceMappingURL=ClienteController.js.map