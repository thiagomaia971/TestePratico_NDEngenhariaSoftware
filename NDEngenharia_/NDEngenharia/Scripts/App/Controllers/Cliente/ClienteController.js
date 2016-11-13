define(["require", "exports", "../../Repositories/UnitOfWork", "../../Utils/Loading", "../../Utils/RuleViolationBuilder"], function (require, exports, UnitOfWork_1, Loading_1, RuleViolationBuilder_1) {
    "use strict";
    var ClienteController = (function () {
        function ClienteController() {
            this.nameSearch = "";
            this.unitOfWork = new UnitOfWork_1.UnitOfWork();
            this.carregarClientes();
        }
        ClienteController.prototype.carregarClientes = function () {
            var _this = this;
            $("#clientesBody").html("<tr><td colspan='7'> <div class='center fill-horizontal padding'> " + Loading_1.Loading.getLoading() + "</div></td></tr>");
            setTimeout(function () {
                _this.unitOfWork.Clientes.getAllByName(_this.nameSearch)
                    .done(function (clientes) {
                    _this.todosClientes = clientes;
                    _this.montarBodyTable();
                })
                    .fail(function (error) {
                    if (error.status === 404) {
                        $("#clientesBody").html("<tr><td class='text-center' colspan='7'><b>Nenhum cliente cadastrado</b></td></tr>");
                    }
                });
            }, 1000);
        };
        ClienteController.prototype.adicionarCliente = function (cliente) {
            this.unitOfWork.Clientes.add(cliente)
                .done(function (response) {
                window.location.href = '/Cliente/Index';
            })
                .fail(function (error) {
                var errorMessage = RuleViolationBuilder_1.RuleViolationBuilder.build(error.responseJSON);
                $("#mensagem").html(errorMessage);
            });
        };
        ClienteController.prototype.deletarCliente = function (clienteId) {
            var _this = this;
            this.unitOfWork.Clientes.delete(clienteId)
                .done(function (cliente) {
                $("#modalDeletar").modal("hide");
                _this.carregarClientes();
            })
                .fail(function (response) {
            });
        };
        ClienteController.prototype.montarModalDeletar = function (clienteSelecionado) {
            $("#mensagemDeletar").html("Voc\u00EA deseja realmente excluir o cliente <b>" + clienteSelecionado.Nome + "</b>?");
            $("#removerCliente").data("clienteid", clienteSelecionado.Id);
            $("#modalDeletar").modal("show");
        };
        ClienteController.prototype.montarBodyTable = function () {
            var data;
            for (var _i = 0, _a = this.todosClientes; _i < _a.length; _i++) {
                var cliente = _a[_i];
                var row = "";
                row += "<tr>";
                row += "<td>" + cliente.Nome + "</td>";
                row += "<td>" + cliente.Telefone + "</td>";
                row += "<td>" + cliente.Endereco.Logradouro + "</td>";
                row += "<td>" + cliente.Endereco.Numero + "</td>";
                row += "<td>" + cliente.Endereco.CEP + "</td>";
                row += "<td>" + cliente.Endereco.Referencia + "</td>";
                row += "<td>" + this.getButtonEditar(cliente.Id) + " " + this.getButtonExcluir(cliente.Id);
                row += "</tr>";
                data += row;
            }
            $("#clientesBody").html(data);
        };
        ClienteController.prototype.getButtonEditar = function (clienteId) {
            var buttonEditar = "<button class='btn btn-info editarCliente' title='Editar' onclick=\"window.location.href='/Cliente/Editar?clienteId=" + clienteId + "'\" data-clienteid='" + clienteId + "'>";
            buttonEditar += "<span class='glyphicon glyphicon-pencil'></span>";
            buttonEditar += "</button>";
            return buttonEditar;
        };
        ClienteController.prototype.getButtonExcluir = function (clienteId) {
            var buttonEditar = "<button class='btn btn-danger confirmarRemover' title='Excluir' data-clienteid='" + clienteId + "'>";
            buttonEditar += "<span class='glyphicon glyphicon-remove'></span>";
            buttonEditar += "</button>";
            return buttonEditar;
        };
        return ClienteController;
    }());
    exports.ClienteController = ClienteController;
});
//# sourceMappingURL=ClienteController.js.map