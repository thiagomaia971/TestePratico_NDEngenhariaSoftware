define(["require", "exports", "../../Repositories/UnitOfWork"], function (require, exports, UnitOfWork_1) {
    "use strict";
    var ClienteController = (function () {
        function ClienteController() {
            this.nameSearch = "";
            this.unitOfWork = new UnitOfWork_1.UnitOfWork();
            this.carregarClientes();
        }
        ClienteController.prototype.carregarClientes = function () {
            var _this = this;
            this.unitOfWork.Clientes.getAllByName(this.nameSearch)
                .done(function (clientes) {
                _this.inserirBodyTable(clientes);
            })
                .fail(function (error) {
                if (error.status == 404) {
                    $("#clientesBody").html("Nenhum cliente cadastrado");
                }
            });
        };
        ClienteController.prototype.inserirBodyTable = function (clientes) {
            var data;
            for (var _i = 0, clientes_1 = clientes; _i < clientes_1.length; _i++) {
                var cliente = clientes_1[_i];
                var row = "";
                row += "<tr>";
                row += "<td>" + cliente.nome + "</td>";
                row += "<td>" + cliente.telefone + "</td>";
                row += "<td>" + cliente.endereco.logradouro + "</td>";
                row += "<td>" + cliente.endereco.numero + "</td>";
                row += "<td>" + cliente.endereco.cep + "</td>";
                row += "<td>" + cliente.endereco.referencia + "</td>";
                row += "<td>" + this.getButtonEditar(cliente.id) + " " + this.getButtonExcluir(cliente.id);
                row += "</tr>";
                data += row;
                $("#clientesBody").html(data);
            }
        };
        ClienteController.prototype.getButtonEditar = function (clienteId) {
            var buttonEditar = "<button class='btn btn-info editarCliente' title='Editar' data-clienteid='" + clienteId + "'>";
            buttonEditar += "<span class='glyphicon glyphicon-pencil'></span>";
            buttonEditar += "</button>";
            return buttonEditar;
        };
        ClienteController.prototype.getButtonExcluir = function (clienteId) {
            var buttonEditar = "<button class='btn btn-danger removerCliente' title='Excluir' data-clienteid='" + clienteId + "'>";
            buttonEditar += "<span class='glyphicon glyphicon-remove'></span>";
            buttonEditar += "</button>";
            return buttonEditar;
        };
        return ClienteController;
    }());
    exports.ClienteController = ClienteController;
});
//# sourceMappingURL=ClienteController.js.map